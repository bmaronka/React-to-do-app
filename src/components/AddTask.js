import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
    minDate = new Date().toISOString().slice(0, 10);

    state = {
        text: '',
        checked: false,
        date: this.minDate,
    }

    handleInputChange = e => {
        const name = e.target.name;
        const type = e.target.type;

        if (type === "text" || type === "date") {
            const value = e.target.value;

            this.setState({
                [name]: value,
            })
        } else if (type === "checkbox") {
            const checked = e.target.checked;

            this.setState({
                [name]: checked,
            })
        }
    }

    handleAddTask = () => {
        const { text, date, checked } = this.state;
        if (text.length > 2) {
            const add = this.props.add(text, date, checked);

            if (add) {
                this.setState({
                    text: '',
                    checked: false,
                    date: this.minDate,
                })
            }
        } else {
            alert("To short task")
        }
    }

    render() {
        let maxDate = this.minDate.slice(0, 4) * 1 + 2;
        maxDate = maxDate + "-12-31";

        return (
            <div className="form">
                <h3>Add Tasks</h3>
                <input type="text" name="text" placeholder="Add task" value={this.state.text} onChange={this.handleInputChange} />
                <input type="checkbox" name="checked" checked={this.state.checked} id="important" onChange={this.handleInputChange} />
                <label htmlFor="important">Important</label>
                <br />
                <label htmlFor="date">Do untill</label>
                <input type="date" name="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleInputChange} />
                <br />
                <button onClick={this.handleAddTask}>Add Task</button>
                <hr />
            </div>
        );
    }
}

export default AddTask;