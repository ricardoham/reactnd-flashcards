import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

class DeckView extends Component {
  render() {
    const { navigation } = this.props;
    const { deck } = this.props;
    return (
      <View>
        <Card title={deck.title}>
          <Text>{`${deck.questions.length} cards`}</Text>
          <Button title="Add Card" />
          <Button title="Start Quiz" />
        </Card>
      </View>
    )
  }
}

export default DeckView;