import React from "react";
import { Link } from "react-router-dom";
import { OutlineStarIcon } from "./icons/OutlineStarIcon";

type Props = {
  label: string;
  imageUrl: string;
  link: string;
};

export const TopicCard = ({ imageUrl, label, link }: Props) => {
  return (
    <div className="flex md:block relative w-3/5 md:w-1/3 bg-gray-300 text-white flex-none md:flex-auto">
      <Link to={link}>
        <img
          className="object-cover h-60 w-full rounded-2xl overflow-hidden"
          src={imageUrl}
          alt="Illustration du type de rêve"
        />
        <div className="absolute bottom-4 left-4 flex space-x-3 items-center ">
          <OutlineStarIcon />
          <span className="text-base">{label}</span>
        </div>
      </Link>
    </div>
  );
};
