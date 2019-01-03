import React, { Component } from 'react';
import { View, TextInput, Keyboard, KeyboardAvoidingView } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

class NewDeck extends Component {
  state = {
    decks: '',
  }

  handleSubmit = () => {
    
  }

  handleText = (input) => {
    this.setState(() => {
      input: event.target.value
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
        </View>
      </View>
    );
  }
}

export default NewDeck;
