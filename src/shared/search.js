import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class Search extends Component {
  getContent(event) {
    this.props.callback(event);
  }

  render() {
    return (
      <GooglePlacesAutocomplete
        style={styles.input}
        placeholder='Search here'
        minLength={2}
        autoFocus={true}
        returnKeyType={'search'}
        listViewDisplayed={false}
        fetchDetails={true}
        onPress={(data, details = null) => {
          this.getContent(data);
        }}
        query={{
          key: 'AIzaSyAXOCuLpKmqv0imZNazvI-mglzb1_rrpls',
          language: 'en'
        }}
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={200}
        styles={{
          textInputContainer: {
            backgroundColor: 'rgba(0,0,0,0)',
            borderTopWidth: 0,
            borderBottomWidth: 0
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 50,
            color: '#5d5d5d',
            fontSize: 16
          },
          listView: {
            backgroundColor: 'red'
          }
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white'
  }
});

export default Search;
