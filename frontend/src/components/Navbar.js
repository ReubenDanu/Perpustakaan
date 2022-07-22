import logo from '../images/logo.png';
import './navbar.css'

import React from "react";

export default function Navbar(){
    return(
        <div className="navbar">
        <img src={logo} class="logo" alt="logo"/>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#buku">Buku</a></li>
            <li><a href="#rak">Rak Buku</a></li>
            <li><a href="#top-buku">Top Buku</a></li>
            <li><a href="#about">About</a></li>

          </ul>
      </div>
    )
}