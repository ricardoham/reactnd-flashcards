import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';

class QuizView extends Component {
  state = {
    questionsCorrects: undefined,
    currentQuestion: 0,
  }

  renderQuiz = () => {
    const { navigation } = this.props;
    const questions = navigation.getParam('questions');
    const { currentQuestion } = this.state;

    console.log('Questions ARRAY---', questions);
    console.log('Current Question', currentQuestion);

    return (
      <View>
        <Text>
          {`Question: ${questions[currentQuestion].question}`}
        </Text>
      </View>
    );
  }

  render() {
    const { navigation } = this.props;
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
