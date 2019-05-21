import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class ButtonsContrainer extends Component {
  addPosition = () => {
    this.props.callback();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.nav.navigate('Home')}
            underlayColor='#fff'
          >
            <Text style={styles.btnText}>CANCEL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.addPosition()}
            underlayColor='#fff'
          >
            <Text style={styles.btnText}>CONFIRM</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    bottom: 0,
    position: 'absolute',
    paddingBottom: 30,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  btnContainer: {
    justifyContent: 'center',
    width: '50%',
    padding: 10
  },
  btn: {
    padding: 8,
    height: 40,
    color: 'black',
    backgroundColor: '#ccc',
    borderRadius: 20
  },
  btnText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    padding: 'auto',
    alignItems: 'center'
  }
});

export default ButtonsContrainer;
