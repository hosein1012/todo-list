import { TASK_ACTION_TYPES } from "./tasks.types"

export const setTasks = (tasksList) => ({type: TASK_ACTION_TYPES.SET_NEW_TASK, payload: tasksList});