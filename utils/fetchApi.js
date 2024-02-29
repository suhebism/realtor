import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';




export const fetchApi = async (url)=>{
    const {data} = await axios.get((url),{
        headers: {
    'X-RapidAPI-Key': 'dc3731be83msh29a1ffbed32d2a0p1f91c0jsn98c97a491d46',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
    })
    return data;
}

