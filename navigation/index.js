import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import AuthScreen from '../screens/AuthScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import MapScreen from '../screens/MapScreen'
import DeckScreen from '../screens/DeckScreen'
import SettingsScreen from '../screens/SettingsScreen'
import ReviewScreen from '../screens/ReviewScreen'

export default Tabs = TabNavigator({
  welcome: { screen: WelcomeScreen },
  auth: { screen: AuthScreen },
  main: {
    screen: TabNavigator({
      map: { screen: MapScreen },
      deck: { screen: DeckScreen },
      rewiew: {
        screen: StackNavigator({
          rewiew: { screen: ReviewScreen },
          settings: { screen: SettingsScreen },
        })
      }
    },
      {
        navigationOptions: ({ navigation }) => ({
          marginTop: Platform.OS === 'android' ? 24 : 0
        }),
        tabBarPosition: 'bottom',
        tabBarOptions: {
          labelStyle: { fontSize: 12 }
        }
      })
  },
}, {
    navigationOptions: {
      tabBarVisible: false
    },
    lazy: true
  });