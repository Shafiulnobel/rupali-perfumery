import React from 'react';
import './ActiveLink.css'
import { NavLink } from 'react-router-dom';
const ActiveLink = ({to,children}) => {
    return (
        <NavLink
                    to={to}
                    style={({ isActive }) => ({
                      color: isActive ? 'black' : 'black',
                      opacity:isActive ? '50%' :'100',
                      textDecoration: isActive ? 'underline' : 'none',
                      fontSize : '20px'
                    })}
                  >
                    {children}
                  </NavLink>
    );
};

export default ActiveLink;