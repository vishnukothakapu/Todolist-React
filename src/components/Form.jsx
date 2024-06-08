import { useState } from "react";
import styles from './Form.module.css';
import { RiAddFill } from "@remixicon/react";
const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState({ name: "", done: false });
  let day = new Date();
var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
}
let today = day.toLocaleDateString("en-us", options);
    function handleSubmit(e) {
        if (todo.name === "") {
          alert("Please add an item...");
        }
        else {
            e.preventDefault();
            setTodos([...todos,todo]);
            setTodo({ name: "", done: false });
        }
  }
 
  return (
    <>
      <div className="bg-blue-700 mt-8 text-center text-white font-mono font-bold p-4 w-80 m-auto text-2xl rounded-md shadow-md">
        {today}
      </div>
      <form
        className="bg-white mt-7 w-80 md:w-96 m-auto p-10 shadow-lg rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="w-full flex flex-row justify-center gap-4">
          <input
            className="w-100 p-4 rounded-md text-md md:text-lg  outline-blue-700 font-mono border-2 border-blue-700 "
            placeholder="Enter todo item..."
            type="text"
            value={todo.name}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
          />
          <button
            className="bg-blue-700 rounded-full p-5 text-white text-center font-bold font-mono hover:bg-blue-600 active:bg-blue-600 cursor-pointer"
            type="submit"
            title="Add button"
          >
            <RiAddFill />
          </button>
        </div>
      </form>
    </>
  );
}

export default Form