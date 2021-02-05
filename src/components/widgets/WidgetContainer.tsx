import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = { title: string; width: string };

export default function WidgetContainer({
  width,
  title,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className={clsx("text-gray-900 ", width)}>
      <div className="overflow-hidden relative text-2xl">
        <div className="rounded-full flex bg-white bg-opacity-25 px-2 py-1">
          <FontAwesomeIcon
            className="mr-2 my-auto text-white"
            icon={faSearch}
          />
          <input
            type="text"
            className="bg-transparent focus:outline-none text-white flex-1"
          />
        </div>
        {children}
      </div>
    </div>
  );
}
