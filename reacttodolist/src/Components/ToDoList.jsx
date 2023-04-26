import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ items }) => {
  return (
    <div>
      {items.map((todo) => {
        {
          return <ToDo todo={todo} />; 
        }
        {/* return <div key={todo}>Todos are: {todo}</div>; */}
      })}
    </div>
  );
};

export default ToDoList;
