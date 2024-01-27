<template>
    <div class="result">
        <Map style="height: 100%;" :zoom="3" :markers="markers" :lines="lines"></Map>
        <div class="details">
            <h1>The final results are in!</h1>
            <div class="player-scores">
                <h1>1 |</h1> <span style="display: flex; flex-direction: column;">name {{ score }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { game } from '../stores/game';
import Map from './Map.vue';
const { score } = defineProps({
    score: Number
});

const markers = [];
const lines = [];

game.guesses.forEach((markerPair) => {
    markers.push(markerPair.startPositionMarker);
    markers.push(markerPair.endPositionMarker);
    lines.push(markerPair.lineBetweenMarkers);
});
</script>