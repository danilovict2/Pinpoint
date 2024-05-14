<template>
    <FinalResults v-if="isGameOver" :score="score"></FinalResults>
    <div class="game" style="height: 100%;" v-else>
        <Panorama :start-position="currentRoundStartPosition" v-if="roundScore === null">
            <GuessArea :round="round" @guessed="calculateScore" map="Širom Sveta" v-model="isGuessable">
                <div class="map-area">
                    <Map @map-click="setCurrentMarker" @keyup.space="calculateScore"></Map>
                </div>
            </GuessArea>
        </Panorama>

        <RoundResult v-else :start-position="currentRoundStartPosition" :guess-position="currentRoundGuessPosition"
            :score="roundScore" :round="round" :distance="distanceFromGuess" @round-end="handleRoundEnd">
        </RoundResult>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import FinalResults from '../components/FinalResults.vue';
import GuessArea from '../components/GuessArea.vue';
import Panorama from '../components/Panorama.vue';
import RoundResult from '../components/RoundResult.vue';
import Map from '../components/Map.vue';
import { getLocations } from '../stores/locations';

const roundScore = ref(null);
const currentRoundStartPosition = ref(null);
const currentRoundGuessPosition = ref(null);
const round = ref(0);
const isGameOver = ref(false);
const distanceFromGuess = ref(0);
let currentMarker = null;
let score = 0;
const isGuessable = ref(false);
startRound();

function startRound() {
    currentRoundStartPosition.value = pickStartPosition();
    roundScore.value = null;
    round.value++;
    isGuessable.value = false;
    currentMarker = null;
}

function handleRoundEnd() {
    if (round.value < 5) {
        startRound();
    } else {
        isGameOver.value = true;
    }
}

function setCurrentMarker(latLng, map) {
    isGuessable.value = true;
    currentMarker?.setMap(null);
    currentMarker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: URL = "/img/player-marker.png"
    });
}

function calculateScore() {
    // Earth's radius in metres (mean radius = 6,371km)
    const radius = 6371e3;
    const position = currentMarker.position;
    const startPosition = currentRoundStartPosition.value;

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
    distanceFromGuess.value = (radius * c) / 1000;
    roundScore.value = Math.round(5000 * Math.exp(-0.5 * (distanceFromGuess.value / 2000) ** 2));
    currentRoundGuessPosition.value = { lat: position.lat(), lng: position.lng() };
    score += roundScore.value;
}

function pickStartPosition() {
    const places = getLocations();
    return places[Math.floor(Math.random() * (places.length))];
}
</script>

<style>
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


</style>