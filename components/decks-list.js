import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class DeckList extends Component {
  render() {
    const { decks } = this.props;

    console.log('BORED DECKS', decks);

    return (
      <List>
        <FlatList
          data={decks}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subtitle={`${item.questions.length} cards`}
              onPress={() => this.props.navigation.navigate(
                'DeckView'
              )}
            />
          )} 
          keyExtractor={item => item.title}
        />
      </List>
    );
  }
}

export default DeckList;
