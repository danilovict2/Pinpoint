export default class MarkerPair {
    constructor(startPosition, endPosition) {
        this._startPosition = startPosition;
        this._endPosition = endPosition;
    }

    get startPositionMarker() {
        if (Object.keys(this._startPosition).length !== 0) 
            return new google.maps.Marker({ position: this._startPosition, icon: URL = "./img/target-marker.png" });
        return {};    
    }

    get endPositionMarker() {
        if (Object.keys(this._endPosition).length !== 0)
            return new google.maps.Marker({ position: this._endPosition, icon: URL = "./img/player-marker.png" });
        return {};    
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