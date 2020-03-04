import React from 'react';
import Task from './Task';

const TaskList = props => {
    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);
    const activeTasks = active.map(activeTask => (
        <Task key={activeTask.id} task={activeTask} delete={props.delete} change={props.change} />
    ));
    const doneTasks = done.map(doneTask => (
        <Task key={doneTask.id} task={doneTask} delete={props.delete} change={props.change} />
    ))

    return (
        <>
            <div className="active">
                <h3>Tasks to do</h3>
                {activeTasks.length ? activeTasks : <p>You have nothing to do</p>}
            </div>

            <hr />

            <div className="done">
                <h3>Task done <em>({doneTasks.length})</em></h3>
                {doneTasks.length > 5 && <span style={{ fontSize: 14 }}>It shows only 5 last tasks</span>}
                {doneTasks.slice(0, 5)}
            </div>
        </>
    );
}

export default TaskList;