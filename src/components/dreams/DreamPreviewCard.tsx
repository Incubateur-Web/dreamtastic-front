import { useContext } from "react";
import { Link } from "react-router-dom";
import { TopicsContext } from "../../contexts/TopicsContext";
import { TypeContext } from "../../contexts/TypeContext";
import { Dream } from "../../types/API/DreamType";

export const DreamPreviewCard = (props: Dream) => {
  const { types } = useContext(TypeContext);
  const { topics } = useContext(TopicsContext);

  return (
    <div className="w-3/4 md:w-1/4 p-2 flex-none cursor-pointer">
      <Link to={`/dream/${props.id}`}>
        <div className="bg-gray-300 rounded-xl dream-card overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
            alt=""
            className="object-cover w-full h-96 transform scale-100 transition duration-300"
          />
          <div className="absolute top-4 left-4 right-4 flex flex-wrap space-x-2">
            {topics
              .filter((topic) => props.topics.includes(topic.id))
              .map((top) => {
                return <Tag key={top.id} label={top.name} />;
              })}
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-2/6 bg-white bg-opacity-80 px-5 py-3">
            <div className="flex flex-col justify-around h-full">
              <span className="font-bold text-lg leading-7">{props.title}</span>
              <div>
                <p className="uppercase text-violet text-xs italic">
                  {types.find((type) => type.id === props.type)?.name} -{" "}
                  {new Date(props.createdAt).toLocaleDateString()}
                </p>
              </div>
              <p className="text-xs mt-1 line-clamp-2">{props.content}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

type TagProps = { label: string };

const Tag = ({ label }: TagProps) => {
  return (
    <div className="text-sm text-white px-2 leading-none py-0.5 rounded-full font-bold border-white border-2 transition duration-200 hover:bg-white hover:bg-opacity-25 cursor-default">
      {label}
    </div>
  );
};
