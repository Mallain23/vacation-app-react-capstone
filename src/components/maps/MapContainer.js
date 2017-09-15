import React from 'react';
import ReactDOM from 'react-dom'
import  GoogleApiComponent from './GoogleApiComponent'
import  Map  from './Map';
import { Marker } from './Marker';


export class MapContainer extends React.Component {
    render() {

        if (!this.props.loaded) {
            return <div>Loading...</div>
        }

        const style = {width: '300px', height: '300px'}
        const pos = {lat: 37.759703, lng: -122.428093}

        return (
            <div style={style}>
                <Map google={this.props.google}>
                    <Marker />
                    <Marker google={this.props.google} position={pos} />
                </Map>
            </div>
        )
    };
};



export default GoogleApiComponent({
  apiKey: 'AIzaSyBS-PTzp6N3kDfmvUBvX_zMFH-A1oRFlUc'
})(MapContainer);
