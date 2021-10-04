import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';

const Courses = () => {

    const [Courses, setCourses] =useState([])


    useEffect(() => {
        fetch('./gitApi.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className="teams margin">
            <div className="row">
                <h1 className="heder">Our Courses</h1>
                {
                    Courses.map(Course => <div className="col-md-4">
                        <Services
                        Course={Course}
                        
                        >

                        </Services>
                    </div>
                    )
                }


            </div>
            <button type="button" class="btn btn-warning">See More</button>
        </div>
    );
};

export default Courses;