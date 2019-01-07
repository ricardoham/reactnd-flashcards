import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

class NewCard extends Component {
  render() {
    return (
      <View>
        <View>
          <FormLabel>Question:</FormLabel>
          <FormInput />
        </View>
        <View>
          <FormLabel>Answer:</FormLabel>
        </View>
        <Button 
          title="SUBMIT"
        />
      </View>
    )
  }
}

export default NewCard;
