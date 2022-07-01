import React from 'react'
import './Banner.css'
import {Link} from 'react-router-dom'
import carVid from '../assets/Car.mp4'

const Banner = () => {
  return (
    <div className='vid'>
        <video autoPlay loop muted id='video'>
            <source src={carVid} type='video/mp4' />
        </video>
        <div>
            <Link to='/reserve' className='btn'>Reserve</Link>
        </div>
    </div>
  )
}

export default Banner