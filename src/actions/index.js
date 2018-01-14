const boardWidth = window.innerWidth
const boardHeight = window.innerHeight
export const logKey = event => {
  event.preventDefault()
  return (dispatch, getState) => {
    let state = getState().snake
    if(state.playing){
      dispatch({type: 'CHANGE_DIRECTION', key: event.key})
    } else if (isArrowKey(event)) {
      dispatch(startGame(event.key))
    }
  }
}

const isArrowKey = e => {
  return ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(e.key);
}


const startGame = keypress => {
  return dispatch => {
    dispatch({type: 'RESET'})
    let newIntervalId = setInterval(() => {
      dispatch(tick())
    }, 100)
    dispatch({type: 'SET_INTERVAL', intervalId: newIntervalId})
  };
}

const tick = () => {
  return (dispatch, getState) => {
    let state = getState().snake
    let segs = state.segments
    let head = segs[0]
    let fruit = state.fruit
    if (hitBody(segs) || offBoard(segs)){
      dispatch({type: 'STOP'})
    }
    if (ateFruit(head, fruit)){
      dispatch({type: 'ATE_FRUIT'})
    }else{
      dispatch({type: 'MOVE'})
    }
  }
}

const ateFruit = (head, fruit)=>{
  return (head[1] === fruit[1]) && (head[0] === fruit[0])
}

const offBoard = segments => {
  // If Window is resized without a page refresh this will break
  let segTop  = segments[0][0]
  let segLeft = segments[0][1]

  let offTop = segTop < 0
  let offLeft = segLeft < 0
  let offRight = segLeft > boardWidth
  let offBottom = segTop > boardHeight

  return offTop || offLeft || offRight || offBottom
}

const hitBody = segments => {
  let head = segments[0];
  let hitIt = false;
  segments.forEach((seg, i)=>{
    if(i === 0){ return }
    if((head[1] === seg[1]) && (head[0] === seg[0])){
      hitIt = true;
    }
  });
  return hitIt;
}



