import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swipeout from 'react-native-swipeout';

class DestinationItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let swipeBtns = [
      {
        text: 'Delete',
        backgroundColor: 'red',
        onPress: () => {
          this.props.deleteDestination(this.props.item.key);
        }
      }
    ];
    return (
      <Swipeout left={swipeBtns} backgroundColor='transparent'>
        <View style={styles.view}>
          <Text style={styles.item}>
            ({this.props.item.key}) {this.props.item.value}
          </Text>
          <Text style={styles.subtext}>{this.props.item.subtext}</Text>
        </View>
      </Swipeout>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    borderBottomWidth: 1,
    padding: 10
  },
  item: {
    fontSize: 18
  },
  subtext: {
    paddingLeft: 10,
    fontSize: 14,
    color: 'grey'
  }
});

export default DestinationItem;
