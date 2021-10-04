import React from 'react';

const Services = (props) => {
    const{name, price,image,description}= props.Course
    return (
        <div>
             <div className="cart">
                            
                            <div className="image">
                                <img src={image} alt="" />
                            </div>
                            <div>
                            <h5>Techer name: {name}</h5>
                            <p><small>Course: {}</small></p>
                             <p><small>Previous Teching center: {}</small></p>
                            <p><small>Price :{price}</small></p>
                            
                            <button className="btn btn-success">Contact Us</button>
                            </div>
                 </div>   
        </div>
    );
};

export default Services;