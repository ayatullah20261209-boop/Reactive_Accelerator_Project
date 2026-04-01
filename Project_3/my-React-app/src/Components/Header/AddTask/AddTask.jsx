import { useContext, useState } from "react";
import { TasksDispatchContext } from "./../../../Context/context";

const getRandomColor = () => {
  const colors = [
    // Blue variants
    "bg-blue-100 text-blue-700",
    "bg-blue-200 text-blue-800",
    "bg-sky-100 text-sky-700",
    "bg-cyan-100 text-cyan-700",

    // Green variants
    "bg-green-100 text-green-700",
    "bg-emerald-100 text-emerald-700",
    "bg-lime-100 text-lime-700",
    "bg-teal-100 text-teal-700",

    // Purple / Violet
    "bg-purple-100 text-purple-700",
    "bg-violet-100 text-violet-700",
    "bg-fuchsia-100 text-fuchsia-700",

    // Pink / Rose
    "bg-pink-100 text-pink-700",
    "bg-rose-100 text-rose-700",

    // Yellow / Orange
    "bg-yellow-100 text-yellow-700",
    "bg-amber-100 text-amber-700",
    "bg-orange-100 text-orange-700",

    // Red variants
    "bg-red-100 text-red-700",
    "bg-red-200 text-red-800",

    // Indigo / Dark tones
    "bg-indigo-100 text-indigo-700",
    "bg-indigo-200 text-indigo-800",

    // Neutral / Gray (for balance)
    "bg-gray-100 text-gray-700",
    "bg-slate-100 text-slate-700",
    "bg-zinc-100 text-zinc-700",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};

const createInitialTask = () => ({
  id: crypto.randomUUID(),
  title: "",
  description: "",
  tag: "design",
  tagColour: getRandomColor(),
  date: "",
  status: "todo",
});

export default function AddTask({ editItem }) {
  const dispatch = useContext(TasksDispatchContext);
  const [task, setTask] = useState(editItem || createInitialTask());
  const [isAdd] = useState(Object.is(editItem, null));

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    setTask({
      ...task,
      [name]: value,
    });
  };
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-10 sm:py-12  ">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <a
              href="./index.html"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              Back to board
            </a>
            <h1 className="text-3xl font-bold text-gray-900 mt-8">
              {isAdd ? "Add Task" : "Edit Task"}
            </h1>
            <p className="text-sm text-gray-500">
              {isAdd
                ? "Create a card for your board."
                : "Edit a card for your board."}
            </p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
          <form className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Task Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={task.title}
                  onChange={handleChange}
                  placeholder="e.g. Wireframes"
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Task Subtitle / Description
                </label>
                <input
                  id="description"
                  name="description"
                  value={task.description}
                  onChange={handleChange}
                  placeholder="Add context or acceptance criteria"
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="tag"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tag
                </label>
                <select
                  id="tag"
                  name="tag"
                  value={task.tag}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                >
                  <option value="design">Design</option>
                  <option value="operations">Operations</option>
                  <option value="marketing">Marketing</option>
                  <option value="creative">Creative</option>
                  <option value="development">Development</option>
                  <option value="backend">Backend</option>
                  <option value="setup">Setup</option>
                  <option value="infrastructure">Infrastructure</option>
                  <option value="documentation">Documentation</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Due Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={task.date}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700"
                >
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={task.status}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                >
                  <option value="todo">To-do</option>
                  <option value="in-progress">In Progress</option>
                  <option value="done">Done</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  dispatch({ type: "TOGGLE_TASK", payload: false });
                }}
                href="./index.html"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </a>
              <button
                onClick={(e) => {
                  dispatch({
                    type: isAdd ? "ADD_TASK" : "UPDATE_TASK",
                    payload: task,
                  });
                  setTask(createInitialTask());
                  e.preventDefault();
                  dispatch({ type: "TOGGLE_TASK", payload: false });
                }}
                type="button"
                className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
              >
                {isAdd ? "Add Task" : "Edit Task"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
