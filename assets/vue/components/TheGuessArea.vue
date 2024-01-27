<template>
    <div class="guess-area">
        <Map @add-marker="setCurrentMarker" @keyup.space="guessButton.click()"></Map>
    </div>
    <div class="container">
        <div class="round-details">
                <h2>Round: X/5</h2>
                <h2>Time: 2:00</h2>
        </div>
        <button :disabled="!isGuessable" @click="guess" ref="guessButton">Finish guess</button>
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
const guessButton = ref(null);

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
    width: 300px;
    height: 250px;
    gap: 10px;
    position: absolute;
    right: 3rem;
    transition: all 0.3s ease-in-out;
    bottom: 6rem;
}

.guess-area:hover{
    width: 700px;
    height: 800px;
    margin-bottom: -250px;
}
.container{
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 1rem;
    right: 3rem;
    gap: 20px;
    align-items: flex-start;
    filter: invert(1);
    z-index: 2;
}

.round-details{
    z-index: 2;
    width: 380px;
    background-color: #1c1d1e;
    color:#ffff;
    display: flex;
    flex-direction: row;
    height: 45px;
    justify-content: space-around;
    padding-bottom: 15px;
    text-align: center;
    border-radius: 10px;
}

button{
    z-index: 2;
    color: white;
    background-color: rgba(177, 177, 177, 0.675);
    font-size: larger;
    width: 300px;
    height: 60px;
    cursor: pointer;
    transition: 0.2 ease-in-out;
    border-radius: 10px;
    border: none;
}

button:enabled{
    background-color: rgb(0, 179, 255);
}
</style>