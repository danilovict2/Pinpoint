<template>
    <div class="result">
        <Map style="height: 100%;" fit-bounds :center="guessPosition"
            :markers="[pair.startPositionMarker, pair.endPositionMarker]" :lines="[pair.lineBetweenMarkers]"></Map>
        <div class="details">
            ROUND {{ round }} / 5
            {{ score }} / 5000
            <button @click="emit('roundEnd')">{{ round === 5 ? 'VIEW RESULTS' : 'CONTINUE' }}</button>
        </div>
    </div>
</template>

<script setup>
import { game } from '../stores/game.js';
import MarkerPair from '../services/MarkerPair.js';
import Map from './Map.vue';
const { score, startPosition, guessPosition, round } = defineProps({
    round: Number,
    score: Number,
    startPosition: Object,
    guessPosition: Object,
});

const pair = new MarkerPair(startPosition, guessPosition);
game.guesses.push(pair);

const emit = defineEmits(['roundEnd']);
</script>

<style>
.result {
    position: relative;
    width: 100%;
    height: 100%;
    filter: invert(1);
}

.details {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    width: 500px;
    height: 100%;
    background-color: #292548;
    color: white;
    filter: invert(1);
}
</style>