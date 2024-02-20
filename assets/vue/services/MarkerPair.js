export default class MarkerPair {
    constructor(startPosition, endPosition) {
        this._startPosition = startPosition;
        this._endPosition = endPosition;
    }

    get startPositionMarker() {
        return new google.maps.Marker({ position: this._startPosition });
    }

    get endPositionMarker() {
        return new google.maps.Marker({ position: this._endPosition});
    }

    get lineBetweenMarkers() {
        const lineSymbol = {
            path: "M 0,-1 0,1",
            strokeOpacity: 1,
            scale: 2,
        };

        return new google.maps.Polyline({
            path: [this._startPosition, this._endPosition],
            strokeOpacity: 0,
            icons: [
                {
                    icon: lineSymbol,
                    offset: "0",
                    repeat: "15px",
                },
            ],
        });
    }
}