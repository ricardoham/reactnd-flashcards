import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Image, Animated, Text, StyleSheet,
} from 'react-native';
import { greyDark } from '../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
  },
  containerImg: {
    width: 400,
    height: 400,
  },
  splashText: {
    fontSize: 20,
    color: greyDark,
  },
});

class SplashScreen extends Component {
  state = {
    opacity: new Animated.Value(0),
  }

  componentDidMount() {
    const { opacity } = this.state;
    const { navigation } = this.props;

    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration: 1000,
      },
    ).start();
    setTimeout(() => {
      navigation.navigate(
        'Home',
      );
    }, 2300);
  }


  render() {
    const { opacity } = this.state;

    return (
      <Animated.View style={[styles.container, { opacity }]}>
        <Image
          style={styles.containerImg}
          source={require('../assets/udacity.png')}
        />
        <Text style={styles.splashText}>Flash Cards</Text>
      </Animated.View>
    );
  }
}

SplashScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SplashScreen;
