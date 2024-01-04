<template>
    <div class="panorama" ref="pano">
        <div class="extra">
            <div class="map" ref="map"></div>
            <button :disabled="!isGuessable" @click="guess">Finish guess</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const pano = ref(null);
const map = ref(null);
const isGuessable = ref(false);
let currentMarker = null;
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

    const googleMap = new google.maps.Map(
        map.value,
        {
            mapId: "a64e1e464d91f1eb",
            center: { lat: 0, lng: 0 },
            zoom: 1,
            disableDefaultUI: true
        }
    );

    googleMap.addListener("click", e => {
        isGuessable.value = true;
        currentMarker?.setMap(null);
        currentMarker = new google.maps.Marker({
            position: e.latLng,
            map: googleMap
        });
    });
});

function guess() {
    // Earth's radius in metres (mean radius = 6,371km)
    const radius = 6371e3;

    // Angles need to be radians to pass trig functions!
    const lat1Radian = (currentMarker.position.lat() * Math.PI) / 180;
    const lat2Radian = (startPos.lat * Math.PI) / 180;
    const latDelta = ((currentMarker.position.lat() - startPos.lat) * Math.PI) / 180;
    const longDelta = ((currentMarker.position.lng() - startPos.lng) * Math.PI) / 180;

    // The square of half the chord length between the points
    const a =
        Math.sin(latDelta / 2) * Math.sin(latDelta / 2) +
        Math.cos(lat1Radian) *
        Math.cos(lat2Radian) *
        Math.sin(longDelta / 2) *
        Math.sin(longDelta / 2);

    // Angular distance in radians
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // Distance is the radius * angular distance
    const distance = (radius * c) / 1000;
    alert(`You are ${distance}km from the original position`);
}
</script>

<style scoped>
.panorama {
    height: 100%;
    width: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column-reverse;
}

.extra {
    z-index: 2;
    display: flex;
    flex-direction: column;
    width: 350px;
    gap: 10px;
}

.map {
    height: 350px;
    float: right;
}
</style>
