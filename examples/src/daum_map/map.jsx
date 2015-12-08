import React from 'react';
import L from 'leaflet';
import {daumMap} from '../../../src/index';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

export default React.createClass({
  getInitialState() {
    return {
      position: [51.505, -0.09],
    };
  },
  render() {
    const map = (
      <Map center={this.state.position} zoom={13}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={this.state.position}>
          <Popup>
            <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>);
    debugger;
    return (
      {map}
    );
  }

});
