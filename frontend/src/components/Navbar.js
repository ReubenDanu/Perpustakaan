import React from 'react'
import './navbar.css'
import { UilEstate } from '@iconscout/react-unicons'
import { UilQuestionCircle } from '@iconscout/react-unicons'
import { UilBookAlt } from '@iconscout/react-unicons'
import { UilUsersAlt } from '@iconscout/react-unicons'
import Logo from '../images/logo.png'

export default function Navbar(){
    return(
        <>
            <nav className='navbar'>
                <div className='navbar__inner navbar__1'>
                    <a href="/"><img src={Logo} alt="logo" className='nav__logo' /> Perpustakaan.ku</a>
                </div>

                <div className='navbar__inner navbar__2'>
                    <ul className='navbar__link'>
                        <li><a href="#home"><UilEstate className="navlink__icon" /> Home</a></li>
                        <li><a href="#buku"><UilBookAlt className="navlink__icon" /> Buku</a></li>
                        <li><a href="#about"><UilQuestionCircle className="navlink__icon" /> About</a></li>
                        <li><a href="#login"><UilUsersAlt className="navlink__icon" /> Login</a></li>
                    </ul>
                </div>
            
            </nav>
        </>
    )
}
