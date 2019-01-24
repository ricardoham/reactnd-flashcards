import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Alert } from 'react-native';
import {
  FormLabel, FormInput, Button,
} from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { addDeck } from '../actions/action-decks';
import styles from './form-buttons';
import { dailyNotifications } from '../utils/helpers';

class NewDeck extends Component {
  state = {
    input: '',
  }

  onSubmit = () => {
    const { actions } = this.props;
    const { input } = this.state;

    if (!input) {
      Alert.alert('Need to fill with a Deck Title');
    } else {
      const deck = {
        title: input,
        questions: [],
      };
      actions.addDeck(deck);
      dailyNotifications();
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
            onPress={() => this.setState({ input: '' })}
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
