<template>
    <FinalResults v-if="isGameOver" :score="score"></FinalResults>
    <div v-else style="height: 100%;">
        <div v-if="roundScore === null" style="height: 100%;">
            <Map style="height: 100%;" @map-click="changePolygonPaths" @keyup.space="calculateScore" :zoom="4"></Map>
            <div class="guess-area">
                <GuessArea :round="round" @guessed="calculateScore" map="Mape Sveta" v-model="isGuessable">
                    <img :src="'/flags/' + guessCountry + '.png'" :key="guessCountry" class="country-image">
                </GuessArea>
            </div>
        </div>

        <RoundResult v-else :start-position="startPosition" :guess-position="guessPosition" :score="roundScore"
            :round="round" @round-end="handleRoundEnd" :polygons="[...guessCountryPolygons, ...p]">
        </RoundResult>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Map from '../components/Map.vue';
import GuessArea from '../components/GuessArea.vue';
import RoundResult from '../components/RoundResult.vue';
import FinalResults from '../components/FinalResults.vue';
import useCountry from '../stores/country.js';
import axios from 'axios';

let p = [];
let guessCountryPolygons = [];
const isGuessable = ref(false);
const guessCountry = ref('');
let finalGuess = '-1';
const roundScore = ref(null);
const round = ref(0);
const guessPosition = ref({});
const startPosition = ref({});
const isGameOver = ref(false);
let score = 0;

startRound();

function startRound() {
    selectGuessCountry();
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

async function calculateScore() {
    if (!finalGuess) {
        roundScore.value = 0;
        p = [];
        return;
    }

    try {
        let response = await axios.get(`/search/${finalGuess}`)
        if (response.data[0]) {
            const isCorrect = response.data[0].cca2.toLowerCase() === guessCountry.value;
            p = (!isCorrect) ? getPolygonsForCountry(finalGuess, null, '#ff2d03') : [];
            
            roundScore.value = (isCorrect) ? 5000 : 0;
            score += roundScore.value;
        }
    } catch (e) {
        console.log(e);
    }
}

function selectGuessCountry() {
    let keys = Array.from(useCountry().countries.keys());
    let country = keys[Math.floor(Math.random() * keys.length)];
    guessCountryPolygons = getPolygonsForCountry(country, null, '#05a805');

    axios.get(`/search/${country.toLowerCase()}`)
        .then(response => {
            if (response.data[0]) {
                startPosition.value = { lat: response.data[0].capitalInfo.latlng[0], lng: response.data[0].capitalInfo.latlng[1] };
                guessCountry.value = response.data[0].cca2.toLowerCase();
            }
        }).catch(e => console.log(e));
}
</script>

<style scoped>
.guess-area {
    filter: invert(1);
}

.country-image {
    width: 300px;
    height: 180px;
    gap: 10px;
    position: absolute;
    right: 3rem;
    bottom: 6rem;
    margin-top: 100px;
}
</style>