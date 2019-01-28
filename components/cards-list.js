import React, { Component } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { purple, greyDark } from '../utils/colors';

const styles = StyleSheet.create({
  listText: {
    paddingLeft: 10,
    fontWeight: 'bold',
    color: greyDark,
  },
  listTextSubtitle: {
    paddingLeft: 10,
    fontWeight: 'bold',
    fontSize: 12,
    color: 'gray',
  },
});

class CardsList extends Component {
  render() {
    const { navigation } = this.props;
    const questions = navigation.getParam('questions');
    return (
      <List>
        <FlatList
          data={questions}
          renderItem={({ item, index }) => (
            <ListItem
              leftIcon={(
                <MaterialCommunityIcons
                  name="cards-outline"
                  size={30}
                  margin={2}
                  color={purple}
                />
              )}
              title={
                <Text style={styles.listText}>{item.question}</Text>
              }
              onPress={() => navigation.navigate(
                'DeckView', { deckKey: index, title: item.title, questions: item.questions },
              )}
            />
          )}
          keyExtractor={item => item.title}
        />
      </List>
    );
  }
}

export default CardsList;
