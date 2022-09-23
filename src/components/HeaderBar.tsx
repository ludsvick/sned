import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './HeaderBar.css';

function HeaderBar() {
    return (
        <div className="navbar-main">
            <NavLink
            to="/"
            className = {({ isActive }) =>
                isActive ? "navbar-content active" : "navbar-content"
            } end >
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