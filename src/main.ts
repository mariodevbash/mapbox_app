import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_KEY;

if (!navigator.geolocation) {
    alert('Tu navegador no soporta el geoLocation')
    throw new Error('Tu navegador no soporta el geoLocation');
}

createApp(App).use(store).use(router).mount('#app')
