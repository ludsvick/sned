import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './HeaderBar.css';

function HeaderBar() {
    return (
        <div className="navbar-main">
            <NavLink
            to="/home"
            className = {({ isActive }) =>
                isActive ? "navbar-content active" : "navbar-content"
            }>
                SNED
            </NavLink>
            <NavLink
            to="/about"
            className = {({ isActive }) =>
                isActive ? "navbar-content active" : "navbar-content"
            }>
                About
            </NavLink>
            <NavLink
            to="/contact"
            className = {({ isActive }) =>
                isActive ? "navbar-content active" : "navbar-content"
            }>
                Contact
            </NavLink>
        </div>
    )
}

export default HeaderBar;