import React from 'react';

let currentDate = parseInt(new Date().getFullYear().toString().substr(2,2), 10);

const OutputMessage = (props) => {
    console.log(props);
    return (
        <div className="outputMessage">
            <p>Hey {props.name}{props.nickname ? ` aka ${props.nickname}` : '' }, class of '{currentDate - 1}/{currentDate} represent! The semester flew by so fast haha.</p>
            {props.course ? <p>{props.course} wouldn't have been the same without you.</p> : <p>Too bad we didn't have any classes together. </p> }
            <p>But yeah, {props.message}!</p>
            <p>Anywayz, {props.closing === true ? `let's chill sometime this summer ok? Don't be a stranger...` : `all the best!` }</p>
            <p>{props.yourName}</p>
            {props.extraMessage ? <p>BTW, {props.extraMessage}</p> : null }
        </div>
    )
}

export default OutputMessage;