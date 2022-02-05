import { usePlacesStore, useMapStore } from "@/composables";
import Mapboxgl from "mapbox-gl";
import { defineComponent, onMounted, ref, watch } from "vue";

export default defineComponent({
    name: 'MapView',
    setup() {

        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserLocationReady } = usePlacesStore();
        const { setMap } = useMapStore()

        const initMap = async () => {

            if (!mapElement.value) return;
            if (!userLocation.value) return;

            await Promise.resolve();

            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/light-v10', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15 // starting zoom
            });

            const myLocationPopup = new Mapboxgl.Popup({ offset: [0, -35] })
                .setLngLat(userLocation.value)
                .setHTML(`
                <h4>Aqui estoy</h4>
                <p>Actualmente en Jalisco</p>
                `)

            const myLocationMarker = new Mapboxgl.Marker()
                .setLngLat(userLocation.value)
                .setPopup(myLocationPopup)
                .addTo(map)

            setMap(map)

        }

        onMounted(() => {
            if (isUserLocationReady.value) initMap()
        })

        watch(isUserLocationReady, (newVal) => {
            if (isUserLocationReady.value) initMap()
        })

        return {
            isUserLocationReady,
            mapElement
        }
    }
});