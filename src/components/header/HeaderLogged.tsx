import {
  faCaretDown,
  faCog,
  faSignOutAlt,
  faUser,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React, { ReactNode, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { useClickAway } from "react-use";
import { HeaderContext } from "../../contexts/HeaderContext";
import { UserContext } from "../../contexts/UserContext";

export const HeaderLogged = () => {
  const { user } = useContext(UserContext);
  const { isOpen, setIsOpen } = useContext(HeaderContext);

  const ref = useRef(null);

  useClickAway(ref, () => {
    setIsOpen(false);
  });

  return (
    <>
      <div className="flex cursor-pointer">
        <div className="flex rounded-full hover:bg-white hover:bg-opacity-10 py-1 pl-2 pr-4 space-x-3">
          <div className="w-8 h-8 rounded-full bg-white bg-opacity-40" />
          <div className="my-auto">
            <span>{user.username}</span>
          </div>
        </div>
      </div>
      <div ref={ref} className="relative">
        <button
          onClick={() => setIsOpen((open) => !open)}
          className="h-10 w-10 rounded-full bg-white bg-opacity-20 flex justify-center items-center focus:outline-none focus:ring-1 focus:ring-white"
        >
          <div>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </button>

        <DropDownMenu show={isOpen} />
      </div>
    </>
  );
};

type DropdownMenuProps = { show: boolean };

const DropDownMenu = ({ show }: DropdownMenuProps) => {
  const { setUser } = useContext(UserContext);
  return (
    <div
      className={clsx(
        [!show && "hidden"],
        "absolute top-12 right-0 bg-gray-700 w-60 rounded-lg p-2"
      )}
    >
      <DropDownItem
        link="/profile/1234567"
        label="Compte"
        icon={<FontAwesomeIcon icon={faUser} />}
      />
      <DropDownItem
        link="/admin"
        label="Administration"
        icon={<FontAwesomeIcon icon={faUserTie} />}
      />
      <DropDownItem
        label="Paramètres"
        icon={<FontAwesomeIcon icon={faCog} />}
      />
      <DropDownItem
        onClick={() => setUser(undefined!)}
        label="Deconnexion"
        icon={<FontAwesomeIcon icon={faSignOutAlt} />}
      />
    </div>
  );
};

type DropDownItemProps = {
  icon: ReactNode;
  label: string;
  link?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const DropDownItem = ({ label, icon, onClick, link }: DropDownItemProps) => {
  const { setIsOpen } = useContext(HeaderContext);
  const DefaultItem = () => (
    <div
      className="py-1 align-middle px-2 flex space-x-2 hover:bg-white hover:bg-opacity-10 rounded"
      onClick={(event) => {
        onClick && onClick(event);
        setIsOpen(false);
      }}
    >
      <div className="mr-1">{icon}</div>
      <div className="flex-1">{label}</div>
    </div>
  );

  const LinkItem = () => (
    <Link to={link!}>
      <DefaultItem />
    </Link>
  );

  return link ? <LinkItem /> : <DefaultItem />;
};
