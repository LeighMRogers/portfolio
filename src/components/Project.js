import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Project extends Component {
    state = {  }
    render() {
        return (
        <Fade bottom>
            <div className='project'>
            <a href={this.props.url}>
                <img src={this.props.imageSrc} alt={this.props.title}></img>
                <h2>{this.props.title}</h2></a>
                <h3>{this.props.service}</h3>
                <h4>{this.props.date}</h4>
                <p>{this.props.description}</p>
                <br></br>
                <hr></hr>
            </div>
        </Fade>);
    }
}


export default Project;