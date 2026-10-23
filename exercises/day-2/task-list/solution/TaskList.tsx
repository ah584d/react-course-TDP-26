const tasks = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Read Docs" },
  { id: 3, title: "Build Project" },
];

export default function TaskList() {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title}
        </li>
      ))}
    </ul>
  );
}
