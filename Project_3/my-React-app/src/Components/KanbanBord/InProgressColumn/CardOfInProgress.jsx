import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { TasksDispatchContext } from "../../../Context/context";

// Option (3 dots) icon
const OptionIcon = () => {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 3a1.25 1.25 0 110-2.5A1.25 1.25 0 018 3zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
    </svg>
  );
};

// Date icon
const DateIcon = () => {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
};

export default function CardOfInProgress({ value }) {
  const [openMenu, setOpenMenu] = useState(null);
  const dispatch = useContext(TasksDispatchContext);

  const deleteItem = (item) => {
    toast(
      ({ closeToast }) => (
        <div>
          <p className="text-sm mb-2">Are you sure?</p>

          <div className="flex gap-2">
            <button
              onClick={() => {
                dispatch({ type: "DELETE_TASK", payload: item });
                toast.success("Deleted successfully.");
                closeToast();
              }}
              className="px-3 py-1 bg-red-500 text-white rounded"
            >
              Yes
            </button>

            <button
              onClick={closeToast}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              No
            </button>
          </div>
        </div>
      ),
      {
        autoClose: false,
        closeOnClick: false,
      },
    );
  };

  return (
    <div className="space-y-4">
      {value.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow relative"
          onClick={() => setOpenMenu(null)} // 👉 click card = close menu
        >
          {/* Menu Button */}
          <div className="absolute top-4 right-4 text-gray-500">
            <button
              type="button"
              className="p-1 rounded-full hover:bg-gray-100 hover:text-gray-700"
              onClick={(e) => {
                e.stopPropagation(); // 👉 VERY IMPORTANT
                setOpenMenu(openMenu === item.id ? null : item.id);
              }}
            >
              <OptionIcon />
            </button>

            {/* Dropdown Menu */}
            {openMenu === item.id && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 z-40"
                onClick={(e) => e.stopPropagation()} // 👉 prevent close when clicking inside
              >
                <p className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Move to
                </p>

                <button
                  onClick={() => {
                    dispatch({
                      type: "UPDATE_STATUS",
                      payload: { id: item.id, status: "todo" },
                    });
                    setOpenMenu(null);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  To-Do
                </button>

                <button
                  onClick={() => {
                    dispatch({
                      type: "UPDATE_STATUS",
                      payload: { id: item.id, status: "done" },
                    });
                    setOpenMenu(null);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  Done
                </button>

                <div className="border-t border-gray-100 mt-2 pt-2 space-y-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch({ type: "EDIT_ITEM", payload: item });
                      e.preventDefault();
                      dispatch({ type: "TOGGLE_TASK", payload: true });
                      setOpenMenu(null);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50"
                  >
                    Edit Card
                  </button>

                  <button
                    onClick={() => deleteItem(item)}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                  >
                    Delete Card
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="mb-3">
            <h3 className="font-semibold text-gray-900 text-sm">
              {item.title}
            </h3>
          </div>

          <p className="text-xs text-gray-600 mb-4">{item.description}</p>

          <div className="flex items-center gap-2 mb-3">
            <span
              className={`inline-block px-2.5 py-1 ${item.tagColour} text-xs font-medium rounded`}
            >
              {item.tag}
            </span>
          </div>

          <div className="flex items-center gap-1 text-xs text-gray-500">
            <DateIcon />
            {item.date}
          </div>
        </div>
      ))}
    </div>
  );
}
