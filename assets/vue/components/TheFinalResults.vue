<template>
    <div class="result">
        <Map class="result-map" :zoom="3" :markers="markers" :lines="lines"></Map>
        <div class="details">
            <h1>The final results are in!</h1>
            <div class="player-scores">
                <h1>1 |</h1> <div style="display: flex; flex-direction: column;">name <strong>{{ score }}</strong></div>
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

<style>
.result-map{
    height: 100%;
    display: inline;
    position: relative;
}

.details{
    display: flex;
    flex-direction: column;
    flex: .8;
    background-image: url(https://geotastic.b-cdn.net/app_assets/result-background-right.jpg);
    background-position: top center;
    background-size: cover;
    min-width: 500px;
}
</style>