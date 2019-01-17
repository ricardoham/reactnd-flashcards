import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import {
  purpleElegantDark, greyLight, purple, lightPurple, white, greyDark,
} from '../utils/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightPurple,
    height: 350,
  },
  quizHeader: {
    color: white,
    alignSelf: 'center',
  },
  quizText: {
    color: white,
  },
  quizTextResults: {
    color: greyDark,
    fontWeight: 'bold',
    margin: 5,
    alignSelf: 'center',
    paddingTop: 10,
  },
  textContainer: {
    alignSelf: 'center',
    color: white,
    margin: 20,
    justifyContent: 'center',
  },
});

class ResultsScreen extends Component {
  render() {
    const { questionsCorrects, questionsCount } = this.props;
    const avg = (questionsCorrects / questionsCount) * 100;

    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text h2 style={styles.quizHeader}>Quiz Ended!</Text>
          <Text h4 style={styles.quizText}>Results from the last Quiz</Text>
          <View>
            <Text style={styles.quizTextResults}>
            Percentage of Correct Answers:
              {' '}
              {avg}
            % 🚀
            </Text>
            <Text style={styles.quizTextResults}>
            Total of Correct Answers:
              {' '}
              {questionsCorrects}
              {' '}
              💪
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default ResultsScreen;
