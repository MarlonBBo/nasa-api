'use service';
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

if(!apiKey) {
    throw new Error('Deu ruim na chave da API');
}

const params = new URLSearchParams({
    api_key: apiKey,
})

const api = async (url: string) => {
    fetch(`${url}?${params}`)
    .then(response => response.json())
    .then(data => console.log(data))
} 

export default api;

