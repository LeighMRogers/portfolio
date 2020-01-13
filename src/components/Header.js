import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data'


class Header extends Component {
    state = {}

    render() {
        return (
        <div className="header-intro">
            {/* <h1 className='heading-background'>HIRE ME</h1> */}
            {/* <header>
                <h1><Fade bottom cascade>{data.name}
                </Fade></h1>
            </header> */}
            <Fade bottom>
                <p className='header-title'>
                    {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
                    {data.headerTagline[2]}
                </p>
                <div className="button-container">
                    <button><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer">Hire Me</a></button>
                    <button><a href={`${data.resume}`} >Download Resume</a></button>
                </div>
            </Fade>
        </div>);
    }
}

export default Header;