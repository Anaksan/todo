import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../todo-item/todo-item';

import './todo-list.css';

const ToDoList = ({ tasksList, removeTask, completeTask, editTask,priorityFilterCommon, priorityFilterImportant,priorityFilterVeryImportant }) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted, isEdit}) => (
      <ToDoItem priorityFilterVeryImportant={priorityFilterVeryImportant} priorityFilterImportant={priorityFilterImportant}  priorityFilterCommon={priorityFilterCommon}  editTask={editTask} completeTask={completeTask} removeTask={removeTask} id={id} key={id} text={text} isCompleted={isCompleted} isEdit={isEdit} />
    ))}
  </ul>
);

ToDoList.propTypes = {
  tasksList: PropTypes.array,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
  editTask: PropTypes.func,
  priorityFilterCommon: PropTypes.func,
  priorityFilterImportant: PropTypes.func,
  priorityFilterVeryImportant: PropTypes.func,
}

ToDoList.defaultProps = {
  tasksList: [],
  removeTask: ()=>{},
  completeTask: ()=>{},
  editTask:()=>{},
  priorityFilterCommon:()=>{},
  priorityFilterImportant: ()=>{},
  priorityFilterVeryImportant: ()=>{}
}


export default ToDoList;
