import { computed } from "vue";

export default function useCountry() {
    const kmlUrl = "/2008_cpi_large.kml";
    const cMap = new Map();

    fetch(kmlUrl)
        .then(response => response.text())
        .then(kmlContent => {
            const parser = new DOMParser();
            const kmlDoc = parser.parseFromString(kmlContent, "application/xml");
            const placemarks = kmlDoc.getElementsByTagName("Placemark");

            for (const item of placemarks) {
                const name = item.getElementsByTagName("name")[0].textContent.toString().trim();
                const polygon = item.getElementsByTagName('Polygon')[0];

                let coords = polygon.getElementsByTagName('coordinates')[0].childNodes[0].nodeValue.trim();
                let points = coords.split(" ");

                let googlePolygonPath = [];
                for (const point of points) {
                    let coord = point.split(",");
                    googlePolygonPath.push({ lat: +coord[1], lng: +coord[0] });
                }

                cMap.set(name, googlePolygonPath);
            }
        })
        .catch(error => {
            console.error("Error fetching or parsing KML file:", error);
        });

    return { countries: cMap };
}