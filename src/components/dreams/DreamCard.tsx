import React, { useRef, useState } from "react";
import { Dream } from "../../types/API/DreamType";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { Link, useLocation } from "react-router-dom";
import ReactionBar from "../reaction/ReactionBar";
import { useClickAway } from "react-use";
import { MySwal } from "../swal/MySwal";
import {
  faCommentDots,
  faFlag,
  faShare,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <div className="px-6 py-2 mt-2 flex">
        <div className="w-10 h-10 rounded-full bg-white bg-opacity-40" />
        <div className="ml-2">
          <div>
            {dream.author ? (
              <>
                {dream.author.firstName} {dream.author.lastName}
              </>
            ) : (
              "Anonyme"
            )}
          </div>
          <div className="text-xs">
            {/* Par : {dream.author.username}{" "} */}
            <span className="tooltip">
              il y a{" "}
              {formatDistanceToNow(new Date(dream.updatedAt), { locale: fr })}
              <span className="tooltip-text text-xs">
                {dream.updatedAt.toLocaleString()}
              </span>
            </span>
          </div>
        </div>
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
      {/* Dream card footer */}
      <div className="flex px-6 pb-3 border-t pt-1">
        <div
          className="flex space-x-4 w-1/4 leading-none select-none"
          role="button"
        >
          <div
            className="flex my-auto flex w-full dream-card-button"
            onMouseDown={(e) => {
              e.stopPropagation();
              setReactionBarVisible((visible) => !visible);
            }}
          >
            <span className="text-center m-auto" role="img" aria-label="J'aime">
              <FontAwesomeIcon className="mr-2" icon={faThumbsUp} />
              J'aime
            </span>
          </div>
        </div>
        <div className="w-1/4 text-center dream-card-button my-auto space-x-4 leading-none select-none cursor-pointer">
          <FontAwesomeIcon className="mr-2" icon={faCommentDots} />
          Commenter
        </div>
        <div className="w-1/4 text-center dream-card-button my-auto space-x-4 leading-none select-none cursor-pointer">
          <FontAwesomeIcon className="mr-2" icon={faShare} />
          Partager
        </div>
        <div
          onClick={handleReportClick}
          className="w-1/4 text-center dream-card-button my-auto space-x-4 leading-none select-none cursor-pointer"
        >
          <FontAwesomeIcon className="mr-2" icon={faFlag} />
          Signaler
        </div>
      </div>
    </div>
  );
}
