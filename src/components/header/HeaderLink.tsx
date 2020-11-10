import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

type Props = {
  path: string;
  text: string;
  active: boolean;
  onClick?(): void;
};

export default function HeaderLink({ path, text, active, onClick }: Props) {
  return (
    <Link
      className={clsx(
        "my-auto w-full md:w-40 p-4 transition duration-150 hover:bg-blue-900 border-b-2 header-link",
        [
          active
            ? "border-white hover:border-white"
            : "border-blue-800 hover:border-blue-900",
        ]
      )}
      to={path}
      onClick={onClick}
    >
      {text}
    </Link>
  );
}
