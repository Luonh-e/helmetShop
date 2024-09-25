const Loading = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-28">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="border border-gray-300 shadow rounded-md p-4 w-full mx-auto"
        >
          <div className="animate-pulse space-y-4">
            <div className="bg-gray-200 h-48 w-full rounded-md"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
