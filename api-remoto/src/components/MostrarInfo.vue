<template>
    <div class="bg-white p-4 rounded shadow-md">
      <img :src="user.picture.medium" alt="user avatar" class="rounded-full">
      <h3 class="mt-4 text-lg font-semibold">{{ user.name.first }} {{ user.name.last }}</h3>
      <p class="text-gray-600">{{ user.email }}</p>
      <p class="text-gray-600">{{ user.location.city }}, {{ user.location.country }}</p>
    </div>
  </template>
  
  <script lang="ts">
  
  import { defineComponent, PropType } from 'vue';
  
  interface User {
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
  
  export default defineComponent({
    props: {
      user: {
        type: Object as PropType<User>,
        required: true
      }
    }
  });
  </script>
  