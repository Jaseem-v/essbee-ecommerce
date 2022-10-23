import axios from "axios"

export const instance = axios.create({
    baseURL: 'http://localhost:8000/',
    timeout: 1000,
    headers: {
        'content-type': 'application/json',
        "Acces-Control-Allow-Orgini": "*"
    }
});


export async function getProductData() {
    const response = await instance.get(`products/`);
    // console.log(response.data);
    return (response.data)
}

