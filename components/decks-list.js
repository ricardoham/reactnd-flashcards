import React, { Component } from 'react';
import {
  View, Text, FlatList, TouchableOpacity,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDecks } from '../actions/action-decks';

class DecksList extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getDecks();
  }

  render() {
    const { decks, navigation } = this.props;

    if (!decks) {
      console.log('NOT DECKS');
    }

    console.log('THE DECKS', decks);

    return (
      <List>
        <FlatList
          data={decks}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subtitle={`${item.questions.length} cards`}
              onPress={() => navigation.navigate(
                'DeckView', { title: item.title, questions: item.questions },
              )}
            />
          )}
          keyExtractor={item => item.title}
        />
      </List>
    );
  }
}

const mapStateToProps = state => ({
  decks: state.decks.decksData,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getDecks }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DecksList);
