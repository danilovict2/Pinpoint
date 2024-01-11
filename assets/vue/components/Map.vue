<template>
    <div class="map" ref="mapDiv"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const { zoom, center, markers, lines } = defineProps({
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
    lines: {
        type: Array,
        default: []
    }
});

const mapDiv = ref(null);
const emit = defineEmits(['addMarker']);

onMounted(() => {
    const googleMap = new google.maps.Map(
        mapDiv.value,
        {
            center: center,
            zoom: zoom,
            disableDefaultUI: true,
            clickableIcons: false
        }
    );

    googleMap.addListener("click", e => emit('addMarker', e.latLng, googleMap));

    for(let marker of markers) {
        marker?.setMap(googleMap);
    }

    for(let line of lines) {
        line?.setMap(googleMap);
    }
});
</script>

<style scoped>
.map {
    height: 350px;
    display: flex;
    flex-direction: column-reverse;
}
</style>