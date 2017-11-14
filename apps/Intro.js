import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { changeToPage } from '../actions'

class Intro extends Component {
  render() {
    return (
      <View style={styles.layout}>
        <Text>Intro</Text>
        <TouchableOpacity onPress={this.props.changeToPage}>
          <Text>Proceed</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(null, { changeToPage })(Intro)

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
