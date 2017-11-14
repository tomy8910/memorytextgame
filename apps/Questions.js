import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated
} from 'react-native'
import { connect } from 'react-redux'
import { changeToHome } from '../actions'

class Questions extends Component {
  state = {}

  render() {
    return (
      <View style={styles.layout}>
        <Text>Questions</Text>
        <TouchableOpacity onPress={this.props.changeToHome}>
          <Text>Hello</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(null, { changeToHome })(Questions)

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
