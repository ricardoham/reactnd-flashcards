import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const styles = StyleSheet.create({

});

class ResultsScreen extends Component {
  render() {
    const { questionsCorrects, questionsCount } = this.props;
    const avg = (questionsCorrects / questionsCount) * 100;

    return (
      <View>
        <Text h2>Quiz Ended!</Text>
        <Text h4>Results from the last Quiz:</Text>

        <View>
          <Text>
            Percentage of Correct Answers:
            {' '}
            {avg}
            %
          </Text>
          <Text>
            Total of Correct Answers:
            {' '}
            {questionsCorrects}
          </Text>
        </View>
      </View>
    );
  }
}

export default ResultsScreen;
