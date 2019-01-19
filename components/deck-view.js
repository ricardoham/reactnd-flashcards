import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SharedElement } from 'react-native-motion';
import { blue, green, purple } from '../utils/colors';

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
});

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Deck Name:   ${navigation.state.params.title}`,
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: purple,
    },
  })

  render() {
    const { navigation } = this.props;
    const deckKey = navigation.getParam('deckKey');
    const title = navigation.getParam('title');
    const questions = navigation.getParam('questions');

    return (
      <SharedElement>
        <View>
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
          </Card>
        </View>
      </SharedElement>
    );
  }
}

export default DeckView;
