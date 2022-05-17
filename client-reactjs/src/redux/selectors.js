import { createSelector } from 'reselect';

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  (todoList, searchText) => {
    return todoList.filter((todo) => {
      return todo.name.includes(searchText);
    });
  }
);

//CACH THU CONG KO DUNG THU VIEN RESELECT (MAC DINH CO TRONG REDUX TOOLKIT)
// export const todosRemainingSelector = (state) => {
//   return state.todoList.filter((todo) =>
//     todo.name.includes(state.filters.search)
//   );
// };
