import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

class DeckList extends Component {

  render() {
    const { decks } = this.props;

    return (
      <View>
        <FlatList
          data={decks}
          renderItem={({ item }) => (
            <ListItem
              title={item.key}
            />
          )} 
          keyExtractor={item => item.key}
        />
      </View>
    );
  }
}

export default DeckList;
