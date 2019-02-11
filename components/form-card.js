import React from 'react';
import PropTypes from 'prop-types';
import { View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { addCard, editCard } from '../actions/action-decks';
import styles from '../utils/form-buttons';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';

class FormCard extends React.PureComponent {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const question = navigation.getParam('question');
    const answer = navigation.getParam('answer');

    if (!question && !answer) {
      this.state = {
        inputQuestion: '',
        inputAnswer: '',
      };
    }
    this.state = {
      inputQuestion: question,
      inputAnswer: answer,
    };
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
    let questions = {};
    const { actions, navigation } = this.props;
    const question = navigation.getParam('question');
    const answer = navigation.getParam('answer');

    const { inputQuestion, inputAnswer } = this.state;
    const deckKey = navigation.getParam('deckKey');
    const cardKey = navigation.getParam('cardKey');

    if (!inputQuestion) {
      Alert.alert('Need a Question');
    } else if (!inputAnswer) {
      Alert.alert('Need a Answer');
    } else if (!question && !answer) {
      questions = {
        answer: inputAnswer,
        question: inputQuestion,
      };

      actions.addCard(deckKey, questions)
        .then(navigation.navigate('Home'));
      clearLocalNotification()
        .then(setLocalNotification);
    } else if (question && answer) {
      questions = {
        answer: inputAnswer,
        question: inputQuestion,
      };

      actions.editCard(deckKey, cardKey, questions)
        .then(navigation.navigate('Home'));
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

FormCard.propTypes = {
  navigation: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  decks: state.decks.decksData,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addCard, editCard }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormCard);
