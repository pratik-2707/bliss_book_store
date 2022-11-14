import React from 'react'

const Msgbox = (props) => {
  return (
    <>
        <div className= {`msgbox ${props.align}`}>
            <div className="msg">
                <p className='msgboxhp'>{props.heading}</p>
                <hr />
                <p className='msgboxp'>
                  {props.message}
                </p>
            </div>
        </div>
    </>
  )
}

export default Msgbox
