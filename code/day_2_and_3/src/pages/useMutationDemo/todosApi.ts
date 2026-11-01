export interface Todo {
  id: number;
  title: string;
}

// In-memory "server" so the demo works offline; every call takes ~600ms like a real request.
let todos: Todo[] = [
  { id: 1, title: "Learn useQuery" },
  { id: 2, title: "Learn useMutation" },
];
let nextId = 3;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchTodos(): Promise<Todo[]> {
  await delay(600);
  return [...todos];
}

export async function addTodo(title: string): Promise<Todo> {
  await delay(600);
  if (title.toLowerCase().includes("fail")) {
    throw new Error(
      'Server rejected the todo (titles containing "fail" are refused)',
    );
  }
  const todo = { id: nextId++, title };
  todos = [...todos, todo];
  return todo;
}

export async function deleteTodo(id: number): Promise<void> {
  await delay(600);
  todos = todos.filter((todo) => todo.id !== id);
}
