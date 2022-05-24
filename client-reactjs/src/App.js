import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Divider, Typography } from "antd";
import "./App.css";
import Filters from "./components/Filters";
import TodoList from "./components/TodoList";
import { fetchTodos } from "./redux/todosSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Typography.Title style={{ textAlign: "center" }}>
        TODO APP with REDUX
      </Typography.Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
