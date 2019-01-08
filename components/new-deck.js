import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View, TextInput, Keyboard, KeyboardAvoidingView,
} from 'react-native';
import {
  FormLabel, FormInput, FormValidationMessage, Button,
} from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { addDeck } from '../actions/action-decks';

class NewDeck extends Component {
  state = {
    input: '',
  }

  onSubmit = () => {
    const { actions, decks } = this.props;
    const { input } = this.state;

    if (!input) {
      console.log('Dont Have input!');
    } else {
      const deck = {
        title: input,
        questions: [],
      };
      actions.addDeck(deck);
    }
  }

  handleText = (text) => {
    this.setState({
      input: text,
    });
    console.log('THE INPUTs', this.state.input);
  }

  render() {
    const { input } = this.state;

    return (
      <View>
        <View>
          <FormLabel>Whats is the title of the New Deck</FormLabel>
          <FormInput
            onChangeText={this.handleText}
            value={input}
          />
          <Button
            title="SUBMIT"
            onPress={() => this.onSubmit()}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  decks: state.decks.decksData,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addDeck }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck);
