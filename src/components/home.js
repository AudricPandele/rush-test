import React, { Component } from 'react';
import Map from './mapView';
import Search from './search';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DestinationButton from './destination-button';
import Destinations from './destinations';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.search}>
          <Search />
        </View>
        <View style={styles.map}>
          <Map />
        </View>
        <View style={styles.directionButtonContainer}>
          <View style={styles.directionButtonTextContainer}>
            <Text style={styles.directionButtonText}>Destinations</Text>
          </View>
          <View style={styles.directionButton}>
            <DestinationButton />
          </View>
        </View>
        <ScrollView style={styles.destinations}>
          <Destinations />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  search: {
    top: 30,
    padding: 10,
    zIndex: 999,
    position: 'absolute'
  },
  map: {
    flex: 1
  },
  directionButtonContainer: {
    borderBottomWidth: 1,
    padding: 10,
    flexDirection: 'row'
  },
  directionButtonTextContainer: {
    justifyContent: 'center',
    width: '60%'
  },
  directionButtonText: {
    fontSize: 25,
    textAlignVertical: 'center'
  },
  directionButton: {
    width: '40%',
    justifyContent: 'space-between'
  },
  destinations: {
    flex: 1
  }
});

export default Home;
