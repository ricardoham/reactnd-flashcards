import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import configureStore from './store/config-store';

import DecksList from './components/decks-list';
import NewDeck from './components/new-deck';
import DeckView from './components/deck-view';

const TabNavigator = createBottomTabNavigator({
  DECKS: { screen: DecksList },
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
