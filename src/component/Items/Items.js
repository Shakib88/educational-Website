import Button from '@restart/ui/esm/Button';
import React from 'react';

import Card from 'react-bootstrap/Card'


const Items = (props) => {
    const {candidate,picture,expertise,previous_company,phone,email} = props.team
    return (
        <div>
             <div className="cart">
                            
                            <div className="image">
                                <img src={picture} alt="" />
                            </div>
                            <div>
                            <h5>Name: {candidate}</h5>
                            <p><small>Course: {expertise[0].languages}, {expertise[1].languages}, {expertise[2].languages}</small></p>
                             <p><small>Previous Teching center: {previous_company}</small></p>
                            <p><small>Email :{email}</small></p>
                            <p>Call: {phone}</p>
                            <button className="btn btn-success">Contact Me</button>
                            </div>
                 </div>   
        </div>
    );
};

export default Items;








