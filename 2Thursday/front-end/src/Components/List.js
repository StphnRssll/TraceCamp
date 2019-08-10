import React, { useState, useEffect } from "react";
import axios from "axios";
import API_URL from "./apiService";
import { listKick } from "./apiService";
import { NavLink } from 'react-router-dom';

const config= {};

function List() {
    const [kicks,setKicks] = useState([]);
    
    useEffect(() => {
        listKick().then(res => {
            setKicks(res.data);
        });
    }, []);
    return (
        <div className="container">
            <h1 className="text-center">List</h1>
            <ul>
                {setKicks.map(item => (
                    <NavLink key={item.id}>
                        <li className="list-group-item">{item.blurb}</li>
                    </NavLink>
                ))}
            </ul>
        </div>
    )
}

function getKick(id){
    return axios.get(`${API_URL}/${id}/`,config)
}

/*function listKick(){
    return axios.get(`${API_URL}/`,config)
}*/

export default List; 