<template>
    <Map style="height: 100%;" @map-click="changePolygonPaths"></Map>
    <div class="guess-area">
        <img :src="'/flags/' + guessCountry + '.png'" width="260" height="130" :key="guessCountry">
        <button :disabled="!isGuessable" @click="guess()">Pogodi</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Map from '../components/Map.vue';
import useCountry from '../stores/country.js';
import axios from 'axios';

let p = [];
const isGuessable = ref(false);
const guessCountry = ref('');
let finalGuess = '';

selectGuessCountry();

function changePolygonPaths(latLng, map, country) {
    isGuessable.value = true;
    finalGuess = country;

    for (let polygon of p) {
        polygon.setMap(null);
    }

    const countryPolygonPaths = useCountry().countries.get(country);
    for (let polygonPath of countryPolygonPaths) {
        p.push(new google.maps.Polygon({
            paths: polygonPath,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            map: map
        }));
    }
}

function guess() {
    console.log(finalGuess);
}

function selectGuessCountry() {
    let keys = Array.from(useCountry().countries.keys());
    let country = keys[Math.floor(Math.random() * keys.length)];

    axios.get(`/search/${country}`)
        .then(response => {
            if (response.data[0]) {
                guessCountry.value = response.data[0].cca2.toLowerCase();
            }
        }).catch(e => console.log(e));
}
</script>