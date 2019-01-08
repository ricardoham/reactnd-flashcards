import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

class DeckView extends Component {
  render() {
    const { navigation } = this.props;
    const { title, questions } = this.props;
    console.log('Title Item', title);
    return (
      <View>
        <Card title={title}>
          {/* <Text>{`${deck.questions.length} cards`}</Text> */}
          <Text>{title}</Text>
          <Button
            title="Add Card"
            onPress={() => this.props.navigation()}
          />
          <Button title="Start Quiz" />
        </Card>
      </View>
    );
  }
}

export default DeckView;
