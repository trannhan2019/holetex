import { configureStore } from "@reduxjs/toolkit";

import filtersSlice from "./filtersSlice";
import todosSlice from "./todosSlice";

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todosSlice.reducer,
  },
});

export default store;
