import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Animated, TouchableOpacity,
} from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import {
  blue, green, purple, red,
} from '../utils/colors';

const styles = StyleSheet.create({
  cardsCount: {
    color: 'gray',
    justifyContent: 'center',
    paddingLeft: 4,
  },
  cardContainerBody: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardButtons: {
    margin: 15,
    backgroundColor: blue,
  },
  viewContainer: {
    opacity: 0,
  },
  touchableView: {
    flexDirection: 'row',
    marginTop: 50,
  },
  extraButton: {
    width: 100,
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

  renderExtraButtons = () => {
    const { navigation } = this.props;
    const title = navigation.getParam('title');
    const questions = navigation.getParam('questions');
    const deckKey = navigation.getParam('deckKey');

    return (
      <View style={styles.touchableView}>
        <Button
          title="Edit Deck"
          rightIcon={{ name: 'edit' }}
          buttonStyle={styles.extraButton}
          onPress={() => navigation.navigate(
            'DeckEdit', { title, deckKey },
          )}
        />
        <Button
          title="Edit Cards"
          buttonStyle={styles.extraButton}
          onPress={() => navigation.navigate(
            'CardsList', { questions },
          )}
        />
        <Button
          title="Remove Deck"
          buttonStyle={styles.extraButton}
          rightIcon={{ name: 'delete' }}
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
            title="Start Quiz"
            backgroundColor={green}
            onPress={() => navigation.navigate(
              'QuizView', { questions },
            )}
          />
          {this.renderExtraButtons()}
        </Card>
      </Animated.View>
    );
  }
}

export default DeckView;
