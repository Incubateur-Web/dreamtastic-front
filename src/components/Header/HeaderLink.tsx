import React from "react";
import { Link } from "react-router-dom";

type Props = {
  path: string;
  text: string;
  active: boolean;
};

export default function HeaderLink(props: Props) {
  return (
    <Link
      className={
        "my-auto w-full md:w-40 p-4 transition duration-150 hover:bg-blue-900 hover:border-blue-900 border-b-2 " +
        (props.active ? "border-white" : "border-blue-800")
      }
      to={props.path}
    >
      {props.text}
    </Link>
  );
}
