import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

class App extends Component {
  counter = 6;

  state = {
    tasks: [
      {
        id: 0,
        text: 'Play witcher 3',
        date: '20-03-2020',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: 'Buy handgrenade',
        date: '25-04-2020',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: 'Kill my mortal enemy',
        date: '10-05-2021',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: 'Do laundry',
        date: '05-02-2020',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: 'Sell car',
        date: '10-10-2020',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 5,
        text: 'Check battery in the TV remote',
        date: '15-11-2020',
        important: false,
        active: true,
        finishDate: null,
      },
    ]
  }

  deleteTask = (id) => {
    // const tasks = [...this.state.tasks];
    // const tasks = Array.from(this.state.tasks);
    // const index = tasks.findIndex(task => task.id === id);

    // tasks.splice(index, 1);
    // this.setState({
    //   tasks,
    // })
    let tasks = [...this.state.tasks];

    tasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks,
    })
  }

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    // let date = new Date();
    // date = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null,
    };
    this.counter++

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task],
    }))

    return true;
  }

  render() {
    return (
      <>
        <h1>To Do App</h1>
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </>
    );
  }
}

export default App;
