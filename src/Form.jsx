import { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.todoform}>
        <div className={styles.divClass}>
          <input
            value={todo.name}
            onChange={(e) => {
              setTodo({ name: e.target.value, done: false });
            }}
            type="text"
            className={styles.myInput}
          />
          <button type="submit" className={styles.myButton}>
            Add
          </button>
          /
        </div>
      </form>
    </div>
  );
}
