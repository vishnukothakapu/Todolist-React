
import styles from "./Footer.module.css";
const Footer = ({ completedTodos,totalTodos}) => {
    return (
      <>
        <div className={styles.footer}>
          <span className={styles.footerText}>
            Completed Todos: {completedTodos}
          </span>
          <span className={styles.footerText}>Total Todos: {totalTodos}</span>
        </div>
      </>
    );
}

export default Footer