import React from "react";

const Loading: React.FC = () => {
  return (
    <div
      role="status"
      className="flex flex-row flex-nowrap space-x-4 animate-pulse "
    >
      {[1, 2, 3, 4].map((data) => (
        <div className="w-1/4 min-w-[25%]" key={data}>
          <div className="h-[30rem] bg-gray-200 rounded-lg max-w-sm mb-4" />
        </div>
      ))}
    </div>
  );
};

export default Loading;
