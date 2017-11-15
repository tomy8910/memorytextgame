import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#777'
  },
  headline: {
    maxWidth: 250,
    fontSize: 32,
    fontFamily: 'sans-serif-condensed',
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: {
      width: 1,
      height: 1
    },
    textShadowRadius: 2
  },
  button: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#222',
    marginTop: 5,
    color: '#fff',
    fontFamily: 'sans-serif-condensed',
    fontSize: 16,
    borderRadius: 4
  }
})
