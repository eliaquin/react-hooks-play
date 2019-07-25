import React, { useState } from "react";

const Todo = () => {
  const [todoState, setTodoState] = useState({
    todo: "",
    name: "",
    todoList: []
  });

  const handleFormState = event => {
    setTodoState({ ...todoState, [event.target.name]: event.target.value });
  };

  const addFormState = () => {
    const todoList = [...todoState.todoList];
    todoList.push(todoState.todo);
    const todo = "";
    setTodoState({ ...todoState, todoList, todo });
  };

  return (
    <React.Fragment>
      <input type="text" name="name" placeholder="Name" value={todoState.name} onChange={handleFormState} />
      <input
        type="text"
        name="todo"
        placeholder="To do"
        value={todoState["todo"]}
        onChange={handleFormState}
      />
      <button type="button" onClick={addFormState}>
        Add
      </button>
      <ul>
        {todoState.todoList.map(el => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Todo;
