import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';

class QuizView extends Component {
  state = {
    questionsCorrects: undefined,
    currentQuestion: 0,
  }

  handleQuestions = () => {
    const { questionsCorrects } = this.state;
    this.setState({
      questionsCorrects: questionsCorrects + 1,
    });
  }

  handleCountQuestions = () => {
    const { currentQuestion } = this.state;

    this.setState({
      currentQuestion: currentQuestion + 1,
    });
  }

  renderQuiz = () => {
    const { navigation } = this.props;
    const questions = navigation.getParam('questions');
    const { currentQuestion } = this.state;

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
            onPress={() => this.handleCountQuestions()}
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
        <Text>Quiz Ended</Text>
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
