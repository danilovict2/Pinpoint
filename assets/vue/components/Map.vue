<template>
    <div class="map" ref="mapDiv"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const { zoom, center } = defineProps({
    zoom: {
        type: Number,
        default: 1
    },
    center: {
        type: Object,
        default: { lat: 0, lng: 0 }
    }
});

const mapDiv = ref(null);
const emit = defineEmits(['markerSet']);
let currentMarker = null;

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

    googleMap.addListener("click", e => {
        currentMarker?.setMap(null);
        currentMarker = new google.maps.Marker({
            position: e.latLng,
            map: googleMap
        });

        emit('markerSet', e.latLng);
    });
});
</script>

<style scoped>
.map {
    height: 350px;
    display: flex;
    flex-direction: column-reverse;
}
</style>