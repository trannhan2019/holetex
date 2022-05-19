import { useState } from "react";
import { useDispatch } from "react-redux";
import { Checkbox, Row, Tag } from "antd";
import { toggleTodoStatus } from "../../redux/todo/actions";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

const Todo = ({ name, priority, completed, id }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(completed);
  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(toggleTodoStatus(id));
  };
  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  );
};

export default Todo;
