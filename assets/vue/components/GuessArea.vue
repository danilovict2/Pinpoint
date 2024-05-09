<template>
    <div class="guess-area">
        <slot></slot>
        <div class="container">
            <div class="round-details">
                <div class="box">
                    <h4>Mapa:<br> Širom Sveta</h4>
                </div>
                <div class="box round">
                    <h4>Runda:<br> {{ round }}/5</h4>
                </div>
                <div style="padding: 0px 10px;">
                    <h4>Vreme:<br> <span>{{ timer.minutes }}</span>:<span>{{ timer.seconds.value < 10 ? '0' : '' }}{{ timer.seconds }}</span></h4>
                </div>
            </div>
            <button :disabled="!isGuessable" @click="emit('guessed')">Pogodi</button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import { useTimer } from 'vue-timer-hook';
const { startPosition } = defineProps({
    round: Number
});

const emit = defineEmits(['guessed']);
const isGuessable = defineModel({default: false});
// FIXED TO THREE MINUTES
const timer = useTimer(new Date().setSeconds(new Date().getSeconds() + 180));

onMounted(() => {   
    watchEffect(() => {
        if (timer.isExpired.value) {
            emit('guessed');
        }
    });
});
</script>

<style scoped>
.guess-area {
    filter: invert(1);
    z-index: 10;
}

.container {
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 1rem;
    right: 3rem;
    gap: 20px;
    align-items: flex-start;
    z-index: 2;
}

.round-details {
    z-index: 2;
    width: 320px;
    background-color: #202020;
    color: #ffff;
    display: flex;
    flex-direction: row;
    height: 55px;
    text-align: center;
    border-radius: 5px;
    gap: 20px;
    text-align: center;
}

h4 {
    margin-top: 10px;
}

.round {
    margin-left: -25px;
}

.box {
    border-right: 1px solid rgba(255, 255, 255, .2);
    padding: 0px 18px;
}

button {
    z-index: 2;
    color: white;
    background-color: rgba(177, 177, 177, 0.675);
    font-size: 25px;
    width: 300px;
    height: 55px;
    cursor: pointer;
    transition: 0.2 ease-in-out;
    border-radius: 5px;
    border: none;
    pointer-events: none;
}

button:enabled {
    background-color: #338ad7;
    opacity: 1;
    pointer-events: all;
}

button:hover:enabled {
    background-color: #2e79bb;
}

button:hover:enabled:active {
    background-color: #4d98d8;
    transition: 0.2s ease-in-out;
}
</style>