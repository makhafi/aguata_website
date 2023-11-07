import React from 'react'
import "./navbar.css"

export default function Navbar() {
  return (
    <div >
      <nav className='nav-container'>
        <a className='nav-links' href="/home.html">Home Page</a>
        <a className='nav-links' href="/about.html">About</a>
        <a className='nav-links' href="/location.html">Location</a>
        <a className='nav-links' href="/contact.html">contact</a>
      </nav>
    </div>
  )
}
