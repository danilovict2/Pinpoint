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
    const map = new google.maps.Map(
        mapDiv.value,
        {
            center: center,
            zoom: zoom,
            disableDefaultUI: true,
            clickableIcons: false
        }
    );

    map.addListener("click", e => emit('addMarker', e.latLng, map));

    for(let marker of markers) {
        marker.setMap(map);
    }

    for(let line of lines) {
        line.setMap(map);
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