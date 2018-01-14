import React from 'react'

const Segment = ({color, position}) => {
  let styles = {'backgroundColor' : color,
                'height' : '20px',
                'width'  : '20px',
                'top'    : position[0],
                'left'   : position[1]
  }

  return( <div className='segment' style={styles}></div> )
}

export default Segment

