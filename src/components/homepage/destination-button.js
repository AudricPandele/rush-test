import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class DestinationButton extends Component {
  render() {
    return (
      <Button
        icon={<Icon name='arrow-circle-right' size={15} color='white' />}
        title='DIRECTIONS'
      />
    );
  }
}

export default DestinationButton;
