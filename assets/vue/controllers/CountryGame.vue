<template>
    <FinalResults v-if="isGameOver" :score="score"></FinalResults>
    <div class="game" style="height: 100%;" v-else>
        <Panorama :start-position="startPosition" v-if="roundScore === null">
            <GuessArea :round="round" @guessed="calculateScore" map="Širom Sveta" v-model="isGuessable">
                <div class="map-area">
                    <Map @map-click="changePolygonPaths" @keyup.space="calculateScore"></Map>
                </div>
            </GuessArea>
        </Panorama>

        <RoundResult v-else :start-position="startPosition" :guess-position="guessPosition"
            :score="roundScore" :round="round" @round-end="handleRoundEnd" :polygons="[...guessCountryPolygons, ...p]">
        </RoundResult>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import FinalResults from '../components/FinalResults.vue';
import GuessArea from '../components/GuessArea.vue';
import Panorama from '../components/Panorama.vue';
import RoundResult from '../components/RoundResult.vue';
import axios from 'axios';
import useCountry from '../stores/country';
import Map from '../components/Map.vue';
import { getLocations } from '../stores/locations.js';

let p = [];
let guessCountryPolygons = [];
const isGameOver = ref(false);
const roundScore = ref(null);
const round = ref(0);
const startPosition = ref({});
const guessCountry = ref('');
const guessPosition = ref({});
const isGuessable = ref(false);
let finalGuess = '';
let score = 0;

startRound();

function startRound() {
    pickStartPosition();
    roundScore.value = null;
    round.value++;
    isGuessable.value = false;
    finalGuess = '';
    guessPosition.value = {};
}

function handleRoundEnd() {
    if (round.value < 5) {
        startRound();
    } else {
        isGameOver.value = true;
    }
}

function changePolygonPaths(latLng, map, country) {
    isGuessable.value = true;
    finalGuess = country;
    guessPosition.value = latLng;

    for (let polygon of p) {
        polygon.setMap(null);
    }

    p = getPolygonsForCountry(country, map, "#42a4eb");
}

function getPolygonsForCountry(country, map, fillColor) {
    const countryPolygonPaths = useCountry().countries.get(country);
    let polygons = [];     
    for (let polygonPath of countryPolygonPaths) {
        polygons.push(new google.maps.Polygon({
            paths: polygonPath,
            strokeColor: "#000000",
            strokeOpacity: 0.8,
            strokeWeight: 0.7,
            fillColor: fillColor,
            fillOpacity: 0.3,
            map: map
        }));
    }

    return polygons;
}

function calculateScore() {
    p = (finalGuess !== guessCountry.value && finalGuess !== '') ? getPolygonsForCountry(finalGuess, null, '#ff2d03') : [];
    guessCountryPolygons = getPolygonsForCountry(guessCountry.value, null, '#05a805');
    roundScore.value = (finalGuess === guessCountry.value) ? 5000 : 0;
    score += roundScore.value;    
}

function pickStartPosition() {
    const places = getLocations();
    startPosition.value = places[Math.floor(Math.random() * (places.length))];
    axios.post('/reverse', null, {
            params: {
                lat: startPosition.value.lat,
                lng: startPosition.value.lng,
            }
        })
            .then(result => guessCountry.value = result.data.address.country)   
            .catch(e => console.log(e));
}
</script>