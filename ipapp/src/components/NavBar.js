import React from 'react'
import { Outlet, Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav className='navbar bg-dark container'>

            <h4><Link to="/">Home</Link></h4>
            <h4><Link to="/Address">Addresses</Link></h4>
            <h4><Link to="/create">Create Address</Link></h4>
        </nav>
    )
}
