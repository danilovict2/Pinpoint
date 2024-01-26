<template>
    <div class="panorama" ref="panoramaDiv">
        <slot></slot>      
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
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
    filter: invert(1);
}
</style>