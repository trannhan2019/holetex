import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  (todoList, searchText, status) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === true
          ? todo.completed === status
          : todo.completed !== status)
      );
    });
  }
);

//CACH THU CONG KO DUNG THU VIEN RESELECT (MAC DINH CO TRONG REDUX TOOLKIT)
// export const todosRemainingSelector = (state) => {
//   return state.todoList.filter((todo) =>
//     todo.name.includes(state.filters.search)
//   );
// };
