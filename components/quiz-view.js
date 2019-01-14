import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';
import ResultsScreen from './results-screen';

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

    console.log('Questions ARRAY---', questions);
    console.log('Current Question', currentQuestion);
    if (currentQuestion < questions.length) {
      return (
        <View>
          <View>
            <Text>
              {`Question: ${questions[currentQuestion].question}`}
            </Text>
          </View>
          <Button
            title="Correct!"
            onPress={() => this.handleQuestions()}
          />
          <Button
            title="Incorrect!"
            onPress={() => this.handleCountQuestions()}
          />
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
          title="Restart The Quiz"
          onPress={() => this.restartQuiz()}
        />
        <Button
          title="Back to Decks"
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
