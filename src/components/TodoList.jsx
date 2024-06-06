import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";
const TodoList = ({ todos, setTodos }) => {
  const sortedTodos = todos.slice().sort((a, b) => Number(a.done) - Number(b.done))

  return (
    <div className={styles.list}>
      {sortedTodos.map((item,index) => (
          <TodoItem key={index} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;
