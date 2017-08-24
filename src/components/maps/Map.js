import React from 'react'
import PropTypes from 'prop-types';

export class Map extends React.Component {
    constructor(props) {
        super(props)

        const {lat, lng} = this.props.initialCenter;
        this.state = {
            currentLocation: {
              lat: lat,
              lng: lng
            }
        }
    }

    componentDidMount() {
      if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((pos) => {
              const coords = pos.coords;
              this.setState({
                  currentLocation: {
                      lat: coords.latitude,
                      lng: coords.longitude
                  }
              })
          })
      }
      this.loadMap();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
          this.loadMap();
        }

        if (prevState.currentLocation !== this.state.currentLocation) {
          this.recenterMap();
        }
    }

    loadMap() {
        if (this.props && this.props.google) {
    // google is available
          const {google} = this.props;
          const maps = google.maps;

          const mapRef = this.refs.map;
          const node = ReactDOM.findDOMNode(mapRef);


          const {lat, lng} = this.state.currentLocation

          const center = new maps.LatLng(lat, lng);
          const mapConfig = Object.assign({}, {
              center: center,
              zoom: zoom
          })

          this.map = new maps.Map(node, mapConfig);

          const evtName = ['click','dragend']

          evtNames.forEach(e => {
              this.map.addListener(e, this.handleEvent(e));
          })
    };

      handleEvent(evtName) {
          let timeout;
          const handlerName = evtName;

          return (e) => {
              if (timeout) {
                  clearTimeout(timeout);
                  timeout = null;
              }
              timeout = setTimeout(() => {
                  if (this.props[handlerName]) {
                      this.props[handlerName](this.props, this.map, e);
                  }
              }, 0);
          }
      }
    recenterMap() {
        const map = this.map;
        const curr = this.state.currentLocation;

        const google = this.props.google;
        const maps = google.maps;

        if (map) {
            let center = new maps.LatLng(curr.lat, curr.lng)
            map.panTo(center)
        }
    }

    render() {
    // ...
    }
}

Map.propTypes = {
    google: React.PropTypes.object,
    zoom: React.PropTypes.number,
    initialCenter: React.PropTypes.object,
    centerAroundCurrentLocation: React.PropTypes.bool,
    onMove: React.PropTypes.func
}

Map.defaultProps = {
    zoom: 13,
    // San Francisco, by default
    initialCenter: {
        lat: 37.774929,
        lng: -122.419416
    },
    centerAroundCurrentLocation: false,
    onMove: function() {} // default prop
}
