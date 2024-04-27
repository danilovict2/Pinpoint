<template>
    <Map style="height: 100%;" @map-click="changePolygonPaths"></Map>
</template>

<script setup>
import Map from '../components/Map.vue';
import useCountry from '../stores/country.js';

let p = [];

function changePolygonPaths(latLng, map, country) {
    for (let polygon of p) {
        polygon.setMap(null);
    }
    
    const countryPolygonPaths = useCountry().countries.get(country);
    for (let polygonPath of countryPolygonPaths) {
        p.push(new google.maps.Polygon({
            paths: polygonPath,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            map: map
        }));
    }
}
</script>