import React, { Component } from 'react'
import { Dimensions, View, Text } from 'react-native'
const { height, width } = Dimensions.get('window')

class Headline extends Component {
  render() {
    return (
      <View style={{ marginTop: 20, marginBottom: 50 }}>
        <Text
          style={{
            maxWidth: width - 100,
            fontSize: 28,
            fontFamily: 'sans-serif-condensed',
            color: '#fff',
            textShadowColor: 'rgba(0,0,0,0.5)',
            textShadowOffset: {
              width: 1,
              height: 1
            },
            textShadowRadius: 2,
            textAlign: 'center'
          }}
        >
          {this.props.text || 'ERROR'}
        </Text>
      </View>
    )
  }
}

export default Headline
