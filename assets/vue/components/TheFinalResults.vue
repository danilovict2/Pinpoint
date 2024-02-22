<template>
    <div class="result">
        <Map class="result-map" style="height: 100%;" :zoom="3" :markers="markers" :lines="lines"></Map>
        <div class="details">
            <h1 style="color: white; font-weight:bold; font-size: 20px; border: none;">KONAČNI REZULTATI</h1>
            <div class="player-scores">
                <h1>1</h1> <div class="name-and-score">Ime <strong style="color: #43a047;">{{ score }}</strong></div>
            </div>
            <button class="play-again-btn">IGRAJ PONOVO</button>
            <button class="back-to-menu-btn">POVRATAK NA POČETNI MENI</button>
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
    color: #78777c;
}

.name-and-score{
    display: flex;
    flex-direction: column;
    margin-top: 40px; 
    text-align:left; 
    margin-left: 20px;
}

.player-scores{
    display: flex;
    flex-direction: row;
    color: white;
    margin-left: 20px;
}

h1{
    border-right: 1px solid #78777c;
}

.play-again-btn{
    margin-top: 120%;
    margin-left: auto;
    margin-right: auto;
    font-size: 25px;
    font-weight: bold;
    background-color: #338ad7;
    color: white;
    width: 300px;
    height: 55px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    border-radius: 5px;
    border: none;
}

.play-again-btn:hover{
    background-color: #2e79bb;
}

.play-again-btn:hover:active{
    background-color: #256398;
    transition: 0.1s ease-in-out;
}

.back-to-menu-btn{
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    font-size: 17px;
    font-weight: bold;
    color: rgb(207, 56, 56);
    cursor: pointer;
    transition: 0.3s ease-in-out;
    border: none;
    background: none;
    width: 300px;
    height: 40px;
    border-radius: 5px;
}

.back-to-menu-btn:hover{
    background-color: #de686040;
}

.back-to-menu-btn:hover:active{
    background-color: #c44c439a;
    transition: 0.1s ease-in-out;
}
</style>