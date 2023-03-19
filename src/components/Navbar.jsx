import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <NavLink to='/' style={({ isActive }) => {
            return {color: isActive ? 'red' : 'gray'}
        }}>
            Home
        </NavLink>
        <NavLink to='/catalogue' style={({ isActive }) => {
            return {color: isActive ? 'red' : 'gray'}
        }}>
            Catalogue
        </NavLink>
    </div>
  )
}
