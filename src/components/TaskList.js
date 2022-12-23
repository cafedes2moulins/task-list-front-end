import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

const TaskList = ({ tasks, toggleCompletion, deleteTask }) => {
  console.log('Tasks');
  console.log(tasks);
  // const getTaskListJSX = (tasks) => {
  const newTasks = [];

  for (const task of tasks) {
    console.log(task);
    newTasks.push(
      <Task
        key={task.id}
        id={task.id}
        title={task.title}
        isComplete={task.isComplete}
        toggleCompletion={toggleCompletion}
        deleteTask={deleteTask}
      />
    );
  }
  // return newTasks;
  // };

  // return <ul className="tasks__list no-bullet">{getTaskListJSX(tasks)}</ul>;
  return <ul className="tasks__list no-bullet">{newTasks}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ),
  toggleCompletion: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskList;
