import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import configureStore from './store/config-store';

import MainDecks from './components/main-decks';
import NewDeck from './components/new-deck';
import DeckView from './components/deck-view';
import NewCard from './components/new-card';

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
    navigationOptions: {},
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {},
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
