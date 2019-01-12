import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { addCard } from '../actions/action-decks';

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

    const questions = {
      answer: inputAnswer,
      question: inputQuestion,
    };
    actions.addCard(deckKey, questions)
      .then(navigation.navigate('Home'));
  }

  render() {
    const { navigation } = this.props;
    const { inputQuestion, inputAnswer } = this.state;

    return (
      <View>
        <View>
          <FormLabel>Question:</FormLabel>
          <FormInput
            onChangeText={this.handleTextQuestion}
            value={inputQuestion}
          />
        </View>
        <View>
          <FormLabel>Answer:</FormLabel>
          <FormInput
            onChangeText={this.handleTextAnswer}
            value={inputAnswer}
          />
        </View>
        <Button
          title="SUBMIT"
          onPress={() => this.onSubmit()}
        />
        <Button
          title="BACK TO HOME"
          onPress={() => navigation.navigate('Home')}
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
