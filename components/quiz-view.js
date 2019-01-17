import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-elements';
import ResultsScreen from './results-screen';

import {
  green, red, greyDark, purple, greyLight,
} from '../utils/colors';

const styles = StyleSheet.create({
  questionLabelStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  questionStyle: {
    fontSize: 20,
    color: greyDark,
    marginLeft: 10,
  },

  cardButtonCorrect: {
    backgroundColor: green,
    marginBottom: 10,
    marginTop: 10,
  },

  cardButtonIncorrect: {
    backgroundColor: red,
  },

  resetButton: {
    margin: 10,
    backgroundColor: purple,
  },

  backButton: {
    margin: 10,
    backgroundColor: greyDark,
  },
});


class QuizView extends Component {
  state = {
    questionsCorrects: 0,
    currentQuestion: 0,
  }

  handleQuestions = () => {
    const { questionsCorrects, currentQuestion } = this.state;
    this.setState({
      questionsCorrects: questionsCorrects + 1,
      currentQuestion: currentQuestion + 1,
    });
  }

  handleCountQuestions = () => {
    const { currentQuestion } = this.state;

    this.setState({
      currentQuestion: currentQuestion + 1,
    });
  }

  restartQuiz = () => {
    this.setState({
      currentQuestion: 0,
    });
  }

  renderQuiz = () => {
    const { navigation } = this.props;
    const questions = navigation.getParam('questions');
    const { currentQuestion, questionsCorrects } = this.state;

    if (currentQuestion < questions.length) {
      return (
        <View>
          <Card>
            <Text style={styles.questionLabelStyle}>
            Question  🤔
            </Text>
            <Text style={styles.questionStyle}>
              {questions[currentQuestion].question}
            </Text>
            <Button
              title="Correct!"
              buttonStyle={styles.cardButtonCorrect}
              onPress={() => this.handleQuestions()}
            />
            <Button
              title="Incorrect!"
              buttonStyle={styles.cardButtonIncorrect}
              onPress={() => this.handleCountQuestions()}
            />
          </Card>
        </View>
      );
    }
    return (
      <View>
        <ResultsScreen
          questionsCorrects={questionsCorrects}
          questionsCount={questions.length}
        />
        <Button
          title="Restart the Quiz"
          buttonStyle={styles.resetButton}
          onPress={() => this.restartQuiz()}
        />
        <Button
          title="Back to Decks"
          buttonStyle={styles.backButton}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }

  render() {
    return (
      <View>
        <View>
          {this.renderQuiz()}
        </View>
      </View>
    );
  }
}

export default QuizView;
