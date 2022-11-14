import React from 'react'
import Midcircle from './midcircle'
import Msgbox from './Msgbox'
import Mainbox from './mainbox'
import Line from './line'

const Thirdbox = () => {
  return (
    <>
        <Mainbox>
        <p  className="yearboxleft">December 2019</p>
            <Midcircle>
                <Msgbox heading={"Creating"} message={"joergerg eerg er erg ergerg erg erg ef efne efef wefwe we"}></Msgbox>
            </Midcircle>
        </Mainbox>
    </>
  )
}

export default Thirdbox
