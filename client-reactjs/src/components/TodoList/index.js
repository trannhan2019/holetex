import { useState } from "react";
import { Button, Col, Input, Row, Select, Tag } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import Todo from "../Todo";
import { todosRemainingSelector } from "../../redux/selectors";
import { addTodo } from "../../redux/todo/actions";

const TodoList = () => {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const todoList = useSelector(todosRemainingSelector);
  console.log(todoList);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };
  const handlePriorityChange = (value) => {
    setPriority(value);
  };
  const handleAddButtonClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
    setTodoName("");
    setPriority("Medium");
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>

      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input onChange={handleInputChange} value={todoName} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
};

export default TodoList;
