import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';
import DestinationItem from './destination-item';
import { DestinationContext } from '../../context/destination-context';

class Destinations extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DestinationContext.Consumer>
        {({ deleteDestination }) => (
          <View style={styles.container}>
            <FlatList
              data={this.props.datas}
              renderItem={({ item }) => (
                <DestinationItem
                  item={item}
                  deleteDestination={deleteDestination}
                />
              )}
            />
          </View>
        )}
      </DestinationContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Destinations;
