import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';

class DestinationItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.item}>
          ({this.props.item.key}) {this.props.item.value}
        </Text>
        <Text style={styles.subtext}>{this.props.item.subtext}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1
  },
  subtext: {
    paddingLeft: 10,
    fontSize: 14,
    color: 'grey'
  }
});

export default DestinationItem;
