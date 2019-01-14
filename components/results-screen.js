import React, { Component } from 'react';
import { View } from 'react-native';

class ResultsScreen extends Component {
  render() {
    const { questionsCorrects, questionsCount } = this.props;

    console.log(`AAA---${questionsCorrects} and ${questionsCount}`);

    const avg = questionsCorrects / questionsCount;

    console.log('AVG', avg);
    return (
      <View />
    );
  }
}

export default ResultsScreen;
