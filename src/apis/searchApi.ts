import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoibWFyaW84YXB1bmtldG8iLCJhIjoiY2tnNjI2ZmwxMGdxNjJ1bnpwejEwbTRlbSJ9.i-k-QsMjyIgElbV2V-jRHw'
    }
});

export default searchApi;