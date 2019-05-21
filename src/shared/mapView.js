import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import Geocoder from 'react-geocode';

class Map extends Component {
  state = {
    mapRegion: null,
    lastLat: 0,
    lastLong: 0
  };

  constructor(props) {
    super(props);
    Geocoder.setApiKey('AIzaSyAXOCuLpKmqv0imZNazvI-mglzb1_rrpls');
  }

  addDestination = destination => {
    this.props.callback(destination);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.addPosition) {
      Geocoder.fromLatLng(this.state.lastLat, this.state.lastLong).then(
        response => {
          const number = response.results[0].address_components[0].long_name;
          const street = response.results[0].address_components[1].long_name;
          const neighborhood =
            response.results[0].address_components[2].long_name;
          const city = response.results[0].address_components[3].long_name;
          const country = response.results[0].address_components[6].long_name;
          const formatted_address = response.results[0].formatted_address;
          const destination = {
            value: number + ' ' + street + ', ' + neighborhood + ' ',
            subtext: city + ', ' + country,
            fullAddress: response.results[0].formatted_address
          };
          this.props.addDestination(destination);
          this.props.nav.navigate('Home');
        },
        error => {
          console.error(error);
        }
      );
    }
  }

  componentDidMount() {
    navigator.geolocation.watchPosition(position => {
      this.setState({
        lastLat: position.coords.latitude,
        lastLong: position.coords.longitude
      });
    });
  }

  onRegionChange = event => {
    this.setState({
      lastLat: event.latitude,
      lastLong: event.longitude
    });
  };

  loadingMap() {
    return <Text>Map is loading ...</Text>;
  }

  loadedMap() {
    var markers = [
      {
        latitude: 45.65,
        longitude: -78.9,
        title: 'Foo Place',
        subtitle: '1234 Foo Drive'
      }
    ];

    const coordinates = this.state.lastLat + ' ' + this.state.lastLong;
    return (
      <View accessible={true} style={styles.container}>
        <MapView
          annotations={markers}
          style={styles.map}
          initialRegion={{
            latitude: this.state.lastLat,
            longitude: this.state.lastLong,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          onRegionChange={this.onRegionChange}
        >
          <MapView.Marker
            draggable
            coordinate={{
              latitude: this.state.lastLat,
              longitude: this.state.lastLong
            }}
            title={'GPS Co-ordinates'}
            description={coordinates}
          />
        </MapView>
      </View>
    );
  }

  render() {
    let map;
    if (this.state.lastLong !== 0 && this.state.lastLat !== 0) {
      map = this.loadedMap();
    } else {
      map = this.loadingMap();
    }
    return map;
  }
}

export default Map;

const styles = StyleSheet.create({
  fadeIn: {
    width: 250,
    height: 50,
    backgroundColor: '#bdc3c7'
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
