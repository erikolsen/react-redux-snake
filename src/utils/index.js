export const rando = ()=>{
   return Math.floor(Math.random() * 20) * 20
}

const size = 20
let newSegment = (segments, keypress)=>{
  let head = segments[0]
  switch(keypress) {
    case 'ArrowUp':
      return [head[0] - size, head[1]]
    case 'ArrowDown':
      return [head[0] + size, head[1]]
    case 'ArrowRight':
      return [head[0], head[1] + size]
    case 'ArrowLeft':
      return [head[0], head[1] - size]
    default:
      return [head[0], head[1] + size]
  }
}

export const getNewSegments = (segments, keypress, ateFruit)=>{
  let dupSegments = segments.slice(0)
  dupSegments.unshift(newSegment(segments, keypress))
  if(!ateFruit){ dupSegments.pop() }
  return dupSegments
}

