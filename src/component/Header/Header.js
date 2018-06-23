import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className='header'>
            <h1>Shelfie</h1>
            <span className='nav-span'>
                <Link to='/'><button className='nav-buttons'>home</button></Link>
                <Link to='/add'><button className='nav-buttons'>add product</button></Link>
            </span>
        </div>
    )
}

export default Header;