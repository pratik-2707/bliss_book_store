import React from 'react'
import Midcircle from './midcircle'
import Mainbox from './mainbox'
import "./css/initial_box.css"
import Msgbox from './Msgbox'

const Initial_box = () => {
  return (
    <>
        <Mainbox>
        <p className='verticalp'>Journey Begins</p>
          <p  className="yearboxright">December 2020</p>
          <Msgbox align = "left" heading = {"2 November"} message ={"jgrg wrfgir wrgjiowrg rgjowrg wrgjirrg wrgjiwg wergjirg rghirg "}></Msgbox>
          <Midcircle>
          <p className="midccont">
            B
          </p>
          </Midcircle>
        </Mainbox>
    </>
  )
}

export default Initial_box
