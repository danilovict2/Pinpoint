<template>
    <ThePanorama :start-position="currentRoundStartPosition" v-if="roundScore === null">
        <TheGuessArea :start-position="currentRoundStartPosition" @guessed="handleGuess"></TheGuessArea>
    </ThePanorama>
    <TheRoundResult v-else :start-position="currentRoundStartPosition" :guess-position="currentRoundGuessPosition"
        :score="roundScore" @start-next-round="startRound()"></TheRoundResult>
</template>

<script setup>
import TheGuessArea from '../components/TheGuessArea.vue';
import ThePanorama from '../components/ThePanorama.vue';
import TheRoundResult from '../components/TheRoundResult.vue';
import { ref } from 'vue';

const roundScore = ref(null);
const currentRoundStartPosition = ref(null);
const currentRoundGuessPosition = ref(null);
startRound();

function startRound() {
    currentRoundStartPosition.value = pickStartPosition();
    roundScore.value = null;
}

function pickStartPosition() {
    const places = [
        { lat: 60.171001, lng: 24.939350 }, { lat: 48.858093, lng: 2.294694 }, { lat: 51.510020, lng: -0.134730 },
        { lat: 41.8902, lng: 12.4922 }, { lat: 25.195302, lng: 55.272879 }, { lat: 1.283404, lng: 103.863134 },
        { lat: 29.976768, lng: 31.135538 }, { lat: 40.757876, lng: -73.985592 }, { lat: 42.345573, lng: -71.098326 }
    ];

    return places[Math.floor(Math.random() * (places.length))];
}

function handleGuess(score, guessPosition) {
    roundScore.value = score;
    currentRoundGuessPosition.value = guessPosition;
}
</script>
