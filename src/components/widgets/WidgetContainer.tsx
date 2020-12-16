import clsx from "clsx";
import React, { PropsWithChildren } from "react";

type Props = { title: string; width: string };

export default function WidgetContainer({
  width,
  title,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className={clsx("text-gray-900 ", width)}>
      <div className="bg-white rounded-3xl h-64 overflow-hidden relative">
        <div className="text-lg py-2 text-center bg-cover">{title}</div>
        {children}
      </div>
    </div>
  );
}
