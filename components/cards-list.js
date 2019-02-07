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
    const deckKey = navigation.getParam('deckKey');

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
                'FormCard', {
                  deckKey, cardKey: index, question: item.question, answer: item.answer,
                },
              )}
            />
          )}
          keyExtractor={item => item.question}
        />
      </List>
    );
  }
}

export default CardsList;
