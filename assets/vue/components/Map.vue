<template>
    <div class="map" ref="mapDiv"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const { zoom, center, markers, lines, fitBounds } = defineProps({
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
    },
    fitBounds: {
        type: Boolean,
        default: false
    }
});

const mapDiv = ref(null);
const emit = defineEmits(['addMarker']);

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

    map.addListener("click", e => emit('addMarker', e.latLng, map));

    for (let marker of markers) {
        marker.setMap(map);
    }

    for (let line of lines) {
        line.setMap(map);
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
    filter: invert(1);
}
</style>