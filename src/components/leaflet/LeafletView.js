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
          mapId: 'baseMap'
        };

        this.createMap = this.createMap.bind(this);
        this.addTileLayer = this.addTileLayer.bind(this);
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

    componentDidMount() {
        this.map =  L.map(this.state.mapId);
        this.map.setView([51.505, -0.09], 13);
        this.addTileLayer();

    }

    render() {
        return (
            <div id = {this.state.mapId} style = {styles.container}>
            </div>
        );
    }
}

export default LeafletView;