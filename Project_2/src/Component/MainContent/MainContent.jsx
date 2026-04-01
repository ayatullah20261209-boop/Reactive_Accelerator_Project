import { useState } from "react";

export default function MainContent({ value, handleShow, onSearch }) {
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState(null);
  const [showSort, setShowSort] = useState(false);

  const handleSearch = (evt) => {
    evt.preventDefault();
    onSearch(search);
  };

  const getSortedData = () => {
    let sorted = [...value];

    if (sortType === "name-asc") {
      sorted.sort((a, b) => a.url.localeCompare(b.url));
    } else if (sortType === "name-desc") {
      sorted.sort((a, b) => b.url.localeCompare(a.url));
    } else if (sortType === "date-asc") {
      sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else if (sortType === "date-desc") {
      sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return sorted;
  };

  const sortedData = getSortedData();

  return (
    <main className="p-8">
      <div className="max-w-7xl mx-auto space-y-10 px-4">
        <section className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 p-6 shadow-2xl shadow-black/40 backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            {/* Search Bar */}
            <form className="flex-1" onSubmit={handleSearch}>
              <label className="relative flex-1 block">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search saved credentials"
                  className="w-full rounded-2xl border border-neutral-800 bg-neutral-950/60 py-3 pl-11 pr-4 text-sm text-white placeholder:text-neutral-500 focus:border-blue-500 focus:outline-none"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </label>
            </form>

            {/* Sort Button */}
            <div
              className="relative "
              onMouseEnter={() => setShowSort(true)}
              onMouseLeave={() => setShowSort(false)}
            >
              <button
                onClick={(evt) => {
                  handleSearch(evt);
                  // setShowSort(false);
                }}
                className="inline-flex items-center gap-2 rounded-2xl border border-neutral-800/80 bg-neutral-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-300 hover:border-blue-500 hover:text-white cursor-pointer"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4h18l-8 8v6l-4 4v-8z"
                  />
                </svg>
                Sort By
              </button>

              {showSort && (
                <div className="absolute right-0 mt-0 w-44 rounded-xl border border-neutral-800 bg-neutral-900 shadow-lg z-10 ">
                  <button
                    onClick={() => {
                      setSortType("name-asc");
                      setShowSort(false);
                    }}
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-neutral-800 cursor-pointer"
                  >
                    Name (A-Z)
                  </button>
                  <button
                    onClick={() => {
                      setSortType("name-desc");
                      setShowSort(false);
                    }}
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-neutral-800 cursor-pointer"
                  >
                    Name (Z-A)
                  </button>
                  <button
                    onClick={() => {
                      setSortType("date-asc");
                      setShowSort(false);
                    }}
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-neutral-800 cursor-pointer"
                  >
                    Date (Oldest)
                  </button>
                  <button
                    onClick={() => {
                      setSortType("date-desc");
                      setShowSort(false);
                    }}
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-neutral-800 cursor-pointer"
                  >
                    Date (Newest)
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sortedData.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 to-neutral-800/40 p-10 text-center shadow-2xl shadow-black/40">
              {/* Icon */}
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 9.172a4 4 0 015.656 5.656M15 15l6 6m-6-6a4 4 0 11-5.656-5.656"
                  />
                </svg>
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-neutral-400">
                No Results Found
              </h2>

              {/* Description */}
              <p className="mt-2 text-sm text-neutral-400 max-w-sm">
                We couldn’t find any saved credentials matching your search. Try
                searching with a different keyword.
              </p>

              {/* Optional Button */}
              <button
                onClick={() => setSearch("")}
                className="mt-6 rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Clear Search
              </button>
            </div>
          ) : (
            sortedData.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20"
              >
                <div className="flex items-center gap-4">
                  <div
                    style={{
                      backgroundColor: item.color + "20", // light bg (approx opacity)
                      color: item.color,
                    }}
                    className="h-12 w-12 flex items-center justify-center rounded-xl text-sm font-bold"
                  >
                    {item.url.slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-lg">{item.name}</h3>
                    <p className="text-xs text-neutral-500">{item.category}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-neutral-400">{item.url}</p>

                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Username</span>
                    <span>{item.userName}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Password</span>
                    <span>
                      {item.isFav ? item.password : "••••••"}
                      <button
                        onClick={() => handleShow(item.id)}
                        className="ml-2 text-blue-400 text-xs cursor-pointer"
                      >
                        {item.isFav ? "Hide..." : "Reveal"}
                      </button>
                    </span>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
