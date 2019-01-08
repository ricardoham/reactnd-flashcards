import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

class NewCard extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <View>
          <FormLabel>Question:</FormLabel>
          <FormInput />
        </View>
        <View>
          <FormLabel>Answer:</FormLabel>
          <FormInput />
        </View>
        <Button
          title="SUBMIT"
        />
        <Button
          title="BACK TO HOME"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }
}

export default NewCard;
