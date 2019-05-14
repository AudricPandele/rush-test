import React, { Component } from 'react';
import Map from '../../shared/mapView';
import { StyleSheet, View } from 'react-native';

class MapLocation extends Component {
  render() {
    return (
      <View style={styles.map}>
        <Map />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default MapLocation;
