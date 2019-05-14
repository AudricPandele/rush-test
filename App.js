import React from 'react';
import Home from './src/components/homepage/home';
import MapLocation from './src/components/mappage/map-location';
import LocationButton from './src/components/homepage/location-button';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class App extends React.Component {
  render() {
    return <Home />;
  }
}

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  MapLocation: { screen: MapLocation },
  LocationButton: { screen: LocationButton }
});

export default createAppContainer(AppNavigator);
