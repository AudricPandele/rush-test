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

  deleteDestination = id => {
    this.setState({
      destinations: this.state.destinations.filter(function(dest) {
        return dest.key !== id;
      })
    });
  };

  render() {
    return (
      <DestinationContext.Provider
        value={{
          ...this.state,
          addDestination: this.addDestination,
          deleteDestination: this.deleteDestination
        }}
      >
        {this.props.children}
      </DestinationContext.Provider>
    );
  }
}
