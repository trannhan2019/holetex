import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import filtersReducer from './filter/reducer';
import todoListReducer from './todo/reducer';

const composedEnhancers = composeWithDevTools();

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer,
});

const store = createStore(rootReducer, composedEnhancers);

export default store;
