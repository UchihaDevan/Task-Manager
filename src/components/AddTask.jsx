import { useState } from "react";
import Input from "./Input";

function AddTask({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="text-white space-y-3 bg-slate-300 p-6 shadow-md rounded-2xl flex flex-col">
      <Input
        type="text"
        placeholder="Type title of the task"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Type description of the task"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Please insert a title and description.");
          }
          addTask(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-800 px-4 py-2 rounded-lg font-semibold"
        
      >
        Add
      </button>
    </div>
  );
}

export default AddTask;
