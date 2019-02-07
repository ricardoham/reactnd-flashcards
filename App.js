import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import configureStore from './store/config-store';

import MainDecks from './components/main-decks';
import FormDeck from './components/form-deck';
import DeckView from './components/deck-view';
import FormCard from './components/form-card';
import QuizView from './components/quiz-view';
import SplashScreen from './components/splash-screen';
import CardsList from './components/cards-list';

import { blue, purple } from './utils/colors';
import { setLocalNotification } from './utils/helpers';

const TabNavigator = createBottomTabNavigator(
  {
    Decks: MainDecks,
    FormDeck,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Decks') {
          iconName = 'cards-variant';
        } else if (routeName === 'FormDeck') {
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
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      title: 'FlashCards',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: purple,
      },
      headerLeft: null,
    },
  },
  DeckView: {
    screen: DeckView,
  },
  FormCard: {
    screen: FormCard,
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
  DeckEdit: {
    screen: FormDeck,
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: purple,
      },
    },
  },
  CardsList: {
    screen: CardsList,
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: purple,
      },
    },
  },
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

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
