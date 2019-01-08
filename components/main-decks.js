import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDecks } from '../actions/action-decks';
import DecksList from './decks-list';

class MainDecks extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getDecks();
  }

  render() {
    const { decks } = this.props;
    console.log('My decks data ohhh: ', decks);

    if (decks === null || decks === undefined) {
      return (
        <View>
          <Text>NO DECKS IN THIS MOMENT</Text>
        </View>
      );
    }
    return (
      <View>
        <DecksList
          decks={decks}
          {...this.props}
        />
      </View>
    );
  }
}

MainDecks.propTypes = {
  decks: PropTypes.array,
  actions: PropTypes.object,
};

const mapStateToProps = state => ({
  decks: state.decks.decksData,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getDecks }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainDecks);
