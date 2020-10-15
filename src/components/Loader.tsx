import React from "react";

export default function Loader({ size }: { size?: number }) {
  return (
    <div className="w-full flex h-full">
      <div
        className="animate-spin m-auto loader rounded-full w-16 h-16"
        style={size ? { width: size + "px" } : {}}
      />
    </div>
  );
}
