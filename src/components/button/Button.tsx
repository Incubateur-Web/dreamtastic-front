import React, { PropsWithChildren, ReactElement } from "react";
import { useHistory } from "react-router-dom";

type Props = {
  icon?: ReactElement;
  extraClasses?: string;
  uppercase?: boolean;
  link?: string;
  onClick?: () => void;
};

export default function Button(props: PropsWithChildren<Props>) {
  const classes =
    `bg-dark-violet hover:bg-light-violet transition duration-200 text-white rounded-full focus:outline-none ${
      props.uppercase ? "uppercase" : ""
    } ` + (props.extraClasses ? props.extraClasses : "");
  const history = useHistory();

  const handleClick = () => {
    if (props.onClick !== undefined) {
      props.onClick();
    } else if (props.link) {
      history.push(props.link);
    }
  };

  if (props.icon) {
    return (
      <button onClick={handleClick} className={classes}>
        {props.icon}{" "}
        <span className="hidden md:inline-block">{props.children}</span>
      </button>
    );
  }

  return (
    <button onClick={handleClick} className={classes}>
      {props.children}
    </button>
  );
}
