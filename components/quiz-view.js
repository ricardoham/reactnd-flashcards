import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-elements';
import ResultsScreen from './results-screen';

import {
  green, red, greyDark, purple,
} from '../utils/colors';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';

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

  cardButtonAnswer: {
    backgroundColor: purple,
    marginTop: 25,
  },

  resetButton: {
    margin: 10,
    backgroundColor: purple,
  },

  backButton: {
    margin: 10,
    backgroundColor: greyDark,
  },
  stepperStyle: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});


class QuizView extends Component {
  state = {
    questionsCorrects: 0,
    currentQuestion: 0,
    isPressed: false,
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
    clearLocalNotification()
      .then(setLocalNotification);
  }

  renderStepper = (questions) => {
    const { currentQuestion } = this.state;

    return (
      <View>
        <Text style={styles.stepperStyle}>
          {`You are in question number: ${currentQuestion + 1} of ${questions.length} 👏`}
        </Text>
      </View>
    );
  }

  renderShowAnswer = () => {
    this.setState(prevState => ({
      isPressed: !prevState.isPressed,
    }));
  }

  renderQuiz = () => {
    const { navigation } = this.props;
    const questions = navigation.getParam('questions');
    const { currentQuestion, questionsCorrects, isPressed } = this.state;

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
            {
              isPressed
                ? (<>
                  <Text style={styles.questionLabelStyle}>
                      Answer  😱
                  </Text>
                  <Text style={styles.questionStyle}>{questions[currentQuestion].answer}</Text>
                    </>
                ) : <View />
            }
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
            <Button
              title="Show me the Answer!"
              buttonStyle={styles.cardButtonAnswer}
              onPress={() => this.renderShowAnswer(questions)}
            />
          </Card>
          {this.renderStepper(questions)}
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
          onPress={() => navigation.navigate('Home')
        }
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
