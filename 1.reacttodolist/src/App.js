import "./App.css";
import React, { useState } from "react";
import Movies from "./Components/Movie";
import Movies1 from "./Components/Movie1";
import { Header } from "./Components/Header";
import ToDoList from "./Components/ToDoList";
import data from "./data.json";

function App() {
  const [items, setItems] = useState(data);

  const handleToggle = (id) => {
    let toggle = items.map((task) => {
      return task.id == id ? { ...task, played: !task.played } : { ...task };
    });
    setItems(toggle);
  };

  const handleDelete = () => {
    let remove = items.filter(
      task => {
        return !task.played;
      }
    );
    setItems(remove);
  }
  return (
    <>
      {/* <div>
        <h3>
          Class Component == <Movies />
        </h3>
        <hr />
        <h3>
          Functional Component == <Movies1 />
        </h3>
        <hr />
      </div> */}
      <div className="Header">
        <Header />
        <ToDoList items={items} handleToggle={handleToggle} handleDelete={handleDelete}/>
        {/* {console.log("App Component =>", items)} */}
      </div>
    </>
  );
}

export default App;
