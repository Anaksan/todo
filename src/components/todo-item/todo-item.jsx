import React, { Component }  from 'react';

import './todo-item.css';

class ToDoItem extends Component{

  state = {
    editValue:'',
}
handleEditChande = ({target: {value } } ) =>{
    this.setState({
      editValue:value,
    })
  } 
 editTask = ({key})=>{
    const {editValue}=this.state;

    if(editValue.length>0 && key==='Enter') {
      const {editTask,id} = this.props;
      console.log(editValue);
      editTask(id,editValue)
    }
  }



render() {
 
  const {editValue} = this.state;
  const { isCompleted, isEdit, removeTask, id, completeTask, editTask, priorityFilterCommon,priorityFilterImportant, priorityFilterVeryImportant} = this.props;
  var {text} = this.props;
  return (  <li className="todo-item">
    <i onClick={()=>completeTask(id)} className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'}>{isCompleted ? <i>☑</i>: <i>☐</i>}</i> 
    <span className={isCompleted ? 'completed text' : 'text'}>{isEdit ? text=<input onChange={this.handleEditChande} onKeyPress={this.editTask} value={editValue}  placeholder="Редактирование задачи" /> :text}</span>
    <i className="edit" onClick={()=>editTask(id)}>✎</i> 
    <button  onClick={()=>priorityFilterImportant(id)} className="important">Important</button>
    <button  onClick={()=>priorityFilterCommon(id)} className="common">Common</button>
    <button  onClick={()=>priorityFilterVeryImportant(id)} className="VeryImportant">Very important</button>
    <i onClick={()=>removeTask(id)} className="fas fa-times">✖</i>
  </li>);
}

}

export default ToDoItem;
