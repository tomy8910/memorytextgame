import { combineReducers, createStore } from 'redux'

// JUST FUKING STYLE LOL
// LOOK FOR A WAY TO HAVE A SINGLE PAge and JUST SWAPPING QUESTIONS
// MEMORY GAME - 15 personas first? after answering them first, save them.
// try to implement them in random order after implementing them in a fixed oreder
//

function mainTree(state = {}, action) {
  switch (action.type) {
    case 'NONE':
      return action.payload
    default:
      return state
  }
}

function navigationTree(state = 'home', action) {
  switch (action.type) {
    case 'HOME':
      return 'home'
    case 'INTRO':
      return 'intro'
    case 'QUESTION':
      return 'question'
    default:
      return state
  }
}

function herro(state = {}, action) {
  console.log(action)
  return state
}

const rootReducer = combineReducers({
  main: mainTree,
  nav: navigationTree,
  herro
})

export default createStore(rootReducer)
