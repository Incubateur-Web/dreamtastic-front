import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

type Props = { icon: ReactNode; link: string; label?: string };

export const HeaderMenuItem = (props: Props) => {
  const { pathname } = useLocation();

  return pathname !== props.link ? (
    <ItemDefaultLink {...props} />
  ) : (
    <ItemActiveLink {...props} />
  );
};

const ItemDefaultLink = ({ icon, link }: Props) => {
  return (
    <div className="py-1 px-2 flex w-1/5 justify-around">
      <Link to={link}>
        <div className="md:w-28 h-full bg-white bg-opacity-0 hover:bg-opacity-20 rounded-lg md:justify-center flex">
          <div className="self-center">{icon}</div>
        </div>
      </Link>
    </div>
  );
};

const ItemActiveLink = ({ icon }: Props) => {
  return (
    <div className="flex border-b-3 px-2 border-white w-1/5 justify-around">
      <div className="py-1 md:w-28 h-full rounded-lg md:justify-center flex">
        <div className="self-center mt-3px">{icon}</div>
      </div>
    </div>
  );
};
