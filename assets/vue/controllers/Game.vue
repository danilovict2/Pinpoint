<template>
    <TheFinalResults v-if="isGameOver" :score="score"></TheFinalResults>
    <div class="game" style="height: 100%;" v-else>
        <ThePanorama :start-position="currentRoundStartPosition" v-if="roundScore === null">
            <TheGuessArea :start-position="currentRoundStartPosition" :round="round" @guessed="handleGuess"></TheGuessArea>
        </ThePanorama>
        <TheRoundResult v-else :start-position="currentRoundStartPosition" :guess-position="currentRoundGuessPosition"
            :score="roundScore" :round="round" @round-end="handleRoundEnd"></TheRoundResult>
    </div>
</template>

<script setup>
import TheFinalResults from '../components/TheFinalResults.vue';
import TheGuessArea from '../components/TheGuessArea.vue';
import ThePanorama from '../components/ThePanorama.vue';
import TheRoundResult from '../components/TheRoundResult.vue';
import { ref } from 'vue';

const roundScore = ref(null);
const currentRoundStartPosition = ref(null);
const currentRoundGuessPosition = ref(null);
const round = ref(0);
const isGameOver = ref(false);
let score = 0;
startRound();

function handleRoundEnd() {
    if (round.value < 5) {
        startRound();
    } else {
        isGameOver.value = true;
    }
}

function startRound() {
    currentRoundStartPosition.value = pickStartPosition();
    roundScore.value = null;
    round.value++;
}

function pickStartPosition() {
    const places = [
        { lat: 60.171001, lng: 24.939350 } /*helsinki*/, 
        { lat: 48.858093, lng: 2.294694 } /*eiffel tower*/ , 
        { lat: 51.510020, lng: -0.134730 } /*london*/,
        { lat: 41.8902, lng: 12.4922 } /*coloseum*/, 
        { lat: 25.195302, lng: 55.272879 } /*burj khalifa*/, 
        { lat: 1.283404, lng: 103.863134 } /*singapore*/,
        { lat: 29.976768, lng: 31.135538 } /*pyramids*/, 
        { lat: 40.757876, lng: -73.985592 } /*times sq*/, 
        { lat: 42.345573, lng: -71.098326 } /*boston*/,
        { lat: 27.172364, lng: 78.0419901} /*taj mahal*/,
        { lat: -22.952593, lng: -43.209457 } /*christ the redeemer*/,
        { lat: 44.823220, lng: 20.448407 } /*kalemegdan*/,
        { lat: 43.722546, lng: 10.395502 } /*leaning tower pisa*/,
        { lat: 37.825891, lng: -122.482958} /*golden gate bridge*/,
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
        { lat: 55.497638, lng: 9.023594  } /*mid denmark*/,
        { lat: 7.304851, lng: 8.784849  } /*south nigeria*/,
        { lat: 0.100577, lng: 37.564418  } /*mid kenya*/,
        { lat: 55.751672, lng: 37.622761  } /*moscow*/,
        { lat: 31.306725, lng: 34.788542 } /*israel*/,
        { lat: 14.536699, lng: -16.731669 } /*senegal*/,
        { lat: -27.430130, lng: 23.425565 } /*botswana*/,
        { lat: 9.226803, lng: -78.883737 } /*panama*/,
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
    ];

    return places[Math.floor(Math.random() * (places.length))];
}

function handleGuess(rndScore, guessPosition) {
    roundScore.value = rndScore;
    currentRoundGuessPosition.value = guessPosition;
    score += rndScore;
}

// UNCOMMENT WHEN NOT IN DEVELOPMENT
//window.onbeforeunload = () => "This page is asking you to confirm that you want to leave — information you've entered may not be saved."; 
</script>
