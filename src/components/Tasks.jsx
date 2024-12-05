import { ChevronRightIcon, Trash } from "lucide-react";

function Tasks({tasks, checkOn, btnDel}) {
  return (
    <ul className="space-y-3 bg-slate-400 p-6 shadow-md rounded-2xl">
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
          <button className="bg-slate-800 rounded-lg p-2">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => btnDel(task.id)}
            className="bg-slate-800 rounded-lg p-2"
          >
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;