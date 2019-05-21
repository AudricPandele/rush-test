import React, { Component } from 'react';

export const DestinationContext = React.createContext();

export class DestinationProvider extends Component {
  state = {
    destinations: []
  };

  addDestination = params => {
    const newKey = this.state.destinations.length + 1;
    this.setState({
      destinations: [
        ...this.state.destinations,
        {
          key: newKey.toString(),
          value: params.value,
          subtext: params.subtext,
          fullAddress: params.fullAddress
        }
      ]
    });
  };

  render() {
    return (
      <DestinationContext.Provider
        value={{ ...this.state, addDestination: this.addDestination }}
      >
        {this.props.children}
      </DestinationContext.Provider>
    );
  }
}
