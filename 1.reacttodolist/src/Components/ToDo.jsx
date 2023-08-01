import React from "react";

// const ToDo = (props) => {
//   return <div>{props.todo.task}</div>;
// };

const ToDo = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };
  // console.log("Todo Component =>", todo);
  // return <div>{todo.name}</div>;
  
  return <div className={todo.played ? "strike" : ""}>{todo.name}</div>;

  // <div
  //   id={todo.id}
  //   key={todo.id + todo.name}
  //   name="todo"
  //   value={todo.id}
  //   onClick={handleClick}
  //   className={todo.played ? "todo strike" : "todo"}
  // >
  //   {todo.name}
  // </div>;
};

export default ToDo;
