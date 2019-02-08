import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { AppLoading } from 'expo';
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

    if (decks === null || decks === undefined) {
      return <AppLoading />;
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
  actions: PropTypes.object.isRequired,
};

MainDecks.defaultProps = {
  decks: undefined,
};

const mapStateToProps = state => ({
  decks: state.decks.decksData,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getDecks }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainDecks);
