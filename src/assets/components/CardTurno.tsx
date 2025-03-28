function CardTurno() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center bg-red-50 p-4">
        <div className="mr-4">
          <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
            09:00
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Maria Garcia</h2>
            <span className="text-sm text-gray-500">90 min</span>
          </div>
          <div className="mt-1">
            <p className="text-sm font-medium"></p>
            <p className="text-sm text-gray-500">2215053940</p>
          </div>
        </div>
      </div>
      <div className="p-4 bg-gray-50">
        <div className="space-y-2">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            <span className="text-sm text-gray-700">Corte</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm text-gray-700">Tintura</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTurno;
