<template>
    <ThePanorama :start-position="getStartPosition()"></ThePanorama>
</template>

<script setup>
import ThePanorama from '../components/ThePanorama.vue';

function getStartPosition() {
    return { lat: 42.345573, lng: -71.098326 };
}
</script>
