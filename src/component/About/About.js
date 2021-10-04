import React from 'react';
import './About.css';

const About = () => {
    return (
     <div className="about">
            <div className="inside">
            <h1><span className="head">About US</span></h1>
                <p> Like most free offerings, Codecademy's free version is geared toward beginners. But understanding concepts is only the beginning. Pro's projects, intermediate courses, and career roadmaps aim to help you go beyond the initial concepts and help you improve as a programmer.</p>
            <button type="button" class="btn btn-warning">Read More</button>
            </div>
     </div>
    );
};

export default About;