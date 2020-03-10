import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTast, removeTask, completeTask, changeFilter, editTask, priorityFilterCommon, priorityFilterImportant, priorityFilterVeryImportant} from '../../actions/actionCreator';

import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';
import Title from '../../components/title/title';

import './todo.css';



class ToDo extends Component {

  state = { 
    taskText:'',
  }



  handleInputChande = ({target: {value } } ) =>{
    this.setState({
      taskText:value,
    })
  }   
  


  addTast = ({key})=>{
    const {taskText}=this.state;

    if(taskText.length>0 && key==='Enter') {
      const {addTast} = this.props;

      addTast((new Date()).getTime(), taskText,false,false, 'important');

      this.setState({
        taskText:'',

      })
    }
  }

  filterTasks = (tasks, activeFilter) => {
    switch(activeFilter) {
      case 'completed':
        return tasks.filter(task=>task.isCompleted);
        
      case 'active':
        return tasks.filter(task=> !task.isCompleted);
       
      case 'important':
        return tasks.filter(task=> task.priority==='important');
      case 'common':
        return tasks.filter(task=> task.priority==='common');
       case 'very important':
        return tasks.filter(task=> task.priority==='very important');
       
      default:
        return tasks;
    }
  }

  render() {

    const {taskText,} = this.state;
    const {tasks, removeTask, completeTask, filters, changeFilter, editTask, priorityFilterCommon, priorityFilterImportant, priorityFilterVeryImportant} = this.props;
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTasks = this.filterTasks(tasks, filters);


    return (

      <div className="todo-wrapper">
      <Title title="ToDo List" />
        <ToDoInput onKeyPress={this.addTast} onChange={this.handleInputChande} value={taskText} />
        {isTasksExist && <ToDoList priorityFilterVeryImportant={priorityFilterVeryImportant} priorityFilterImportant={priorityFilterImportant} priorityFilterCommon={priorityFilterCommon} editTask={editTask} completeTask={completeTask} tasksList={filteredTasks} removeTask={removeTask}/>}
        {isTasksExist && <Footer changeFilter={changeFilter} amount={tasks.length} activeFilter={filters} />}
      </div>
    );
  }
}

export default connect(({tasks, filters})=>({
  tasks,
  filters,
}), {addTast, removeTask, completeTask, changeFilter, editTask, priorityFilterCommon, priorityFilterImportant,priorityFilterVeryImportant})(ToDo);
