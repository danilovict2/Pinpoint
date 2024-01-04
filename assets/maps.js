export function initialize() {
    const fenway = { lat: 42.345573, lng: -71.098326 };
    const pano = new google.maps.StreetViewPanorama(
        document.getElementById("pano"),
        {
            position: fenway,
            pov: {
                heading: 34,
                pitch: 10,
            },
            disableDefaultUI: true,
        },
    );

    const map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 0, lng: 0},
        zoom: 1,
        disableDefaultUI: true
    });

    map.setStreetView(pano);
}

