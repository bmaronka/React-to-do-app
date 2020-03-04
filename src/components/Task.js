import React from 'react';

const Task = props => {
    const { text, date, id } = props.task

    return (
        <>
            <p>
                <strong>{text}</strong> - till <span>{date} </span>
                <button onClick={() => props.change(id)}>Done</button>
                <button onClick={() => props.delete(id)}>X</button>
            </p>

        </>
    );
}

export default Task;