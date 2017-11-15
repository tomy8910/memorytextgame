import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import { connect } from 'react-redux'
import { changeToIntro, changeToInstructions } from '../../actions'
import styles from './styles'

function applyLetterSpacing(string, count = 1) {
  return string.split('').join('\u200A'.repeat(count))
}

class Home extends Component {
  render() {
    return (
      <View style={styles.layout}>
        <TouchableOpacity onPress={this.props.changeToIntro}>
          <Text style={styles.headline}>
            {applyLetterSpacing('DECIDE FATE')}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(null, { changeToIntro, changeToInstructions })(Home)
