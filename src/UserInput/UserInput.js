import React from 'react';

const userInput = (props) => {
    const innerStyle = {
        padding: 10,
        border: '2px solid red'
    }

    return <input 
        type = "text"
        style = {innerStyle}
        onChange = {props.usernameChanged}
        value = {props.currentUsername} />; 
};

export default userInput;