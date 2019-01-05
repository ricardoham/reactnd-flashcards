import { AsyncStorage } from 'react-native';
import { DECK_STORAGE_KEY } from './constants';



function setDecks() {
  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
  return decks;
}

export default function deckResults(results) {
  console.log("MY RESULTS", results);
  if (results === null) {
    results = setDecks();
  } else {
    console.log('ENTROU ELSE')
    results = JSON.parse(results);
  }

  console.log('Resultsasdasdasd', results);
  return results;
}


let decks = [
  {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
  },
  {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
];
