import { combineReducers, createStore } from 'redux'
import _ from 'lodash'

const init = [
  {
    question: [
      'You just finished a mission in what country?',
      'What country did you just finish a mission in?',
      'You just finished a mission where?',
      'What country is where you just finished a mission?'
    ],
    id: 0,
    answer: null,
    choices: ['UK', 'Mexico', 'Philippines', 'England', 'UAE', 'Dubai']
  },
  {
    question: [
      'Where did you meet your partner',
      'What is the location where you met your partner?',
      'In what location did you meet your partner?',
      'Where did you first see your partner'
    ],
    id: 1,
    answer: null,
    choices: [
      "Wendy's",
      'Mcdonalds',
      'Starbucks',
      'Dominican Republic',
      'Pizza Hut',
      'Rodeo House'
    ]
  },
  {
    question: [
      'What was your weapon of choice?',
      'Your weapon of choice was?',
      'You chose what weapon?',
      'The weapon you chose was?'
    ],
    id: 2,
    answer: null,
    choices: [
      'Jordan',
      'Spaghetti',
      'Bobby Ray Parks',
      'Bazooka',
      'Pistol',
      'Gundam'
    ]
  },
  {
    question: [
      'Your target was?',
      'Who was your target?',
      'You aimed at who?',
      'You killed who'
    ],
    id: 3,
    answer: null,
    choices: ['Pippen', 'Bird', 'Tiger Woods', 'Mclroy', 'Toni', 'Lee']
  },
  {
    question: [
      'How fast was the encounter?',
      'How fast was the scuffle?',
      'How fast did you kill your target',
      'How fast did your target die?'
    ],
    id: 4,
    answer: null,
    choices: ['8s', '15s', '16s', '12s', '4s', '9s']
  },
  {
    question: [
      'You killed the target in what country?',
      'The target died in what country?',
      'The target perished in what country?',
      'The country where you target died is what?'
    ],
    id: 5,
    answer: null,
    choices: ['Dubai', 'Philippines', 'Spain', 'Ecuador', 'Libertad', 'U.S.A']
  },
  {
    question: [
      "What's the password?",
      'What is the passcode',
      'Password is what?',
      'What is the right password?'
    ],
    id: 6,
    answer: null,
    choices: ['1113', '1164', '1112', '1131', '1119', '1146']
  },
  {
    question: [
      'Where did you hide the flashdrive which contains the password?',
      'Where is the flashdrive?',
      'What is the location of the flashdrive?',
      'Where did you last see the flashdrive?'
    ],
    id: 7,
    answer: null,
    choices: ['Dubai', 'Kentucky', 'Russia', 'Ecuador', 'Italy', 'Philippines']
  },
  {
    question: [
      'Whose life do you value most?',
      'Who do you value most?',
      'Which life do you value most?',
      'What life or whose do you value the most?'
    ],
    id: 8,
    answer: null,
    choices: ['Pippen', 'Anthony', 'Nina', 'Ramon', 'Cesar', 'Fred']
  },
  {
    question: [
      'From what country are you?',
      'Where are you from?',
      'Where did you come from?',
      'What is your country of origin?'
    ],
    id: 9,
    answer: null,
    choices: ['Dubai', 'Philippines', 'Spain', 'Ecuador', 'England', 'UK']
  }
]

