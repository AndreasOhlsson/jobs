import Expo, { Notifications } from 'expo'
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Alert,
} from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import Tabs from './navigation'
import store from './store'
import registerForNotifications from './services/push_notifications'

export default class App extends Component {
  componentDidMount() {
    registerForNotifications()
    Notifications.addListener((notification) => {
      const { data: { text }, origin } = notification

      if (origin === 'received' && text) {
        Alert.alert(
          'New Push Notification',
          text,
          [{ text: 'Ok.' }]
        )
      }
    })
  }

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