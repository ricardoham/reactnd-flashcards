import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { purpleElegant, purpleElegantDark } from '../utils/colors';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: purpleElegantDark,
  },
  quizHeader: {
    alignItems: 'center',
  },
});

class ResultsScreen extends Component {
  render() {
    const { questionsCorrects, questionsCount } = this.props;
    const avg = (questionsCorrects / questionsCount) * 100;

    return (
      <View style={styles.container}>
        <Text h2 style={styles.quizHeader}>Quiz Ended!</Text>
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
