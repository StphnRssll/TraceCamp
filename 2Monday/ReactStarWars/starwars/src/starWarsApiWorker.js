// Responsible for getting data from api
import axios from 'axios';

export const getPlanets = (page) =>{
    return axios.get(`https://swapi.co/api/planets/?page=${page}`)
}