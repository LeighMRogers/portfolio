import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Fade from 'react-reveal/Fade';
import data from '../data'

class Navbar extends Component {
    state = {  }
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() {
        return (
        <>
        <nav>
            <h1><Fade bottom cascade>{data.name}</Fade></h1>
            <ul>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={this.scrollToTop}
                >Home</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >About</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Work</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Contact</Link></li>
            </ul>
        </nav>
        </>
        );
    }
}

export default Navbar;