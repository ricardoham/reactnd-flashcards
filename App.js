import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import configureStore from './store/config-store';

import MainDecks from './components/main-decks';
import NewDeck from './components/new-deck';

// const Tabs = createBottomTabNavigator({
//   MainDecks: {
//     screen: MainDecks,
//     navigationOptions: {
//       tabBarLabel: 'DECKS',
//     },
//   },
//   NewDeck: {
//     screen: NewDeck,
//     navigationOptions: {
//       tabBarLabel: 'NEW DECK',
//     },
//   },
// });

const TabNavigatior = createBottomTabNavigator({
  DECKS: { screen: MainDecks },
  NEWDECK: { screen: NewDeck },
});

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: 'FlashCards',
    },
  },
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <View>
          <AppContainer />
        </View>
      </Provider>
    );
  }
}
