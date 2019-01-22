import React, { Component } from 'react';
import {
  View, Image, Animated, Text, StyleSheet,
} from 'react-native';

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

  componentWillMount() {
    const { navigation } = this.props;
    console.log('Entrou will mount');

    setTimeout(() => {
      console.log('ALOUT');
      navigation.navigate(
        'Home',
      );
    }, 1000);
  }

  componentDidMount() {
    const { opacity } = this.state;
    const { navigation } = this.props;

    console.log('Entrou did mount');

    Animated.timing(
      opacity,
      {
        toValue: 0,
        duration: 1000,
      },
    ).start();
    setTimeout(() => {
      console.log('ALOUT');
      navigation.navigate(
        'Home',
      );
    }, 1000);
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
