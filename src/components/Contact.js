import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';

class Contact extends Component {
    state = {  }
    render() {
        return (
            <div className="contactContainer">
                <h1>
                    <Fade bottom cascade>Contact.</Fade>
                </h1>
                <Fade bottom>
                    <div className='contact-content'>
                        <h2>Let’s <span className='amazing-color'>create</span> something together</h2>
                            <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                        <ul>
                            {data.social.map((link,index)=>(
                                <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                            ))}
                        </ul>
                    </div>
                </Fade>
                    <span className='footer'>Copyright Leigh Rogers &copy; 2020</span>
            </div>
        );
    }
}

export default Contact;