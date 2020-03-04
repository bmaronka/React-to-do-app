import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: 'Play witcher 3',
        date: '2020-03-20',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: 'Buy handgrenade',
        date: '2020-04-25',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: 'Kill my mortal enemy',
        date: '2021-05-10',
        important: true,
        active: true,
        finishDate: null,
      },
    ]
  }

  deleteTask = (id) => {
    // const tasks = [...this.state.tasks];
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

  render() {
    return (
      <>
        <AddTask />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </>
    );
  }
}

export default App;
