import "./App.css";
import Movies from "./Components/Movie";
import Movies1 from "./Components/Movie1";
import { Header } from "./Components/Header";
// import ToDo from "./Components/ToDo";
import ToDoList from "./Components/ToDoList";
import TodoItems from "./data.json";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(TodoItems);
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
        <ToDoList items={items} />
        {/* {console.log(items)} */}
      </div>
    </>
  );
}

export default App;
