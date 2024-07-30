import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos }) {
  return (
    <div>
      {todos.map((item) => (
        <TodoItem item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
