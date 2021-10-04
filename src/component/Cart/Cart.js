import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import Items from '../Items/Items';
import "./Cart.css"

const Cart = () => {
    const [teams, setTeams]= useState([])

    useEffect(() => {
        fetch('/organization.JSON')
        .then(res => res.json())
        .then(data => setTeams(data))
    },[]);
console.log(teams);
    return (
        <div className="teams margin">
            <div className="row">
                <h1 className="heder">Courses Teacher</h1>
                {
                    teams.map(team => <div className="col-md-4">
                        <Items 
                        
                        team={team}
                        ></Items>
                    </div>
                    )
                }


            </div>
            <button type="button" class="btn btn-warning">See More</button>
        </div>
    );
};

export default Cart;