import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  //   //Descomente abaixo para chamar tarefas da API
  // useEffect(() => {
  //   const fetchTask = async () => {
  //     const APIresponse = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=15",
  //       {
  //         method: "GET",
  //       }
  //     );
  //     const data = await APIresponse.json();
  //     setTasks(data);
  //   };
  //   //fetchTask();
  // }, []);

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
    <div className="overflow-hidden h-auto min-h-screen min-w-full bg-slate-950 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-rose-500 text-3xl font-bold text-center">
          Task Manager
        </h1>
        <AddTask addTask={addTask} />
        <Tasks tasks={tasks} checkOn={checkOn} btnDel={btnDel} />
      </div>
    </div>
  );
}

export default App;
