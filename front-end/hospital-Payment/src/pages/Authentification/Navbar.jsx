import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <nav className="bg-transparent p-6"> 
          <div className="container mx-auto">
            <Link to="/" className="flex items-center justify-center">
              <img src={logo} alt="Logo" className="h-28 w-auto" /> 
            </Link>
          </div>
        </nav>
      )
    }


export default Navbar
