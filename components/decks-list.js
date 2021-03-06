import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList, StyleSheet, Text, View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { List, ListItem, FormLabel } from 'react-native-elements';
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
  noDeckText: {
    fontSize: 15,
    color: greyDark,
    justifyContent: 'center',
  },
});

class DecksList extends React.PureComponent {
  render() {
    const { decks, navigation } = this.props;

    if (!decks || !decks.length) {
      return (
        <View>
          <FormLabel labelStyle={styles.noDeckText}>
            You dont have any deck!
          </FormLabel>
          <FormLabel labelStyle={styles.noDeckText}>
            Create a New Deck using the bottom tab menu.
          </FormLabel>
        </View>
      );
    }
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
  navigation: PropTypes.object.isRequired,
};

export default DecksList;
