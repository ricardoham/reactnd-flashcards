import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/config-store';
import { setLocalNotification } from './utils/helpers';
import AppContainer from './routes/app-vavigator';


export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <AppContainer />
        </View>
      </Provider>
    );
  }
}
