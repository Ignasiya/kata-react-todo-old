import React from "react";

const TodoListItem = ({ name }) => {
  return <span key={name}>{name}</span>;
};

export default TodoListItem;
