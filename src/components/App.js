import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <AddTask />
        <TaskList />
      </>
    );
  }
}

export default App;
