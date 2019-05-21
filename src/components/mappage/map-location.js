import React, { Component } from 'react';
import Map from '../../shared/mapView';
import { StyleSheet, View } from 'react-native';
import ButtonsContrainer from './buttons-container';

class MapLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addPosition: false
    };
  }

  addPosition() {
    this.setState({
      addPosition: true
    });
  }

  render() {
    const { navigation } = this.props;
    const addDestination = navigation.getParam(
      'addDestination',
      'nothing provided'
    );
    const nav = navigation.getParam('nav', 'nothing provided');
    return (
      <View style={styles.map}>
        <Map
          addPosition={this.state.addPosition}
          addDestination={addDestination}
          nav={nav}
        />
        <ButtonsContrainer
          callback={this.addPosition.bind(this)}
          nav={this.props.navigation}
        />
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
