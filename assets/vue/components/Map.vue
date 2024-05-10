<template>
    <div class="map" ref="mapDiv"></div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
const { zoom, center, markers, itemsToDisplay, fitBounds } = defineProps({
    zoom: {
        type: Number,
        default: 1
    },
    center: {
        type: Object,
        default: { lat: 0, lng: 0 }
    },
    markers: {
        type: Array,
        default: []
    },
    itemsToDisplay: {
        type: Array,
        default: []
    },
    fitBounds: {
        type: Boolean,
        default: false
    },
    
});

const mapDiv = ref(null);
const emit = defineEmits(['mapClick']);

onMounted(() => {
    const map = new google.maps.Map(
        mapDiv.value,
        {
            center: center,
            zoom: zoom,
            disableDefaultUI: true,
            clickableIcons: false,
            draggableCursor: 'crosshair',
            draggingCursor: 'croshair',
        }
    );

    map.addListener("click", e => {
        axios.post('/reverse', null, {
            params: {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
            }
        })
            .then(result => emit('mapClick', e.latLng, map, result.data.address.country))
            .catch(error => emit('mapClick', e.latLng, map, ''));
        });
    for (let marker of markers) {
        marker.setMap(map);
    }

    for (let item of itemsToDisplay) {
        item.setMap(map);
    }

    if (fitBounds) {
        const bounds = new google.maps.LatLngBounds();
        for (let marker of markers) {
            bounds.extend(marker.position);
        }
        map.fitBounds(bounds);
    }
});
</script>

<style scoped>
.map {
    height: 550px;
    display: flex;
    flex-direction: column-reverse;
}
</style>