import { TASK_ACTION_TYPES } from "./tasks.types";

export const setTasks = (tasksList) => ({
  type: TASK_ACTION_TYPES.SET_TASKS,
  payload: tasksList,
});

export const addTaskToState = (task) => ({
  type: TASK_ACTION_TYPES.ADD_TASK,
  payload: task,
});

export const removeTaskFromState = (taskId) => ({
  type: TASK_ACTION_TYPES.REMOVE_TASK,
  payload: taskId,
});

export const MarkTaskAsDoneInState = (taskId) => ({
  type: TASK_ACTION_TYPES.DONE_TASK,
  payload: taskId,
});

export const markTaskAsSelectedInState = (taskId, selected) => ({
  type: TASK_ACTION_TYPES.MARK_TASK_AS_SLELCTED,
  payload: { taskId, selected },
});
