import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View, Text, StyleSheet, Animated,
} from 'react-native';
import { Card, Button } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { removeDeck } from '../actions/action-decks';
import {
  blue, green, purple, red, lightPurple,
} from '../utils/colors';

const styles = StyleSheet.create({
  cardsCount: {
    color: 'gray',
    justifyContent: 'center',
    paddingLeft: 4,
    marginBottom: 10,
  },
  cardContainerBody: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardButtons: {
    marginBottom: 10,
    backgroundColor: blue,
  },
  viewContainer: {
    flex: 1,
    opacity: 0,
  },
  touchableView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  extraButton: {
    width: 110,
    height: 7,
    borderRadius: 3,
  },
});

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Deck Name:   ${navigation.state.params.title}`,
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: purple,
    },
  })

  state = {
    opacity: new Animated.Value(0),
  }

  componentDidMount() {
    const { opacity } = this.state;
    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration: 800,
      },
    ).start();
  }

  removeDeck = () => {
    const { actions, navigation } = this.props;
    const id = navigation.getParam('id');
    actions.removeDeck(id)
      .then(() => navigation.navigate('Home'));
  };

  renderExtraButtons = () => {
    const { navigation } = this.props;
    const title = navigation.getParam('title');
    const deckKey = navigation.getParam('deckKey');

    return (
      <View style={styles.touchableView}>
        <Button
          title="Edit Deck"
          rightIcon={{ name: 'edit' }}
          fontSize={12}
          buttonStyle={styles.extraButton}
          backgroundColor={lightPurple}
          onPress={() => navigation.navigate(
            'DeckEdit', { title, deckKey },
          )}
        />
        <Button
          title="Remove Deck"
          buttonStyle={styles.extraButton}
          rightIcon={{ name: 'delete' }}
          onPress={this.removeDeck}
          fontSize={12}
          backgroundColor={red}
        />
      </View>
    );
  }

  render() {
    const { navigation } = this.props;
    const { opacity } = this.state;
    const deckKey = navigation.getParam('deckKey');
    const title = navigation.getParam('title');
    const questions = navigation.getParam('questions');

    console.log('QUESTION', questions);

    return (
      <Animated.View
        style={[styles.viewContainer, { opacity }]}
      >
        <Card title={title}>
          <View style={styles.cardContainerBody}>
            <MaterialCommunityIcons
              name="cards"
              size={20}
              color="#546e7a"
            />
            <Text style={styles.cardsCount}>
              {questions.length}
              {' '}
              Card(s)
            </Text>
          </View>

          <Button
            title="Add Card"
            backgroundColor={blue}
            containerViewStyle={styles.cardButtons}
            onPress={() => navigation.navigate(
              'NewCard', { deckKey },
            )}
          />
          <Button
            disabled={!questions.length}
            title="Edit Cards"
            backgroundColor={lightPurple}
            containerViewStyle={styles.cardButtons}
            onPress={() => navigation.navigate(
              'CardsList', { deckKey, questions },
            )}
          />
          <Button
            disabled={!questions.length}
            title="Start Quiz"
            backgroundColor={green}
            onPress={() => navigation.navigate(
              'QuizView', { questions },
            )}
          />
        </Card>
        {this.renderExtraButtons()}

      </Animated.View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ removeDeck }, dispatch),
});

export default connect(null, mapDispatchToProps)(DeckView);
