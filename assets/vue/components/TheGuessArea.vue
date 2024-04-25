<template>
    <div class="guess-area">
        <div class="map-area">
            <Map @map-click="setCurrentMarker" @keyup.space="guessButton.click()"></Map>
        </div>
        <div class="container">
            <div class="round-details">
                <div class="box">
                    <h4>Mapa:<br> Širom Sveta</h4>
                </div>
                <div class="box round">
                    <h4>Runda:<br> {{ round }}/5</h4>
                </div>
                <div style="padding: 0px 10px;">
                    <h4>Vreme:<br> <span>{{ timer.minutes }}</span>:<span>{{ timer.seconds }}</span></h4>
                </div>
            </div>
            <button :disabled="!isGuessable" @click="guess" ref="guessButton">Pogodi</button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import Map from './Map.vue';
import { useTimer } from 'vue-timer-hook';
const { startPosition } = defineProps({
    startPosition: Object,
    round: Number
});

const emit = defineEmits(['guessed']);
let currentMarker = null;
const isGuessable = ref(false);
const guessButton = ref(null);
// FIXED TO THREE MINUTES
const timer = useTimer(new Date().setSeconds(new Date().getSeconds() + 180));

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
    const score = Math.round(5000 * Math.exp(-0.5 * (distance / 2000) ** 2));
    emit('guessed', score, { lat: position.lat(), lng: position.lng() }, distance);
}

onMounted(() => {   
    watchEffect(() => {
        if (timer.isExpired.value) {
            if (currentMarker) guess();
            else emit('guessed', 0, {}, -1);
        }
    });
});
</script>

<style scoped>
.guess-area {
    filter: invert(1);
    z-index: 10;
}

.map-area {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 250px;
    gap: 10px;
    position: absolute;
    right: 3rem;
    transition: all 0.1s ease-out;
    bottom: 6rem;
    opacity: .6;
    transition-delay: 0.5s;
    margin-top: 100px;
}

.map-area:hover {
    width: 640px;
    height: 700px;
    margin-bottom: -150px;
    opacity: 1;
    transition-delay: 0s;
    margin-top: 0px;
}

.container {
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 1rem;
    right: 3rem;
    gap: 20px;
    align-items: flex-start;
    z-index: 2;
}

.round-details {
    z-index: 2;
    width: 320px;
    background-color: #202020;
    color: #ffff;
    display: flex;
    flex-direction: row;
    height: 55px;
    text-align: center;
    border-radius: 5px;
    gap: 20px;
    text-align: center;
}

h4 {
    margin-top: 10px;
}

.round {
    margin-left: -25px;
}

.box {
    border-right: 1px solid rgba(255, 255, 255, .2);
    padding: 0px 18px;
}

button {
    z-index: 2;
    color: white;
    background-color: rgba(177, 177, 177, 0.675);
    font-size: 25px;
    width: 300px;
    height: 55px;
    cursor: pointer;
    transition: 0.2 ease-in-out;
    border-radius: 5px;
    border: none;
    pointer-events: none;
}

button:enabled {
    background-color: #338ad7;
    opacity: 1;
    pointer-events: all;
}

button:hover:enabled {
    background-color: #2e79bb;
}

button:hover:enabled:active {
    background-color: #4d98d8;
    transition: 0.2s ease-in-out;
}
</style>