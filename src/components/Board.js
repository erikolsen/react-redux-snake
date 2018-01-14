//import React, { Component } from 'react'
import React from 'react'
import { connect } from 'react-redux'
import Snake from './Snake'
import Segment from './Segment'
import GameOver from './GameOver'
import Score from './Score'
import { logKey } from '../actions'

let Board = ({segments, fruit, playing, logKey})=> {
  let styles = {'backgroundColor' : 'lightgrey',
               'height' : '100vh',
               'width'  : '100vw'}
  let banner = playing ? <Score segments={segments} /> : <GameOver segments={segments} />
  return(
    <div style={styles} tabIndex='0' onKeyDown={(e)=>{logKey(e)}}>
      <Snake segments={segments} />
      <Segment color='red' position={fruit}/>
      { banner }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    playing: state.snake.playing,
    segments: state.snake.segments,
    keypress: state.snake.keypress,
    fruit: state.snake.fruit
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logKey: keypress => dispatch(logKey(keypress))
  }
}

Board = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

export default Board
