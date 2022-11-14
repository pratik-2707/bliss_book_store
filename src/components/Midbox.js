import React from 'react'
import "./css/Midbox.css"
import Midcircle2 from './Midcircle2'
import Line from './line'
import Msgbox from './Msgbox'


const Midbox = (props) => {
  return (
    <div className='midbox'>
        {props.children}
    </div>
  )
}

export default Midbox


{/* <div className="msgbox2">
<div className="msg">
    <p className='msgboxhp'>2 November</p>
    <hr />
    <p className='msgboxp'>
      messgae of second box today date is 13 nov 2022 
    </p>
</div>
</div> */}