import React, { Component } from 'react';
import {
  View, Text, FlatList, TouchableOpacity,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

class DecksList extends Component {
  render() {
    const { decks, navigation } = this.props;
    return (
      <List>
        <FlatList
          data={decks}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subtitle={`${item.questions.length} cards`}
              onPress={() => navigation.navigate(
                'DeckView', { title: item.title, questions: item.questions.length },
              )}
            />
          )}
          keyExtractor={item => item.title}
        />
      </List>
    );
  }
}

export default DecksList;
