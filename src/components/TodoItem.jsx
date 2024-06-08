import styles from './TodoItem.module.css'
import {RiDeleteBinLine} from "@remixicon/react";
const TodoItem = ({ item,todos,setTodos}) => {
  function handleDelete(item) {
    if (window.confirm("Are you sure you want to delete?")) {
      setTodos(todos.filter((todo) => todo !== item));
    }
  }
  function handleClick(name) {
    const newArray = todos.map((todo) => todo.name === name ? { ...todo, done: !todo.done }:todo);
    setTodos(newArray);
    console.log(newArray);

  }
  const className = item.done ? styles.completed : "";
  return (
    <div className="w-full text-slate-800 text-xl m-auto rounded-md">
      <div className="flex items-center justify-between font-bold cursor-pointer p-3 font-mono">
        <span className={className} onClick={()=>handleClick(item.name)} title="Tap to mark as complete">{item.name}</span>
        <span>
          <button className="bg-blue-700 p-4 rounded-full cursor-pointer text-white hover:bg-blue-600 active:bg-blue-600" onClick={()=>handleDelete(item)} title="Delete"><RiDeleteBinLine size={20}/></button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}

export default TodoItem