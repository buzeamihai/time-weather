import { SEARCH_WEATHER } from './types';
import axios from 'axios';

export function searchWeather(city){
    const url = 'http://api.wunderground.com/api/13dfa3a7167c29f3/forecast/q/RO/';

    const result = axios.get(`${url}${city}.json`);

    console.log(result);

    return {
        type: SEARCH_WEATHER,
        payload: result       
    }
}