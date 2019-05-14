import React, { Component } from 'react';
import Map from '../../shared/mapView';
import { StyleSheet, View } from 'react-native';
import ButtonsContrainer from './buttons-container';

class MapLocation extends Component {
  render() {
    return (
      <View style={styles.map}>
        <Map />
        <ButtonsContrainer nav={this.props.navigation} />
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
