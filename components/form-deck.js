import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Alert } from 'react-native';
import {
  FormLabel, FormInput, Button,
} from 'react-native-elements';
import { bindActionCreators } from 'redux';
import uuidv4 from 'uuid/v4';
import { addDeck, editDeck } from '../actions/action-decks';
import styles from '../utils/form-buttons';
import { dailyNotifications } from '../utils/helpers';

class FormDeck extends Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const title = navigation.getParam('title');

    if (!title) {
      this.state = {
        input: '',
      };
    }
    this.state = {
      input: title,
    };
  }

  onSubmit = () => {
    const { actions, navigation } = this.props;
    const { input } = this.state;
    const title = navigation.getParam('title');
    const deckKey = navigation.getParam('deckKey');

    if (!input) {
      Alert.alert('Need to fill with a Deck Title');
    } else if (!title) {
      const deck = {
        id: uuidv4(),
        title: input,
        questions: [],
      };
      actions.addDeck(deck)
        .then(() => this.setState({ input: '' }));
      dailyNotifications();
    } else if (title) {
      actions.editDeck(deckKey, input)
        .then(navigation.navigate('Home'));
    }
  }

  handleText = (text) => {
    this.setState({
      input: text,
    });
  }

  render() {
    const { navigation } = this.props;
    const { input } = this.state;
    const title = navigation.getParam('title');

    return (
      <View>
        <View>
          <FormLabel
            labelStyle={styles.labelStyle}
          >
            {title
              ? 'Edit the Deck Title:'
              : 'Whats is the title of the New Deck:'
            }
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
          {
            title
              ? (
                <Button
                  title="CANCEL"
                  onPress={() => navigation.navigate('Home')}
                  buttonStyle={styles.cancel}
                />
              )
              : (
                <Button
                  title="CLEAR"
                  onPress={() => this.setState({ input: '' })}
                  buttonStyle={styles.cancel}
                />
              )
          }
          <Text />
        </View>
      </View>
    );
  }
}

FormDeck.propTypes = {
  navigation: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  decks: state.decks.decksData,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addDeck, editDeck }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormDeck);
