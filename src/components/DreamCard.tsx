import React, { useRef, useState } from "react";
import { Dream } from "../types/API/DreamType";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { Link, useLocation } from "react-router-dom";
import ReactionBar from "./reaction/ReactionBar";
import { useClickAway } from "react-use";

type DreamCardProps = {
  dream: Dream;
};

export default function DreamCard({ dream }: DreamCardProps) {
  const { pathname } = useLocation();
  const [reactionBarVisible, setReactionBarVisible] = useState(false);
  const reactionBarRef = useRef(null);

  useClickAway(reactionBarRef, () => {
    setReactionBarVisible(false);
  });

  return (
    <div className="w-full bg-gray-100 text-black rounded-xl">
      <div className="border-b border-gray-300 px-6 py-2">
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
      <div className="text-justify px-6 py-3 relative">
        <span>{dream.content}</span>
        <ReactionBar ref={reactionBarRef} visible={reactionBarVisible} />
      </div>
      {/* Reactions */}
      <div
        className="flex px-6 pb-3 space-x-4 leading-none select-none"
        role="button"
      >
        <div
          className="flex my-auto dream-card-button"
          onMouseDown={(e) => {
            e.stopPropagation();
            setReactionBarVisible((visible) => !visible);
          }}
        >
          <span role="img" aria-label="J'aime">
            👍 J'aime
          </span>
        </div>
        <div className="flex my-auto dream-card-button" role="button">
          <span className="my-auto">
            {dream.comments.length > 1 && <>{dream.comments.length} Comments</>}
            {dream.comments.length <= 1 && <>{dream.comments.length} Comment</>}
          </span>
        </div>
      </div>
    </div>
  );
}
