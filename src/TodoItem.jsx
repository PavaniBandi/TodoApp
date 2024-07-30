import { useState } from "react";
import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo != item));
  }

  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name == name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  console.log(item.done);
  const myClass = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={myClass} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <button
          className={styles.deleteButton}
          onClick={() => handleDelete(item)}
        >
          X
        </button>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
