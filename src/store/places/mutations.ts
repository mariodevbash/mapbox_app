import { Feature } from '@/interfaces/places';
import { MutationTree } from 'vuex';
import { PlacesState } from './state';

type lngLat = {
    lng: number;
    lat: number;
}

const mutation: MutationTree<PlacesState> = {
    setLngLat(state: PlacesState, { lng, lat }: lngLat) {
        state.userLocation = [lng, lat];
        state.isLoading = false
    },

    setIsLoadingPlaces(state) {
        state.isLoadingPlaces = true;
    },

    setPlaces(state, places: Feature[]) {
        state.places = places;
        state.isLoadingPlaces = false;
    }
}


export default mutation;