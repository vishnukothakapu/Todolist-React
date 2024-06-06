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
    <div className={styles.item}>
      <div className={styles.itemName} >
        <span className={className} onClick={()=>handleClick(item.name)} title="Tap to mark as complete">{item.name}</span>
        <span>
          <button className={styles.deleteBtn} onClick={()=>handleDelete(item)} title="Delete"><RiDeleteBinLine size={20}/></button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}

export default TodoItem