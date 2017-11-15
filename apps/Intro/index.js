import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { changeToPage } from '../../actions'
import styles from './styles'

class Intro extends Component {
  render() {
    return (
      <View style={styles.layout}>
        <Text style={styles.headline}>Answer Honestly!</Text>
        <TouchableOpacity onPress={() => this.props.changeToPage()}>
          <Text style={styles.button}>Proceed</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(null, { changeToPage })(Intro)
