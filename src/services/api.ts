

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

if(!apiKey) {
    throw new Error('Deu ruim na chave da API');
}

const params = new URLSearchParams({
    api_key: apiKey,
})

const api = async (url: string) => {
   const response = await fetch(`${url}?${params}`)
   if(!response.ok){
        throw new Error('falha ao pegar os dados');
   }
   return response
} 


export default api;

