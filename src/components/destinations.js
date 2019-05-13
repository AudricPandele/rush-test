import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';
import DestinationItem from './destination-item';

class Destinations extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: '1', value: '154 Queen Street', subtext: 'Auckland' },
            { key: '2', value: '430 Queen Street', subtext: 'Auckland' },
            { key: '3', value: '14 rue jules ferry', subtext: 'La teste' }
          ]}
          renderItem={({ item }) => <DestinationItem item={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Destinations;
