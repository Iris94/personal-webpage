import './nav.css'
import React from 'react';

function Nav () {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
      };

    return (
        <>
           <div className='nav-div'>
            <ul>
                <li><a onClick={() => scrollToSection('home')}>Home</a></li>
                <li><a onClick={() => scrollToSection('code')}>&lt;Code /&gt;</a></li>
                <li><a onClick={() => scrollToSection('connect')}>Connect</a></li>
            </ul>
            </div> 
        </>
    )
}

export default Nav;