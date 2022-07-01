import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css';

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
        const changeColor =() => {
            if(window.scrollY >= 100) {
                setColor(true)
            } else {
                setColor(false)
            }
        }

        window.addEventListener('scroll', changeColor)

    return(
        <div className={color ? 'header header-bg': 'header'}>
            <Link to='/'>
                <h1>LuxAutos</h1>
            </Link>
            <ul className={click ? 'nav-menu active': 'nav-menu'}>
            <li>
                   <Link to='/'>Home</Link>
               </li>
               <li>
                   <Link to='/OurFleet'>Our Fleet</Link>
               </li>
               <li>
                   <Link to='/Services'>Services</Link>
               </li>
               <li>
                   <Link to='/Auction'>Auction</Link>
               </li>
               <li>
                   <Link to='/Contact'>Contact</Link>
               </li>
               <li>
                   <Link to='/Reserve'>Reserve</Link>
               </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}
               
           </div>

        </div>
    )
}

export default Navbar