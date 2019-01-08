import { createStackNavigator } from 'react-navigation';
import DecksList from '../components/decks-list';
import DeckView from '../components/deck-view';

const AppNavigator = createStackNavigator({
  Home: { screen: DecksList },
  DeckView: { screen: DeckView },
});

export default AppNavigator;
