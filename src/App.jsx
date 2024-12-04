import AddTask from "./components/AddTask";
import Tasks from "./components/tasks";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Estudar JavaScript", description: "Estudar JavaScript", isCompleted: true},
    { id: 2, title: "Estudar React", description: "Estudar React", isCompleted: false},
    { id: 3, title: "Estudar Tailwind", description: "Estudar Tailwind", isCompleted: true},
  ]);

  return (
    <div className="w-screen h-screen bg-slate-950 flex justify-center p-6 text-white">
      <div className="w-[500px]">
        <h1 className="text-rose-500 text-3xl font-bold text-center">Task Manager</h1>
        <AddTask />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
