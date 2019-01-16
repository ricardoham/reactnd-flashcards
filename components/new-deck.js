import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import {
  FormLabel, FormInput, FormValidationMessage, Button,
} from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { addDeck } from '../actions/action-decks';
import styles from './form-buttons';

class NewDeck extends Component {
  state = {
    input: '',
  }

  onSubmit = () => {
    const { actions } = this.props;
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
  }

  render() {
    const { input } = this.state;

    return (
      <View>
        <View>
          <FormLabel
            labelStyle={styles.labelStyle}
          >
          Whats is the title of the New Deck:
          </FormLabel>
          <FormInput
            inputStyle={styles.inputStyle}
            onChangeText={this.handleText}
            value={input}
          />
          <Button
            title="SUBMIT"
            onPress={() => this.onSubmit()}
            buttonStyle={styles.submit}
          />
          <Button
            title="CANCEL"
            onPress={() => this.onSubmit()}
            buttonStyle={styles.cancel}
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