function mainTree(
  state = {
    tree: [
      {
        question: [
          'You just finished a mission in what country?',
          'What country did you just finish a mission in?',
          'You just finished a mission where?',
          'What country is where you just finished a mission?'
        ],
        id: 0,
        answer: null,
        choices: ['UK', 'Mexico', 'Philippines', 'England', 'UAE', 'Dubai']
      },
      {
        question: [
          'Where did you meet your partner',
          'What is the location where you met your partner?',
          'In what location did you meet your partner?',
          'Where did you first see your partner'
        ],
        id: 1,
        answer: null,
        choices: [
          "Wendy's",
          'Mcdonalds',
          'Starbucks',
          'Dominican Republic',
          'Pizza Hut',
          'Rodeo House'
        ]
      },
      {
        question: [
          'What was your weapon of choice?',
          'Your weapon of choice was?',
          'You chose what weapon?',
          'The weapon you chose was?'
        ],
        id: 2,
        answer: null,
        choices: [
          'Jordans',
          'Spaghetti Sauce',
          "Bobby Ray Park's Hair",
          'Bazooka',
          'Pistol',
          'Gundam'
        ]
      },
      {
        question: [
          'Your target was?',
          'Who was your target?',
          'You aimed at who?',
          'You killed who'
        ],
        id: 3,
        answer: null,
        choices: ['Pippen', 'Bird', 'Tiger Woods', 'Mclroy', 'Toni', 'Lee']
      },
      {
        question: [
          'How fast was the encounter?',
          'How long was the scuffle?',
          'How long before you killed your target',
          'How long before your target died?'
        ],
        id: 4,
        answer: null,
        choices: ['8s', '15s', '16s', '12s', '4s', '9s']
      },
      {
        question: [
          'You killed the target in what country?',
          'The target died in what country?',
          'The target perished in what country?',
          'The country where you target died is what?'
        ],
        id: 5,
        answer: null,
        choices: [
          'Dubai',
          'Philippines',
          'Spain',
          'Ecuador',
          'Libertad',
          'U.S.A'
        ]
      },
      {
        question: [
          "What's the password?",
          'What is the passcode',
          'Password is what?',
          'What is the right password?'
        ],
        id: 6,
        answer: null,
        choices: ['1113', '1164', '1112', '1131', '1119', '1146']
      },
      {
        question: [
          'Where did you hide the flashdrive which contains the password?',
          'Where is the flashdrive?',
          'What is the location of the flashdrive?',
          'Where did you last see the flashdrive?'
        ],
        id: 7,
        answer: null,
        choices: [
          'Dubai',
          'Kentucky',
          'Russia',
          'Ecuador',
          'Italy',
          'Philippines'
        ]
      },
      {
        question: [
          'Whose life do you value most?',
          'Who do you value most?',
          'Which life do you value most?',
          'What life or whose do you value the most?'
        ],
        id: 8,
        answer: null,
        choices: ['Pippen', 'Anthony', 'Nina', 'Ramon', 'Cesar', 'Fred']
      },
      {
        question: [
          'From what country are you?',
          'Where are you from?',
          'Where did you come from?',
          'What is your country of origin?'
        ],
        id: 9,
        answer: null,
        choices: ['Dubai', 'Philippines', 'Spain', 'Ecuador', 'England', 'UK']
      }
    ],
    score: 0,
    lose: false
  },
  action
) {
  switch (action.type) {
    case 'ANSWER':
      const obj = _.find(state.tree, { id: action.payload.id })
      console.log(`${state.score} scorreeraas`)
      if (obj.answer) {
        const real = obj.answer
        const answered = obj.choices.indexOf(action.payload.answer)
        if (real === answered) {
          return { tree: [...state.tree], score: state.score + 1, lose: false }
        } else {
          return { tree: [...state.tree], score: state.score, lose: true }
        }
      } else {
        console.log('BEGIN')
        obj.answer = obj.choices.indexOf(action.payload.answer)
        const retu = {
          tree: [...state.tree, ...obj],
          score: state.score + 1,
          lose: false
        }
        return retu
      }
    default:
      return state
  }
}

function orderTree(state = 0, action) {
  switch (action.type) {
    case 'NEXT':
      console.log(`${state} --------`)
      if (init.length - 1 === state) {
        return 0
      }
      return state + 1
    case 'RESTART':
      return 0
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

const appReducer = combineReducers({
  main: mainTree,
  nav: navigationTree,
  order: orderTree
})

const rootReducer = (state, action) => {
  console.log(`ROOOOT ${action.type}`)
  if (action.type === 'RESTART') {
    state = undefined
  }
  return appReducer(state, action)
}

export default createStore(rootReducer)
