import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { TabNavigator, StackNavigator } from 'react-navigation';
import configureStore from './store/config-store';

import MainDecks from './components/main-decks';
import NewDeck from './components/new-deck';

const Tabs = TabNavigator({
  MainDecks: {
    screen: MainDecks,
    navigationOptions: {
      tabBarLabel: 'DECKS',
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'NEW DECK',
    },
  },
});

export default class App extends Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>My nigga</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
