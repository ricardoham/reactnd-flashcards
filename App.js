import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import configureStore from './store/config-store';

import MainDecks from './components/main-decks';
import NewDeck from './components/new-deck';
import DeckView from './components/deck-view';
import NewCard from './components/new-card';
import QuizView from './components/quiz-view';
import { blue, greenBlue, purple } from './utils/colors';

const TabNavigator = createBottomTabNavigator(
  {
    Decks: MainDecks,
    NewDeck,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Decks') {
          iconName = 'cards-variant';
        } else if (routeName === 'NewDeck') {
          iconName = 'new-box';
        }

        return (
          <MaterialCommunityIcons
            name={iconName}
            size={28}
            color={purple}
          />
        );
      },
    }),
    tabBarOptions: {
      labelStyle: { fontSize: 14, fontWeight: 'bold' },
    },
  },
);

const MainNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      title: 'FlashCards',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: purple,
      },
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
        backgroundColor: purple,
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
