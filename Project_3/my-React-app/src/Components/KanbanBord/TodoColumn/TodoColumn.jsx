import { useContext, useState } from "react";
import { TasksContext } from "../../../Context/context";
import NotFound from "../NotFound";
import CardOfTodo from "./CardOfTodo";

export default function TodoColumn() {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedTag, setSelectedTag] = useState("");

  const [showSort, setShowSort] = useState(false);
  const [sortOrder, setSortOrder] = useState(""); // "asc" | "desc"

  const data = useContext(TasksContext);

  // filtering + sorting
  const allFiltered =
    data.data
      ?.filter(
        (d) =>
          d.status === "todo" && (selectedTag ? d.tag === selectedTag : true),
      )
      ?.sort((a, b) => {
        if (!sortOrder) return 0;

        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        if (sortOrder === "asc") {
          return dateA - dateB; // Old → New
        } else {
          return dateB - dateA; // New → Old
        }
      }) || [];

  return (
    <div className="flex-1 flex flex-col min-w-0 w-full">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold text-gray-900">To-Do</h2>
          <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
            {allFiltered.length}
          </span>
        </div>

        {/* Actions */}
        <div className="ml-auto flex items-center gap-2">
          {/* FILTER */}
          <div className="relative">
            <button
              onClick={() => setShowFilter((prev) => !prev)}
              type="button"
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              Filter
            </button>

            {/* Filter Dropdown */}
            <div
              className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 z-40 transform transition-all duration-200 origin-top-right ${
                showFilter
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              <p className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase">
                Filter by tag
              </p>

              <div className="px-2 space-y-1">
                {[
                  "design",
                  "operations",
                  "marketing",
                  "creative",
                  "development",
                  "backend",
                  "setup",
                  "infrastructure",
                  "documentation",
                ].map((tag) => (
                  <div
                    key={tag}
                    onClick={() => {
                      setSelectedTag(tag);
                      setShowFilter(false);
                    }}
                    className={`px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100 ${
                      selectedTag === tag ? "bg-gray-100 font-medium" : ""
                    }`}
                  >
                    {tag}
                  </div>
                ))}

                {/* Clear filter */}
                <div
                  onClick={() => {
                    setSelectedTag("");
                    setShowFilter(false);
                  }}
                  className="px-3 py-2 text-red-500 cursor-pointer hover:bg-red-50 rounded-lg"
                >
                  Clear Filter
                </div>
              </div>
            </div>
          </div>

          {/* SORT */}
          <div className="relative">
            <button
              onClick={() => setShowSort((prev) => !prev)}
              type="button"
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              Sort
            </button>

            {/* Sort Dropdown */}
            <div
              className={`absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 z-40 transform transition-all duration-200 origin-top-right ${
                showSort
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              <div
                onClick={() => {
                  setSortOrder("asc");
                  setShowSort(false);
                }}
                className="px-3 py-2 cursor-pointer hover:bg-gray-100"
              >
                Date: Old → New
              </div>

              <div
                onClick={() => {
                  setSortOrder("desc");
                  setShowSort(false);
                }}
                className="px-3 py-2 cursor-pointer hover:bg-gray-100"
              >
                Date: New → Old
              </div>

              <div
                onClick={() => {
                  setSortOrder("");
                  setShowSort(false);
                }}
                className="px-3 py-2 text-red-500 cursor-pointer hover:bg-red-50"
              >
                Clear Sort
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto">
        {allFiltered.length === 0 ? (
          <NotFound />
        ) : (
          <CardOfTodo value={allFiltered} />
        )}
      </div>
    </div>
  );
}
