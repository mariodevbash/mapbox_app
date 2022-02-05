import axios from "axios";

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoibWFyaW84YXB1bmtldG8iLCJhIjoiY2tnNjI2ZmwxMGdxNjJ1bnpwejEwbTRlbSJ9.i-k-QsMjyIgElbV2V-jRHw'
    }
});

export default directionsApi;