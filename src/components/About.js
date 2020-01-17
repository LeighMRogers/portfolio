import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';

class About extends Component {
    state = {  }
    render() {
        return (
            <div className='about'>
                <div className='about-content'>
                <h1><Fade bottom cascade>About.</Fade></h1>
                <Fade bottom>
                        <p>{data.abouttext}</p>
                </Fade>
                </div>
                <div>
                    <img src={data.aboutImage} alt='about image'/>
                </div>
            </div>
        );
    }
}

export default About;