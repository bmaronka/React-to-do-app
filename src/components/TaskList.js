import React from 'react';
import Task from './Task';

const TaskList = props => {
    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);

    if (done.length >= 2) {
        done.sort((a, b) => b.finishDate - a.finishDate);
    }

    if (active.length >= 2) {
        active.sort((a, b) => {
            a = a.text.toLowerCase();
            b = b.text.toLowerCase();

            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });
    }

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