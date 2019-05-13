import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableHighlight
} from 'react-native';
import MapView from 'react-native-maps';

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

class Map extends Component {
  state = {
    mapRegion: null,
    lastLat: 0,
    lastLong: 0
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    navigator.geolocation.watchPosition(position => {
      this.setState({
        lastLat: position.coords.latitude,
        lastLong: position.coords.longitude
      });
    });
  }

  loadingMap() {
    return <Text>Map is loading ...</Text>;
  }

  loadedMap() {
    return (
      <View accessible={true} style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: this.state.lastLat,
            longitude: this.state.lastLong,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
        <Text>{this.state.lastLat}</Text>
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
