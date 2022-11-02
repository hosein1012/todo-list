import { combineReducers } from "@reduxjs/toolkit";

import { tasksReducer } from "./tasks/tasks.reducer";

export const rootReducer = combineReducers({
  tasksState: tasksReducer,
});
