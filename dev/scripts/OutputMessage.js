import React from 'react';

let currentDate = parseInt(new Date().getFullYear().toString().substr(2,2), 10);

function message(messageChoice) {
    switch(messageChoice) {
        case '0': return null;
        case '1': return `don't forget me when you're famous!`;
        case '2': return `wish we hung out more!!`;
        case '3': return `you will be successful for sure so I know who to call when I need a job (j/k)!`;
        case '4': return `stay awesome!`;
        case '5': return `party hard but leave some for me!!!`;
    }
}

const OutputMessage = (props) => {
    return (
        <div className="outputMessage">
            <p>Hey {props.name}{props.nickname ? ` aka ${props.nickname}` : '' }, class of '{currentDate - 1}/{currentDate} represent! The semester flew by so fast haha.</p>
            {props.course ? <p>{props.course} wouldn't have been the same without you.</p> : <p>Too bad we didn't have any classes together. </p> }
            <p>But yeah, {message(props.message)}!</p>
            <p>Anyway, {props.after === true ? `let's chill sometime this summer ok? Don't be a stranger...` : `all the best!` }</p>
            <p>{props.yourName}</p>
            {props.extraMessage ? <p>BTW, {props.extraMessage}</p> : null }
        </div>
    )
}

export default OutputMessage;