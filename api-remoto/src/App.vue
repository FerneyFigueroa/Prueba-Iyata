<template>
    <div class="container mx-auto">
      <h1 class="text-3xl font-bold my-4">Usuarios Aleatoreos</h1>
      <button class="bg-blue-500 text-white px-4 py-2 rounded" @click="fetchUsers">
       Mostrar
      </button>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <MostrarInfo v-for="user in users" :key="user.login.uuid" :user="user" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import MostrarInfo from './components/MostrarInfo.vue';
  import { ref } from 'vue';
  import axios from 'axios';

  
  interface User {
    login: {
      uuid: string;
    };
    name: {
      first: string;
      last: string;
    };
    email: string;
    picture: {
      medium: string;
    };
    location: {
      city: string;
      country: string;
    };
  }
  
 
  const users = ref<User[]>([]);
  

  const fetchUsers = async (): Promise<void> => {
    try {
      const response = await axios.get('https://randomuser.me/api/?results=6');
      users.value = response.data.results;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  </script>
  
  <style>
  
  </style>
  