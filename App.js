import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import configureStore from './store/config-store';

import MainDecks from './components/main-decks';
import NewDeck from './components/new-deck';
import DeckView from './components/deck-view';
import NewCard from './components/new-card';
import QuizView from './components/quiz-view';
import { green, blue } from './utils/colors';

const TabNavigator = createBottomTabNavigator({
  DECKS: { screen: MainDecks },
  NEWDECK: { screen: NewDeck },
});

const MainNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      title: 'FlashCards',
    },
  },
  DeckView: {
    screen: DeckView,
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      title: 'New Card',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: blue,
      },
    },
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: {
      title: 'Quiz!',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: green,
      },
    },
  },
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <AppContainer />
        </View>
      </Provider>
    );
  }
}
