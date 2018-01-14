import { getNewSegments, rando } from '../utils'

const initialState = {
  segments: [[200, 200]],
  fruit: [300, 300],
  gameOver: false,
  playing: false,
  keypress: ''
}
const snake = (state = initialState, action) => {
  switch(action.type){
    case 'SET_INTERVAL':
      let newIntervalId = action.intervalId
      return {...state, intervalId: newIntervalId, playing: true}
    case 'CHANGE_DIRECTION':
      return {...state, keypress: action.key }
    case 'ATE_FRUIT':
      return {...state,
        segments: getNewSegments(state.segments, state.keypress, 'GROW'),
        fruit: [rando(), rando()]
      }
    case 'MOVE':
      return {...state, segments: getNewSegments(state.segments, state.keypress) }
    case 'RESET':
      clearInterval(state.intervalId)
      return {...state, ...initialState}
    case 'STOP':
      clearInterval(state.intervalId)
      return {...state, intervalId: '', gameOver: true, playing: false}
    default:
      return state
  }
}

export default snake
