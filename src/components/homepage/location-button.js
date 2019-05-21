import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';
import { DestinationContext } from '../../context/destination-context';

class DestinationButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DestinationContext.Consumer>
        {({ addDestination }) => (
          <Button
            onPress={() =>
              this.props.nav.navigate(this.props.route, {
                addDestination: addDestination,
                nav: this.props.nav
              })
            }
            style={styles.button}
            icon={<Icon name='crosshairs' size={15} color='white' />}
          />
        )}
      </DestinationContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    opacity: 0.7,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'blue'
  }
});

export default DestinationButton;
