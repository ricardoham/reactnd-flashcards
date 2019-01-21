import React, { Component } from 'react';
import {
  View, Image, Animated, Text, StyleSheet,
} from 'react-native';
import image from '../assets/udacity.png';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImg: {
    width: 400,
    height: 400,
    opacity: 1,
  },
});

class SplashScreen extends Component {
  state = {
    opacity: new Animated.Value(0),
  }

  componentDidMount() {
    const { opacity } = this.state;

    Animated.timing(
      opacity,
      {
        toValue: 0,
        duration: 1000,
      },
    ).start();
  }

  render() {
    const { opacity } = this.state;

    return (
      <View style={styles.container}>
        <Image
          style={styles.containerImg}
          source={require('../assets/udacity.png')}
        />
      </View>
    );
  }
}

export default SplashScreen;
