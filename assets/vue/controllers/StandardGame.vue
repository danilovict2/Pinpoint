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
    const places = [
        { lat: 60.171001, lng: 24.939350 } /*helsinki*/,
        { lat: 48.858093, lng: 2.294694 } /*eiffel tower*/,
        { lat: 51.510020, lng: -0.134730 } /*london*/,
        { lat: 41.8902, lng: 12.4922 } /*coloseum*/,
        { lat: 25.195302, lng: 55.272879 } /*burj khalifa*/,
        { lat: 1.283404, lng: 103.863134 } /*singapore*/,
        { lat: 29.976768, lng: 31.135538 } /*pyramids*/,
        { lat: 40.757876, lng: -73.985592 } /*times sq*/,
        { lat: 42.345573, lng: -71.098326 } /*boston*/,
        { lat: 27.172364, lng: 78.0419901 } /*taj mahal*/,
        { lat: -22.952593, lng: -43.209457 } /*christ the redeemer*/,
        { lat: 44.823220, lng: 20.448407 } /*kalemegdan*/,
        { lat: 43.722546, lng: 10.395502 } /*leaning tower pisa*/,
        { lat: 37.825891, lng: -122.482958 } /*golden gate bridge*/,
        { lat: -33.857699, lng: 151.217560 } /*sydney opera house*/,
        { lat: 37.971870, lng: 23.727978 } /*acropolis*/,
        { lat: 50.940915, lng: 6.956108 } /*koln cathedral*/,
        { lat: 51.178980, lng: -1.823139 } /*stonehenge*/,
        { lat: 34.134454, lng: -118.321660 } /*hollywood sign*/,
        { lat: 35.658675, lng: 139.747089 } /*tokyo tower*/,
        { lat: 43.641424, lng: -79.387015 } /*toronto*/,
        { lat: 44.016802, lng: 20.888691 } /*kragujevac spomenik*/,
        { lat: 44.796725, lng: 20.470112 } /*hram svetog save*/,
        { lat: 46.101668, lng: 19.668135 } /*subotica boss*/,
        { lat: 46.099798, lng: 19.758494 } /*palic*/,
        { lat: 46.109345, lng: 19.668796 } /*majsanski most*/,
        { lat: 45.431228, lng: 12.333307 } /*venice*/,
        { lat: 43.772783, lng: 11.253926 } /*firenze*/,
        { lat: 41.402324, lng: 2.173871 } /*sagrada familia*/,
        { lat: 46.111197, lng: 19.690303 } /*damirova kuca*/,
        { lat: 63.436578, lng: 10.445091 } /*north norway*/,
        { lat: 55.497638, lng: 9.023594 } /*mid denmark*/,
        { lat: 55.751672, lng: 37.622761 } /*moscow*/,
        { lat: 31.306725, lng: 34.788542 } /*israel*/,
        { lat: 4.721541, lng: -74.041779 } /*bogota*/,
        { lat: 22.161356, lng: -100.956237 } /*san luis mexico*/,
        { lat: 32.787682, lng: -96.800156 } /*dallas*/,
        { lat: 29.956409, lng: -90.063351 } /*new orleans*/,
        { lat: 64.054864, lng: -21.494411 } /*iceland*/,
        { lat: 28.602995, lng: 77.082660 } /*new delhi*/,
        { lat: 13.770791, lng: 100.565907 } /*bangkok*/,
        { lat: 56.233422, lng: 92.159842 } /*siberia*/,
        { lat: 36.359045, lng: 127.423773 } /*daejeon south korea*/,
        { lat: 34.687419, lng: 135.523136 } /*osaka*/,
        { lat: 40.927263, lng: -5.617899 } /*salamanca spain*/,
    ];

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