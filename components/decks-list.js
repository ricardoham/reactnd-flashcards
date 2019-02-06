import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SharedElement } from 'react-native-motion';
import { List, ListItem } from 'react-native-elements';
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

class DecksList extends Component {
  render() {
    const { decks, navigation } = this.props;

    console.log('DEcks', decks);
    return (
      <List>
        <FlatList
          data={decks}
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
                <Text style={styles.listText}>{item.title}</Text>
              }
              subtitle={
                <Text style={styles.listTextSubtitle}>{`${item.questions.length} cards`}</Text>
              }
              onPress={() => navigation.navigate(
                'DeckView', {
                  deckKey: index, title: item.title, questions: item.questions, id: item.id,
                },
              )}
            />
          )}
          keyExtractor={item => item.title}
        />
      </List>
    );
  }
}

DecksList.propTypes = {
  decks: PropTypes.array.isRequired,
  navigation: PropTypes.object,
};

export default DecksList;
