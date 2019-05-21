import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { StyleSheet } from 'react-native';
import { DestinationContext } from '../context/destination-context';

class Search extends Component {
  render() {
    return (
      <DestinationContext.Consumer>
        {({ addDestination }) => (
          <GooglePlacesAutocomplete
            style={styles.input}
            placeholder='Search here'
            minLength={2}
            autoFocus={false}
            returnKeyType={'search'}
            listViewDisplayed={false}
            fetchDetails={true}
            onPress={(data, details = null) => {
              const destination = {
                value: data.structured_formatting.main_text,
                subtext: data.structured_formatting.secondary_text,
                fullAddress: data.description
              };
              addDestination(destination);
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
        )}
      </DestinationContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white'
  }
});

export default Search;
