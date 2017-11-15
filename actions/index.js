export function changeToPage() {
  console.log('hi')
  return {
    type: 'QUESTION'
  }
}

export function changeToHome() {
  console.log('HERRO')
  return {
    type: 'HOME'
  }
}

export function changeToIntro() {
  return {
    type: 'INTRO'
  }
}

export function changeToInstructions() {
  return {
    type: 'INSTRUCT'
  }
}

export function answer(id, answer) {
  return {
    type: 'ANSWER',
    payload: {
      id,
      answer
    }
  }
}
export function next() {
  return {
    type: 'NEXT'
  }
}

export function restart() {
  return {
    type: 'RESTART'
  }
}
