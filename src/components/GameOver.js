import React from 'react'

const GameOver = ({playing, segments}) => {
  let hide = segments.length === 1 ? 'hide' : ''
  return (
    <div className='banner'>
      <h1 >GAME OVER</h1>
      <h3 className={hide}>Final Score: {segments.length}</h3>
      <h3>Press Arrow to Play Again</h3>
    </div>
  )
}

export default GameOver

