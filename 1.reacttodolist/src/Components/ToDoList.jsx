import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ items, handleToggle, handleDelete }) => {
  // console.log("ToDoList Component =>", items);
  return (
    <div>
      {items.map((todo) => {
        {
          return (
            <ToDo
              todo={todo}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
          );
        }
      })}
      <button style={{ margin: "20px" }} onClick={handleDelete}>
        {" "}
        Clear{" "}
      </button>
    </div>
  );
};

export default ToDoList;
