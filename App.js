import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import Tabs from './MainNavigation'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import store from './store'
import AuthScreen from './screens/AuthScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import MapScreen from './screens/MapScreen'
import DeckScreen from './screens/DeckScreen'
import SettingsScreen from './screens/SettingsScreen'
import ReviewScreen from './screens/ReviewScreen'

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
    marginTop: Platform.OS === 'android' ? 24 : 0
  }
});