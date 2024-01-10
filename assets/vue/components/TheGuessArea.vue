<template>
    <div class="guess-area">
        <TheMap @marker-set="latLng => guessLatLng = latLng"></TheMap>
        <button :disabled="!guessLatLng" @click="guess">Finish guess</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import TheMap from './TheMap.vue';
const { startPosition } = defineProps({
    startPosition: Object
});

const guessLatLng = ref(null);

function guess() {
    // Earth's radius in metres (mean radius = 6,371km)
    const radius = 6371e3;
    const position = guessLatLng.value;

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
    alert(`You are ${distance}km from the original position`);
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