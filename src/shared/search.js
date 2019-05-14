import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';

class Search extends Component {
  state = {
    search: ''
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        platform='ios'
        placeholder='Type Here...'
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}

export default Search;
