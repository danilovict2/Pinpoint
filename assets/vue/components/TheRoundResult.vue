<template>
    <div class="result">
        <Map style="height: 100%;" :zoom="3" :center="startPosition"
            :markers="[startPositionMarker, guessPositionMarker]" :lines="[line]"></Map>
        <div class="details">
            ROUND {{ round }} / 5
            {{ score }} / 5000
            <button @click="emit('roundEnd')">{{ round === 5 ? 'VIEW RESULTS' : 'CONTINUE' }}</button>
        </div>
    </div>
</template>

<script setup>
import Map from './Map.vue';
const { score, startPosition, guessPosition, round } = defineProps({
    round: Number,
    score: Number,
    startPosition: Object,
    guessPosition: Object,
});

const startPositionMarker = new google.maps.Marker({ position: startPosition });
const guessPositionMarker = new google.maps.Marker({ position: guessPosition });

const lineSymbol = {
    path: "M 0,-1 0,1",
    strokeOpacity: 1,
    scale: 4,
};
const line = new google.maps.Polyline({
    path: [startPosition, guessPosition],
    strokeOpacity: 0,
    icons: [
        {
            icon: lineSymbol,
            offset: "0",
            repeat: "20px",
        },
    ],
});

const emit = defineEmits(['roundEnd']);
</script>

<style>
.result {
    position: relative;
    width: 100%;
    height: 100%;
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
}
</style>