import React from 'react'
import Home from './Home'
import Questions from './Questions'
import Intro from './Intro'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeToPage } from '../actions/'

class App extends React.Component {
  render() {
    const NavEnum = {
      home: <Home />,
      question: <Questions />,
      intro: <Intro />
    }[this.props.nav]
    return NavEnum
  }
}

function mapStateToProps({ nav }) {
  return { nav }
}

export default connect(mapStateToProps)(App)
