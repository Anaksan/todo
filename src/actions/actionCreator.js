import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, CHANGE_FILTER, EDIT_TASK,PRIORITY_FILTER_COMMON, PRIORITY_FILTER_IMPORTANT, PRIORITY_FILTER_VERY_IMPORTANT} from '../constants';

export const addTast = (id,text,isCompleted,isEdit,priority) =>({
	type: ADD_TASK,
	id,
	text,
	isCompleted,
	isEdit,
	priority
});

export const removeTask = id =>({
	type: REMOVE_TASK,
	id
});

export const completeTask = id =>({
	type: COMPLETE_TASK,
	id
});
export const editTask = (id,text) =>({
	type: EDIT_TASK,
	id,
	text,
});
export const changeFilter = activeFilter =>({
	type: CHANGE_FILTER,
	activeFilter,
});
export const priorityFilterCommon = id =>({
	type: PRIORITY_FILTER_COMMON,
	id,
});
export const priorityFilterImportant = id =>({
	type: PRIORITY_FILTER_IMPORTANT,
	id,
});
export const priorityFilterVeryImportant = id =>({
	type: PRIORITY_FILTER_VERY_IMPORTANT,
	id,
});
