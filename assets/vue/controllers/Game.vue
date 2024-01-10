<template>
    <div class="panorama" ref="pano">
        <TheGuessArea :start-pos="startPos"></TheGuessArea>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TheGuessArea from '../components/TheGuessArea.vue';

const pano = ref(null);
const startPos = { lat: 42.345573, lng: -71.098326 };

onMounted(() => {
    new google.maps.StreetViewPanorama(
        pano.value,
        {
            position: startPos,
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
