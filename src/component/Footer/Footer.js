import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <div className="d-flex justify-content-around background">
            <div>
                <h1>Latest News</h1>
                <p>we have grate news for you, in future <br />we will lounce 6 month full time job preparing training.<br /> This course will help you in your proffessional life.<br /> Our teacher will be most expertise and most proffessional</p>
            </div>
            <div>
                <h1>Our Courses</h1>
                <ul>
                    <li>JavaScript Course</li>
                    <li>Python course </li>
                    <li>Java Course</li>
                    <li> c++ Course</li>
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