<template>
    <Map style="height: 100%;" :polygons="[p]"></Map>
</template>

<script setup>
import Map from '../components/Map.vue';
import useCountry from '../stores/country.js';

const p = new google.maps.Polygon({
    paths: useCountry().countries.get('Ukraine'),
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
});
</script>