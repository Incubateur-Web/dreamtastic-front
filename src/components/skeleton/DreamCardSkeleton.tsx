import React from "react";

export default function DreamCardSkeleton() {
  return (
    <div>
      <div className="w-full bg-gray-300 text-black rounded-lg">
        <div className="border-b border-gray-500 px-6 py-2">
          <div className="text-xs h-6 w-1/4 bg-gray-500 rounded-sm animate-pulse"></div>
        </div>
        <div className="text-xl uppercase px-6 py-3">
          <div className="text-xs h-8 w-1/5 bg-gray-500 rounded-sm animate-pulse"></div>
        </div>
        <div className="text-justify px-6 pb-3 space-y-2">
          <div className="text-xs h-6 w-full bg-gray-500 rounded-sm animate-pulse"></div>
          <div className="text-xs h-6 w-full bg-gray-500 rounded-sm animate-pulse"></div>
          <div className="text-xs h-6 w-full bg-gray-500 rounded-sm animate-pulse"></div>
          <div className="text-xs h-6 w-full bg-gray-500 rounded-sm animate-pulse"></div>
          <div className="text-xs h-6 w-full bg-gray-500 rounded-sm animate-pulse"></div>
          <div className="text-xs h-6 w-full bg-gray-500 rounded-sm animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
