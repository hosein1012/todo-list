import { TASK_ACTION_TYPES } from "./tasks.types";

const INITIAL_STATE = {
  tasks: [],
};

export const tasksReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case TASK_ACTION_TYPES.SET_TASKS:
      return {
        ...state,
        tasks: payload,
      };
    case TASK_ACTION_TYPES.ADD_TASK:
      const task = payload;
      const newTasks = [...state.tasks, task];
      return {
        ...state,
        tasks: newTasks,
      };
    case TASK_ACTION_TYPES.REMOVE_TASK:
      const taskIdToRemove = payload;
      const tasksToFilter = [...state.tasks];
      const newTasksAfterRemoveTask = tasksToFilter.filter(
        (task) => task.id !== taskIdToRemove
      );
      return {
        ...state,
        tasks: newTasksAfterRemoveTask,
      };
    case TASK_ACTION_TYPES.DONE_TASK:
      const taskIdToBeDone = payload;
      const tasksTofilterAsDone = [...state.tasks];
      const newTasksAfterDone = tasksTofilterAsDone.map((task) => {
        if (task.id === taskIdToBeDone) {
          return {
            ...task,
            status: true,
          };
        }
        return task;
      });
      return {
        ...state,

        tasks: newTasksAfterDone,
      };
    case TASK_ACTION_TYPES.MARK_TASK_AS_SLELCTED:
      const { taskId, selected } = payload;
      const tasksToBefiltered = [...state.tasks];
      const newTasksAfterRemoveTasks = tasksToBefiltered.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            selected,
          };
        }
        return task;
      });
      return {
        ...state,
        tasks: newTasksAfterRemoveTasks,
      };
    default:
      return state;
  }
};
