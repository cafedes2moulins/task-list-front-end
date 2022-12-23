import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  // 1. make a deep copy of initial data
  const initialCopy = TASKS.map((task) => {
    return { ...task };
  });

  // WHERE DATA NEEDS TO CHANGE: bikesList
  // 2. create state
  const [tasksList, setTasksList] = useState(initialCopy);

  // functions
  const toggleCompletion = () => {
    console.log('this is in toggleCompletion');

    const newTaskList = [];
    for (cont task in tasksList) {
      
    }

  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          {<TaskList tasks={TASKS} toggleCompletion={toggleCompletion} />}
        </div>
      </main>
    </div>
  );
};

export default App;
