import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  // 1. make a deep copy of initial data
  // const initialCopy = TASKS.map((task) => {
  //   return { ...task };
  // });
  const [tasksData, setTasksData] = useState([]);
  //   {
  //     id: 1,
  //     title: 'Mow the lawn',
  //     isComplete: false,
  //   },
  //   {
  //     id: 2,
  //     title: 'Cook Pasta',
  //     isComplete: true,
  //   },
  // ]);

  const someUrl = 'http://127.0.0.1:5000/tasks';

  const getTasks = () => {
    axios
      .get(someUrl)
      .then((response) => {
        const tasksApiResponseList = response.data.map((task) => {
          return {
            id: task.id,
            title: task.title,
            isComplete: task.isComplete,
          };
        });

        setTasksData(tasksApiResponseList);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  useEffect(getTasks, []);

  // functions
  const toggleCompletion = (id) => {
    console.log('this is in toggleCompletion');
    const tasksCopy = tasksData.map((task) => {
      if (id === task.id) {
        task.isComplete = !task.isComplete;
        return task;
      }
      return task;
    });
    setTasksData(tasksCopy);
  };

  const deleteTask = (id) => {
    console.log('this is in deleteTask');
    // could use filter instead
    const newTasksList = [];
    for (const task of tasksData) {
      if (id !== task.id) {
        newTasksList.push(task);
      }
    }

    // const tasksCopy = tasksData.map((task) => {
    //   if (id !== task.id) {
    //     return task;
    //   }
    // });

    setTasksData(newTasksList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList
            tasks={tasksData}
            toggleCompletion={toggleCompletion}
            deleteTask={deleteTask}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
