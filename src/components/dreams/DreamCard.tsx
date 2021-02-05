import React, { useRef, useState } from "react";
import { Dream } from "../../types/API/DreamType";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { Link, useLocation } from "react-router-dom";
import ReactionBar from "../reaction/ReactionBar";
import { useClickAway } from "react-use";
import { MySwal } from "../swal/MySwal";

type DreamCardProps = Dream;

export default function DreamCard(dream: DreamCardProps) {
  const { pathname } = useLocation();
  const [reactionBarVisible, setReactionBarVisible] = useState(false);
  const reactionBarRef = useRef(null);

  useClickAway(reactionBarRef, () => {
    setReactionBarVisible(false);
  });

  const handleReportClick = () => {
    const validationMessage = "Veuillez remplir ce champ";
    MySwal.fire({
      title: "Signaler un rêve",
      input: "text",
      inputAttributes: {
        required: true,
      },
      validationMessage: validationMessage,
      showCancelButton: true,
      confirmButtonText: "Signaler",
      showLoaderOnConfirm: true,
      preConfirm: (reason: string) => {
        if (!reason) {
          MySwal.showValidationMessage(validationMessage);
        } else {
          //TODO : fetch API
          console.log(`reporting dream ${dream.id} for ${reason}`);
          return true;
        }
      },
      allowOutsideClick: () => !MySwal.isLoading(),
    })
      .then((result) => {
        if (result.isConfirmed) {
          console.log(`dream ${dream.id} reported !`);
          MySwal.fire({
            title: "Signalement effectué",
            icon: "success",
          });
        }
      })
      .catch((error) => {
        MySwal.fire({
          title: "Une erreur est survenue",
          text: error.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="w-full bg-white text-white bg-opacity-25 text-black rounded-xl mb-8">
      <div className="border-b border-gray-300 px-6 py-2">
        <span className="text-xs">
          {/* Par : {dream.author.username}{" "} */}
          <span className="tooltip">
            il y a{" "}
            {formatDistanceToNow(new Date(dream.updatedAt), { locale: fr })}
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
      <div className="flex px-6 pb-3">
        <div className="flex space-x-4 leading-none select-none" role="button">
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
        </div>
        <div
          onClick={handleReportClick}
          className="dream-card-button my-auto space-x-4 leading-none select-none cursor-pointer"
        >
          Signaler
        </div>
      </div>
    </div>
  );
}
