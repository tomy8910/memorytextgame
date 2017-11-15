import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default class QuestionChoice extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props._onPress || (() => console.log('hi'))}
        style={{
          borderWidth: 1,
          borderColor: '#000',
          borderStyle: 'solid',
          paddingHorizontal: 12,
          paddingVertical: 10,
          backgroundColor: '#222',
          marginRight: 8,
          marginBottom: 8
        }}
      >
        <Text style={{ color: '#fff', fontSize: 16 }}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}
