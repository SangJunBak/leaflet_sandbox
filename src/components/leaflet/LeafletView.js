import React, {Component} from 'react';
import L from 'leaflet'


const styles = {
    container: {
        height: '800px'
    }
};

class LeafletView extends Component {

    constructor(props){
        super(props);
        this.state = {
            mapId: 'baseMap',
            markers: [],
            circles: [],
            polygons: []
        };

        this.createMap = this.createMap.bind(this);
        this.addTileLayer = this.addTileLayer.bind(this);
        this.addMarker = this.addMarker.bind(this);
        this.addCircle = this.addCircle.bind(this);
        this.addPolygon = this.addPolygon.bind(this);
        this.onMapClick = this.onMapClick.bind(this);
    }

    componentDidMount() {
        this.map =  this.createMap();
        this.map.setView([51.505, -0.09], 13);
        this.map.on('click', this.onMapClick);
        this.addTileLayer();
        this.addMarker();
        this.addCircle([51.508, -0.11], 'red');
        this.addPolygon();

    }

    createMap() {
        return L.map(this.state.mapId);
    }



    addTileLayer() {
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1Ijoic3RpY2t5c2FkIiwiYSI6ImNqcmM3OHhkeDFhenEzeW53ZXIycHRhN2YifQ.HSFyxpVe91wRH9z1EmtTXw',
        }).addTo(this.map);
    }

    addMarker(){
        const marker = L.marker([51.5, -0.09], {
            draggable: true
        }).addTo(this.map);
    }

    addCircle(latlng, color){
        const circle = L.circle(latlng, {
            color: color,
            fillColor: color,
            fillOpacity: 0.5,
            radius: 500
        });

        const newCircles = [...this.state.circles, circle];
        this.setState({circles: newCircles});


    }

    addPolygon(){
        L.polygon([
            [51.509, -0.08],
            [51.503, -0.06],
            [51.51, -0.047]
        ]).addTo(this.map);
    }

    onMapClick(e) {
        L.popup()
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(this.map);
    }

    render() {
        console.log(this.state);
        const renderCircles = this.state.circles.forEach((circle) => {
            circle.addTo(this.map);
        });

        return (
            <div>
                <div id = {this.state.mapId} style = {styles.container}>
                    {renderCircles}
                </div>
                <input type="button" onClick={() => this.addCircle([51.509, -0.12], 'blue')} value="Create Blue Circle"/>
            </div>
        );
    }
}

export default LeafletView;