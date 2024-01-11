<template>
    <div class="guess-area">
        <Map @add-marker="setCurrentMarker"></Map>
        <button :disabled="!isGuessable" @click="guess">Finish guess</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Map from './Map.vue';
const { startPosition } = defineProps({
    startPosition: Object
});

const emit = defineEmits(['guessed']);
let currentMarker = null;
const isGuessable = ref(false);

function setCurrentMarker(latLng, map) {
    isGuessable.value = true;
    currentMarker?.setMap(null);
    currentMarker = new google.maps.Marker({
        position: latLng,
        map: map
    });
}

function guess() {
    // Earth's radius in metres (mean radius = 6,371km)
    const radius = 6371e3;
    const position = currentMarker.position;

    // Angles need to be radians to pass trig functions!
    const lat1Radian = (position.lat() * Math.PI) / 180;
    const lat2Radian = (startPosition.lat * Math.PI) / 180;
    const latDelta = ((position.lat() - startPosition.lat) * Math.PI) / 180;
    const longDelta = ((position.lng() - startPosition.lng) * Math.PI) / 180;

    // The square of half the chord length between the points
    const a =
        Math.sin(latDelta / 2) * Math.sin(latDelta / 2) +
        Math.cos(lat1Radian) *
        Math.cos(lat2Radian) *
        Math.sin(longDelta / 2) *
        Math.sin(longDelta / 2);

    // Angular distance in radians
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // Distance is the radius * angular distance
    const distance = (radius * c) / 1000;
    const score = Math.round(5000 * Math.exp(-0.5 * (distance / 2000)**2));
    emit('guessed', score, { lat: position.lat(), lng: position.lng() });
}
</script>

<style scoped>
.guess-area {
    z-index: 2;
    display: flex;
    flex-direction: column;
    width: 350px;
    gap: 10px;
}
</style>