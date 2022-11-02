import { TASK_ACTION_TYPES } from "./tasks.types";

const INITIAL_STATE = {
  tasks: [],
};

export const taskReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case TASK_ACTION_TYPES.SET_NEW_TASK:
      return {
        ...state,
        tasks: payload,
      };
    default:
      return state;
  }
};
