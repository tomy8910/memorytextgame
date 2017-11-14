import React from 'react'
import { Provider } from 'react-redux'
import Appp from './apps/App'
import store from './reducers'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Appp />
      </Provider>
    )
  }
}
