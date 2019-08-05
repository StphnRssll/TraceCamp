// Responsible for getting data from nasa
import axios from 'axios';

const API_KEY = "wDRgWVfKCQHgOf0wvzcwPMOTgM7q71qsGcHy2zQ3"

export const getAsteroids = (start, end) =>{
    return axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${start}&end_date=${end}&api_key=${API_KEY}`)
}