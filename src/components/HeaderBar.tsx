import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './HeaderBar.css';

function HeaderBar() {
    return (
        <div className="navbar-main">
            <NavLink
            to="/about"
            className = {({ isActive }) =>
                isActive ? "navbar-content active" : "navbar-content bordered"
            }>
                About
            </NavLink>
            <NavLink
            to="/"
            className = {({ isActive }) =>
                isActive ? "navbar-content active" : "navbar-content"
            } end >
                SNED
            </NavLink>
            <NavLink
            to="/contact"
            className = {({ isActive }) =>
                isActive ? "navbar-content active" : "navbar-content bordered"
            }>
                Contact
            </NavLink>
        </div>
    )
}

export default HeaderBar;