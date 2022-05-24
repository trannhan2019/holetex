import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todoList",

  initialState: { status: "idle", todos: [] },

  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },

    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        //console.log({ action });
        state.todos = action.payload;
        state.status = "idle";
      })
      .addCase(addTodoThunk.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      });
  },
});

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetch("http://localhost:8000/v1/todos");
  const data = await res.json();
  //console.log(data);
  return data;
});

export const addTodoThunk = createAsyncThunk(
  "todos/addTodoThunk",
  async (newTodo) => {
    const res = await fetch("http://localhost:8000/v1/todos", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
      // body: newTodo,
    });
    //console.log(res);
    const data = await res.json();
    return data;
  }
);

export default todosSlice;
