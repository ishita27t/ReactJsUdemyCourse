import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return  (
        <div className = "UserOutput"> 
            <p>User Name: {props.username}</p>
            <p>Empathy is a strong and a beautiful word.</p>
        </div>
    ); 
};

export default userOutput;