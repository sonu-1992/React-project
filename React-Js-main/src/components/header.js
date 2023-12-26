import React from 'react';
import { Link } from "react-router-dom";

function Header(){

    return(
        

        <div className='HeadingHeader'>
        <ol>

        <li><span><Link className='Hom' to='/'>Home</Link></span></li>
        <li><span><Link className='Con' to='/contact'>Contact</Link></span></li>
        <li><span><Link className='Abo' to='/about'>About</Link></span></li>
        <li><span><Link className='Pro' to='/product'>Product</Link></span></li>
        </ol>

        </div>
    );
}

export default Header;