import React from "react";
import { Dream } from "../types/API/DreamType";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { Link, useLocation } from "react-router-dom";

type DreamCardProps = {
  dream: Dream;
};

export default function DreamCard({ dream }: DreamCardProps) {
  const { pathname } = useLocation();

  return (
    <div className="w-full bg-gray-300 text-black rounded-lg">
      <div className="border-b border-gray-500 px-6 py-2">
        <span className="text-xs">
          Par : {dream.author.username}{" "}
          <span className="tooltip">
            il y a {formatDistanceToNow(dream.updatedAt, { locale: fr })}
            <span className="tooltip-text text-xs">
              {dream.updatedAt.toLocaleString()}
            </span>
          </span>
        </span>
      </div>
      <div className="text-xl uppercase px-6 py-3">
        {pathname === `/dream/${dream.id}` ? (
          <>{dream.title}</>
        ) : (
          <Link to={{ pathname: `/dream/${dream.id}`, state: dream }}>
            {dream.title}
          </Link>
        )}
      </div>
      <div className="text-justify px-6 py-3">
        <span>{dream.content}</span>
      </div>
      {/* Reactions */}
      <div className="px-6 pb-3 flex">
        <span>
          {dream.comments.length > 1 && <>{dream.comments.length} Comments</>}
          {dream.comments.length <= 1 && <>{dream.comments.length} Comment</>}
        </span>
      </div>
    </div>
  );
}
