import React from "react";
import { Link } from "react-router-dom";

type Props = {
  path: string;
  text: string;
  active: boolean;
  onClick?(): any;
};

export default function HeaderLink(props: Props) {
  return (
    <Link
      className={
        "my-auto w-full md:w-40 p-4 transition duration-150 hover:bg-blue-900 border-b-2 " +
        (props.active
          ? "border-white hover:border-white"
          : "border-blue-800 hover:border-blue-900")
      }
      to={props.path}
      onClick={props.onClick}
    >
      {props.text}
    </Link>
  );
}
