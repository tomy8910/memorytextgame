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
