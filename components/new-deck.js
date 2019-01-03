import React, { Component } from 'react';
import { View, TextInput, Keyboard, KeyboardAvoidingView } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'

class NewDeck extends Component {
  state = {
    input: '',
  }

  handleSubmit = () => {
    
  }

  handleText = (input) => {
    this.setState(() => {
      input
    })
  }

  render() {
    return (
      <View>
        <View>
          <FormLabel>Whats is the title of the New Deck</FormLabel>
          <FormInput 
            // onChange={this.handleText}
          />
          <Button 
            title="SUBMIT"
          />
        </View>
      </View>
    );
  }
}

export default NewDeck;
