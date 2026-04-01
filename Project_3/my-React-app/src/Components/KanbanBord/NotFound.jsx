export default function NotFound() {
  return (
    <div className=" flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow w-full max-w-md text-center relative">
        {/* Top Right Icon */}
        <div className="absolute top-4 right-4 text-gray-400"></div>

        {/* Title */}
        <div className="mb-3">
          <h1 className="font-semibold text-gray-900 text-lg">Not Found</h1>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4">
          The card you are looking for doesn’t exist.
        </p>

        {/* Date style line (reuse UI feel) */}
        <div className="flex items-center justify-center gap-1 text-xs text-gray-500 mb-5">
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
          Card missing
        </div>
      </div>
    </div>
  );
}
