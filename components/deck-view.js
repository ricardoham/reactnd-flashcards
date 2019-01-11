import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

class DeckView extends Component {
  render() {
    const { navigation } = this.props;
    const deckKey = navigation.getParam('deckKey');
    const title = navigation.getParam('title');
    const questionLength = navigation.getParam('questions');

    console.log('my deck key', deckKey);

    return (
      <View>
        <Card title={title}>
          <Text>
            {questionLength}
            {' '}
              Cards
          </Text>
          <Button
            title="Add Card"
            onPress={() => navigation.navigate(
              'NewCard', { deckKey },
            )}
          />
          <Button title="Start Quiz" />
        </Card>
      </View>
    );
  }
}

export default DeckView;
