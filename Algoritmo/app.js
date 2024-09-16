const  Lista = ( List,consultar)=>{
    const result = [];


    consultar.forEach(numero => {

        let menor = 'X';
        let mayor = 'X';

        for(let i = 0; i < List.length; i++){
            if (List[i] < numero){
                menor = List[i];
            }else if (List[i] > numero){
                mayor = List[i];
                break;

            }

        }

        result.push(`${menor} ${mayor}`)
        
    });

    return result;


}


const  realizarBusqueda = () => {
    const listaBaseInput = document.getElementById("listaBase").value;
    const consultasInput = document.getElementById("consultas").value;

    const listaBase = listaBaseInput.split(' ').map(Number);
    const consultas = consultasInput.split(' ').map(Number);

    const resultados = Lista(listaBase, consultas);

    mostrarResultados(resultados);
}



const  mostrarResultados = (resultados) => {
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ''; 

    resultados.forEach(resultado => {
        const p = document.createElement('p');
        p.textContent = resultado;
        resultadosDiv.appendChild(p);
    });
}

