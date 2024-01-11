<template>
    <div class="round-result">
        <Map style="height: 100%;" :zoom="3" :center="{ lat: 42.345573, lng: -71.098326 }"></Map>
        <div class="round-details">
            {{ score }} / 5000
            <button @click="emit('startNextRound')">Continue</button>
        </div>
    </div>
</template>

<script setup>
import Map from './Map.vue';
defineProps({
    score: Number
});

const emit = defineEmits(['startNextRound']);
</script>

<style scoped>
.round-result {
    position: relative;
    width: 100%;
    height: 100%;
}

.round-details {
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