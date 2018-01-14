import React from 'react'
import Segment from './Segment'

const Snake = ({segments}) => {
  return(
    segments.map((segment, i) => (<Segment key={i} color='green' position={segment} />))
  )
}

export default Snake

