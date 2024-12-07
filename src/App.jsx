import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import {v4} from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "JavaScript",
      description: "Learn JavaScript",
      isCompleted: false,
    },
    {
      id: 2,
      title: "React",
      description: "Learn React",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Tailwind",
      description: "Learn Tailwind",
      isCompleted: true,
    },
  ]);

  function checkOn(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTask);
  }

  function btnDel(taskId) {
    const delTask = tasks.filter((task) => task.id !== taskId);
    setTasks(delTask);
  }

  function addTask(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    console.log(tasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-950 flex justify-center p-6 text-white">
      <div className="w-[500px] space-y-4">
        <h1 className="text-rose-500 text-3xl font-bold text-center">
          Task Manager
        </h1>
        <AddTask addTask={addTask}/>
        <Tasks tasks={tasks} checkOn={checkOn} btnDel={btnDel}/>
      </div>
    </div>
  );
}

export default App;
