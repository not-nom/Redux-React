import { combineReducers } from "redux";
import { statusFilters } from "./constants";

const tasksInitialState = [
  { id: 1, text: "Master React", completed: false },
  { id: 2, text: "Discover Redux", completed: false },
  { id: 3, text: "Build amazing apps", completed: false },
  { id: 4, text: "Chill", completed: true },
];

const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case "tasks/addTask":
      return [...state, action.payload];
    case "tasks/deleteTask":
      return state.filter(task => task.id !== action.payload);
    case "tasks/toggleCompleted":
      return state.map(task => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });
    default:
      return state;
  }
};

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case "filters/setStatusFilter":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
