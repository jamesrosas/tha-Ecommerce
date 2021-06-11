import React from 'react';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import pass from '../pass';


function Map() {
    const mapStyles = {
        height: '50vh',
        width: '100%'
    }

    const defaultCenter = {
        lat: 4.602229,
        lng: -74.150532
    }

    const googleMapsApi = pass.googleMapsApi

    return (
        <LoadScript googleMapsApiKey={googleMapsApi}>
            <GoogleMap mapContainerStyle={mapStyles} zomm={9} center={defaultCenter}>
                <Marker position={defaultCenter}/>
            </GoogleMap>
        </LoadScript>
    )
}

export default Map;