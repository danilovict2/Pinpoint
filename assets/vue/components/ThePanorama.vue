<template>
    <div class="panorama" ref="panoramaDiv">
        <TheGuessArea :start-position="startPosition"></TheGuessArea>        
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TheGuessArea from '../components/TheGuessArea.vue';

const { startPosition } = defineProps({
    startPosition: Object
});

const panoramaDiv = ref(null);

onMounted(() => {
    new google.maps.StreetViewPanorama(
        panoramaDiv.value,
        {
            position: startPosition,
            pov: {
                heading: 34,
                pitch: 10,
            },
            disableDefaultUI: true,
        },
    );
});
</script>

<style scoped>
.panorama {
    height: 100%;
    width: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column-reverse;
}
</style>