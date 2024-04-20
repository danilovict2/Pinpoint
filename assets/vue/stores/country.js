export default function useCountry() {
    const kmlUrl = "/2008_cpi_large.kml";
    const countries = new Map();
    
    const request = new XMLHttpRequest();
    request.open("GET", kmlUrl, false);
    request.send();

    if (request.status !== 200) return {};

    const kmlContent = request.responseText;

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

        countries.set(name, googlePolygonPath);
    }
    
    return { countries };
}