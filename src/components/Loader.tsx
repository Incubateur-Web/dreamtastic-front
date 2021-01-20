import clsx from "clsx";
import React, { CSSProperties } from "react";

type Props = { size?: number; color?: string };

export default function Loader({ size, color }: Props) {
  const style: CSSProperties = {};
  if (size) {
    style.width = size + "px";
    style.height = size + "px";
  }
  if (color) {
    style.borderTopColor = color;
    style.borderBottomColor = color;
  }

  return (
    <div className="w-full flex h-full">
      <div
        className={clsx(
          color,
          "animate-spin m-auto loader rounded-full w-16 h-16"
        )}
        style={style}
      />
    </div>
  );
}
