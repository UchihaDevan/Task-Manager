import { useState } from "react";

function AddTask({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-3 bg-slate-400 p-6 shadow-md rounded-2xl flex flex-col">
      <input
        type="text"
        placeholder="Type title of the task"
        className="text-slate-950 border border-slate-500 outline-slate-500 px-4 py-2 rounded-lg"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Type description of the task"
        className="text-slate-950 border border-slate-500 outline-slate-500 px-4 py-2 rounded-lg"
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
