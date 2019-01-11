import React, { Component } from 'react';
import { View, Text } from 'react-native';

class QuizView extends Component {
  render() {
    const { navigation } = this.props;
    const questions = navigation.getParam('questions');

    console.log('Questions', questions);
    return (
      <View>
        <Text>bla</Text>
      </View>
    );
  }
}

export default QuizView;
