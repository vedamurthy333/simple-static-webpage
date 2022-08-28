import React from 'react'

function Card(props) {
  return (
    <div className='first'>
    <div className='card'>
    <img src={props.img } className='card--image'/>
    <div className='card--stats'>
    <span><img src="star2.png" className='one'/></span>
    
    <span className='grey'> {props.rate}</span>
    
    
    </div>
    <p className='para'>{props.name}</p>
    <p className='para'><b>{props.price}</b></p>
    </div>
    </div>
  )
}

export default Card