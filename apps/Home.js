import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { changeToIntro } from '../actions'

class Home extends Component {
  render() {
    return (
      <View style={styles.layout}>
        <Text>Hello</Text>
        <TouchableOpacity onPress={this.props.changeToIntro}>
          <Text>Play</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(null, { changeToIntro })(Home)

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
