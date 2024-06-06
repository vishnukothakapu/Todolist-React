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
     
      <div className={styles.header}>{today}</div>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.container}>
          <input
            className={styles.formInput}
            placeholder="Enter todo item..."
            type="text"
            value={todo.name}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
          />
          <button className={styles.formBtn} type="submit" title="Add button">
            <RiAddFill />
          </button>
        </div>
      </form>
    </>
  );
}

export default Form