import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, EDIT_TASK, PRIORITY_FILTER_COMMON, PRIORITY_FILTER_IMPORTANT, PRIORITY_FILTER_VERY_IMPORTANT} from '../constants';
import { load } from 'redux-localstorage-simple';

let TASKS = load({namespace: 'todo-list'});

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length){
	TASKS = {
		tasks: [],
	}
}


const tasks = (state=TASKS.tasks,{id,text,isCompleted, isEdit, type,priority}) => {
	switch (type) {
		case ADD_TASK:
			return [
			...state, {
				id,
				text,
				isCompleted,
				isEdit,
				priority
				}
			];
			case REMOVE_TASK:
			return [...state].filter(task=>task.id !==id);
			case COMPLETE_TASK:
			return [...state].map(task=>{
				if(task.id === id) {
					task.isCompleted =!task.isCompleted
				}
					return task;
			});
			case EDIT_TASK:
			return [...state].map(task=>{
				if(task.id === id) {
					task.isEdit=!task.isEdit
					task.text=text
				}
					return task;
			});
			case PRIORITY_FILTER_COMMON:
			return [...state].map(task=>{
				if(task.id === id) {
					task.priority='common'
				}
					return task;
			});
			case PRIORITY_FILTER_IMPORTANT:
			return [...state].map(task=>{
				if(task.id === id) {
					task.priority='important'
				}
					return task;
			});
			case PRIORITY_FILTER_VERY_IMPORTANT:
			return [...state].map(task=>{
				if(task.id === id) {
					task.priority='very important'
				}
					return task;
			});
		default:
			return state;
	}
}

export default tasks;