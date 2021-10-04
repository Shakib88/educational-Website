import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <div className="d-flex justify-content-around background">
            <div>
                <h1>Latest News</h1>
                <p>Online programming courses related to Google Cloud is <br/> more related to the deployment of solution-based elements<br/> like solutions based on infrastructure elements</p>
            </div>
            <div>
                <h1>Our Courses</h1>
                <ul>
                    <li>JavaScript Course</li>
                    <li>Matlab Course </li>
                    <li>Python Course</li>
                    <li>Assembly Course</li>
                    <li>PHP Course</li>
                    <li>Ruby course</li>
                </ul>
            </div>
            <div>
                <h1>Subscribe</h1>
                <input type="text" placeholder='Enter your email' />
                <br />
                <br />
                <button type="button" class="btn btn-warning">See More</button>
            </div>
        
        </div>
        <footer>@copyright 2021</footer>
        </div>
        
    );
};

export default Footer;