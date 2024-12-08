import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="space-y-3 h-screen w-screen p-6 bg-slate-950 text-slate-50">
      <div className="flex justify-center relative mb-6">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 top-0 bottom-0 text-slate-200"
        >
          <ChevronLeftIcon />
        </button>
        <h1 className="text-3xl font-bold text-rose-500 text-center">
          Task Details
        </h1>
      </div>
      <div className="bg-slate-300 p-6 shadow-md rounded-2xl">
        <h2 className="text-slate-900 font-semibold text-2xl">{title}</h2>
        <p className="text-slate-900 text-xl">{description}</p>
      </div>
    </div>
  );
}

export default TaskPage;
