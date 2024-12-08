import { ChevronRightIcon, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, checkOn, btnDel }) {
  const navigate = useNavigate();

  function btnDetails(task) {
    const query = new URLSearchParams()
    query.set("title", task.title)
    query.set("description", task.description)
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-3 bg-slate-300 p-6 shadow-md rounded-2xl text-white">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => checkOn(task.id)}
            className={`bg-slate-800 text-left w-full p-2 top-1 rounded-lg ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <Button
            onClick={() => btnDetails(task)}
          >
            <ChevronRightIcon />
          </Button>
          <Button
            onClick={() => btnDel(task.id)}
          >
            <Trash />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
