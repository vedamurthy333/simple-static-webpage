import React from 'react'

function Contents(props) {
  return (
    <div className='one'>
        <img src={props.img} className='img'/>
        <p className='two'>{props.name}</p>
        <div>
           <p className='two'>{props.prio}</p>
        </div>
    </div>
  )
}

export default Contents