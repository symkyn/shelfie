import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className='header'>
            Shelfie
            <span className='nav-buttons'>
                <Link to='/'><button>home</button></Link>
                <Link to='/add'><button>add product</button></Link>
            </span>
        </div>
    )
}

export default Header;