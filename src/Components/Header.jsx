import React from 'react';
import Navbar from './Navbar';

function Header() {
    return(
        <div id='main'>
            <Navbar/>
            <div className='name'>
                <h1><span>Activa tu app</span>Con creatividad</h1>
                <p className='details' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nam.</p>
                <a href='#' className='cv-btn'>Descargar</a>
            </div>
        </div>
    )
}
export default Header;