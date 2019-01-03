import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class DeckList extends Component {

  render() {
    const { decks } = this.props;

    return (
      <List>
        <FlatList
          data={decks}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
            />
          )} 
          keyExtractor={item => item.key}
        />
      </List>
    );
  }
}

export default DeckList;
