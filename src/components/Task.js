import React from 'react';

const Task = props => {
    const { text, date, id, active, important, finishDate } = props.task
    const importantStyle = {
        color: 'red',
    };

    if (active) {
        return (
            <>
                <p>
                    <strong style={important ? importantStyle : null}>{text}</strong> - till <span>{date} </span>
                    <button onClick={() => props.change(id)}>Done</button>
                    <button onClick={() => props.delete(id)}>X</button>
                </p>

            </>
        );
    } else {
        const finishTime = new Date(finishDate).toLocaleString();

        return (
            <>
                <p>
                    <strong>{text}</strong><em>(finish till: {date})</em>
                    <br />
                    Done <span>{finishTime}</span>
                    <button onClick={() => props.delete(id)}>X</button>
                </p>
            </>
        )
    }
}

export default Task;