import React from 'react'
import logo from '../assets/logo.svg'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='title'>
            <img src={logo} width={40} height={40} />
            <p className='logo-title'>Expense Tracker</p>
        </div>
    )
}

export default Header