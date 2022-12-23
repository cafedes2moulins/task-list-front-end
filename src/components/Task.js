import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

// {
//   id: 1,
//   title: 'Mow the lawn',
//   isComplete: false,
// }

const Task = ({ id, title, isComplete, toggleCompletion, deleteTask }) => {
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';

  // if isComplete === true {
  //   buttonClass = tasks__item__toggle--completed
  // } isComplete === false {
  //   buttonClass = ''
  // }

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => toggleCompletion(id)}
        // false
      >
        {title}
      </button>
      <button
        className="tasks__item__remove button"
        onClick={() => deleteTask(id)}
      >
        x
      </button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  toggleCompletion: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Task;

// Wave 1 - question 2
// const Task = (props) => {
//   const id = props.id;
//   const title = props.title;
//   const isComplete = props.isComplete;

//   // useState stuff

//   return (
//     JSX code
//   )

// }
