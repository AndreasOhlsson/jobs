import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'
import { MapView } from 'expo'
import { connect } from 'react-redux'
import { Button, Icon } from 'react-native-elements'
import * as actions from '../actions'

class MapScreen extends Component {
  static navigationOptions = {
    title: 'Map',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="my-location" size={30} color={tintColor} />
    )
  }

  state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      longitudeDelta: 0.0421,
      latitudeDelta: 0.0922,
    }
  }

  onRegionChangeComplete = (region) => {
    this.setState({ region })
  }

  onButtonPress = () => {
    this.props.fetchJobs(this.state.region, () => {
      this.props.navigation.navigate('deck')
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
        <View style={styles.buttonContainer}>
          <Button
            large
            title="Search this area"
            backgroundColor="#009688"
            icon={{ name: 'search' }}
            onPress={this.onButtonPress}
          />
        </View>
      </View>
    )
  }
}

const styles = {
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  }
}

export default connect(null, actions)(MapScreen)