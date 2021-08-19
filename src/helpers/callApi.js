



export const callApi = async (path, completeURL="") => {

        const baseURL ="https://pokeapi.co/api/v2/"

            if(completeURL ===""){
                
                
                
                const respuesta = await fetch(baseURL+path)
                
                const body = await respuesta.json();
                
                
                return body;
            }else{
                const respuesta = await fetch(completeURL)
                
                const body = await respuesta.json();
                
                
                return body;
            }



}