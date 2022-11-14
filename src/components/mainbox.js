import React from 'react'
import "./css/mainbox.css"
import Midcircle from './midcircle'


const Mainbox = (props) => {
  return (
    <div className='mainbox'>
      {props.children}
    </div>
  )
}

export default Mainbox
