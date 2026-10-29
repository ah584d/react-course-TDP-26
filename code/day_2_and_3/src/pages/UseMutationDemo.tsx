import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { addTodo, deleteTodo, fetchTodos } from "./useMutationDemo/todosApi";
import "./UseMutationDemo.css";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

function TodoList() {
  const client = useQueryClient();
  const [title, setTitle] = useState("");

  const todosQuery = useQuery({ queryKey: ["todos"], queryFn: fetchTodos });

  const add = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      setTitle("");
      client.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const remove = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => client.invalidateQueries({ queryKey: ["todos"] }),
  });

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (title.trim()) add.mutate(title.trim());
  }

  return (
    <>
      <form className="um-form" onSubmit={handleSubmit}>
        <input
          className="um-input"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder='New todo (type "fail" to see an error)'
        />
        <button className="um-button" type="submit" disabled={add.isPending}>
          {add.isPending ? "Adding..." : "Add"}
        </button>
      </form>

      {add.isError && <p className="um-error">{add.error.message}</p>}

      {todosQuery.isPending && <p>Loading todos...</p>}
      {todosQuery.error && (
        <p className="um-error">{todosQuery.error.message}</p>
      )}

      <ul className="um-list">
        {todosQuery.data?.map((todo) => (
          <li key={todo.id} className="um-item">
            <span>{todo.title}</span>
            <button
              className="um-button um-delete"
              onClick={() => remove.mutate(todo.id)}
              disabled={remove.isPending && remove.variables === todo.id}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <p className="um-status">
        {todosQuery.isFetching ? "Syncing with server..." : "Up to date"}
      </p>
    </>
  );
}

function UseMutationDemo() {
  return (
    <div className="um-page">
      <nav className="breadcrumb">
        <Link to="/">← Back to Home</Link>
      </nav>

      <h1>useMutation</h1>
      <p className="um-subtitle">
        useQuery reads the list. useMutation writes to it, then
        invalidateQueries refetches the list.
      </p>

      <QueryClientProvider client={queryClient}>
        <TodoList />
      </QueryClientProvider>
    </div>
  );
}

export default UseMutationDemo;
