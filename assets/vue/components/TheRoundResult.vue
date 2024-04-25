<template>
    <div class="result">
        <Map style="width: 75%; height: 100%;" fit-bounds :center="guessPosition"
            :markers="markers" :lines="lines"></Map>
        <div class="details">
            <span class="round-count">Runda <strong style="color: #69686f;">{{ round }} / 5</strong> je završena</span>
            Broj bodova u ovoj rundi:
            <span class="max-score"><span class="score">{{ score }}</span> / 5000</span>
            Razdaljina od tačne lokacije:
            <span style="color: white;" v-if="distance === -1">-</span>
            <span style="color: white;" v-else>{{ distance > 1 ? Math.round(distance) + 'km' : Math.round(distance * 1000) + 'm' }}</span>
            <button class="continue-btn" @click="emit('roundEnd')">{{ round === 5 ? 'Prikaži rezultate' : 'Sledeća runda' }}</button>
        </div>
    </div>
</template>

<script setup>
import { game } from '../stores/game.js';
import MarkerPair from '../services/MarkerPair.js';
import Map from './Map.vue';
const { startPosition, guessPosition } = defineProps({
    round: Number,
    score: Number,
    distance: Number,
    startPosition: Object,
    guessPosition: Object,
});

const pair = new MarkerPair(startPosition, guessPosition);
game.guesses.push(pair);

const markers = [pair.startPositionMarker];
const lines = [];

if (Object.keys(guessPosition).length !== 0) {
    markers.push(pair.endPositionMarker);
    lines.push(pair.lineBetweenMarkers);
}

const emit = defineEmits(['roundEnd']);
</script>

<style>
.result {
    position: relative;
    width: 100%;
    height: 100%;
}

.details{
    position: absolute;
    top: 0;
    right: 0;
    width: 25%;
    height: 100%;
    color: #78777c;
    text-align: center;
    display: flex;
    flex-direction: column;
    font-size: 25px;
    font-weight: 500;
}

.round-count{
    border: 1px solid #434343;
    border-radius: 10px;
    width: max-content;
    padding: 10px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    color: #6e6d75;
    font-size: 17px;
    margin-bottom: 40px;
}

.continue-btn{
    margin-top: 100%;
    margin-left: auto;
    margin-right: auto;
    font-size: 25px;
    background-color: #338ad7;
    color: white;
    width: 300px;
    height: 55px;
    cursor: pointer;
    transition: 0.2 ease-in-out;
    border-radius: 5px;
    border: none;
}

.continue-btn:hover{
    background-color: #2e79bb;
}


.continue-btn:hover:active{
    background-color: rgb(45, 111, 170);
    transition: 0.1s ease-in-out;
}

.score{
    font-size: 30px;
    color: #43a047;
}

.max-score{
    font-size: 18px;
    margin-bottom: 50px;
}
</style>