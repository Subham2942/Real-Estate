import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url)=>{
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '8c0d773029msha0a0936ec6ad22cp169ee2jsnbc99df600a95'
        }
    });
    return data;
}