export const DECK_STORAGE_KEY = 'flash:udacicards';
export const NOTIFICATION_KEY = 'ricard:notifications';

export const decks = [
  {
    id: 'react-01',
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
    id: 'javascript-01',
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
];
