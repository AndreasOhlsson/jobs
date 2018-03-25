import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import Tabs from './navigation'
import store from './store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Tabs />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'android' ? 24 : 0,
    paddingTop: Platform.OS === 'ios' ? 24 : 0,
  }
});