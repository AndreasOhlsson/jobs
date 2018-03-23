import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import Tabs from './MainNavigation'
import { TabNavigator, StackNavigator } from 'react-navigation'
import AuthScreen from './screens/AuthScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import MapScreen from './screens/MapScreen'
import DeckScreen from './screens/DeckScreen'
import SettingsScreen from './screens/SettingsScreen'
import ReviewScreen from './screens/ReviewScreen'

class App extends Component {
  render() {


    return (
      <View>
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabNavigator({
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
        })
      })
  },
});