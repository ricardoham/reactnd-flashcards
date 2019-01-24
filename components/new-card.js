import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { addCard } from '../actions/action-decks';
import styles from './form-buttons';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';

class NewCard extends Component {
  state = {
    inputQuestion: '',
    inputAnswer: '',
  }

  handleTextQuestion = (textQuestion) => {
    this.setState({
      inputQuestion: textQuestion,
    });
  }

  handleTextAnswer = (textAnswer) => {
    this.setState({
      inputAnswer: textAnswer,
    });
  }

  onSubmit = () => {
    const { actions, navigation } = this.props;
    const { inputQuestion, inputAnswer } = this.state;
    const deckKey = navigation.getParam('deckKey');

    if (!inputQuestion) {
      Alert.alert('Need a Question');
    } else if (!inputAnswer) {
      Alert.alert('Need a Answer');
    } else {
      const questions = {
        answer: inputAnswer,
        question: inputQuestion,
      };

      actions.addCard(deckKey, questions)
        .then(navigation.navigate('Home'));
      clearLocalNotification()
        .then(setLocalNotification);
    }
  }

  render() {
    const { navigation } = this.props;
    const { inputQuestion, inputAnswer } = this.state;

    return (
      <View>
        <View>
          <FormLabel labelStyle={styles.labelStyle}>🤔 Question:</FormLabel>
          <FormInput
            inputStyle={styles.inputStyle}
            onChangeText={this.handleTextQuestion}
            value={inputQuestion}
          />
        </View>
        <View>
          <FormLabel labelStyle={styles.labelStyle}>😱 Answer:</FormLabel>
          <FormInput
            inputStyle={styles.inputStyle}
            onChangeText={this.handleTextAnswer}
            value={inputAnswer}
          />
        </View>
        <Button
          title="SUBMIT"
          buttonStyle={styles.submit}
          onPress={() => this.onSubmit()}
        />
        <Button
          title="BACK TO HOME"
          onPress={() => navigation.navigate('Home')}
          buttonStyle={styles.cancel}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  decks: state.decks.decksData,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addCard }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCard);
