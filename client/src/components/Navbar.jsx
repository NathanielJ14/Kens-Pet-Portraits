import React from 'react'
import { Link } from 'react-scroll'


const Navbar = () => {
    return (
        <div>
            <nav>
                <div className='leftNav'>
                    <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}><button type='button' className='navLink'>Home</button></Link>
                    <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}><button type='button' className='navLink'>About</button></Link>
                </div>

                <div className='midNav'>
                    <h1 className='navTitle'>Pencil Paws Pet Portraits</h1>
                </div>

                <div className='rightNav'>
                    <Link activeClass="active" to="gallery" spy={true} smooth={true} duration={500}><button type='button' className='navLink'>Gallery</button></Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}><button type='button' className='navLink'>Contact</button></Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar