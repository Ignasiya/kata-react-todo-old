import React from "react";
import AppHeader from "components/Header/app-header";
import SearchPanel from "components/SearchPanel/search-panel";
import TodoList from "components/TodoList/todo-list";

const TodoForm = () => {
  const isLoggedIn = false;
  const loginBox = <span>Log in please</span>;
  const welcomeBox = <span>Welcome Back</span>;

  return (
    <div>
      {isLoggedIn ? welcomeBox : loginBox}
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

export default TodoForm;
