import { Link } from "react-router-dom";

export const DreamPreviewCard = () => {
  return (
    <div className="w-3/4 md:w-1/4 rounded-xl overflow-hidden relative bg-gray-300 flex-none md:flex-auto">
      <img
        src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
        alt=""
        className="object-cover w-full h-96"
      />
      <div className="absolute top-4 left-4 right-4 flex flex-wrap space-x-2">
        <Tag label="Jeux vidéo" />
        <Tag label="Famille" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-2/6 bg-white bg-opacity-80 px-5 py-3">
        <div className="flex flex-col justify-around h-full">
          <span className="font-bold text-lg leading-7">Eva55</span>
          <div>
            <p className="text-xs italic">Membre depuis le 13 octobre 2019</p>
            <p className="uppercase text-violet text-xs italic">
              240 rêves postés
            </p>
          </div>
          <p className="text-sm mt-1 line-clamp-1">
            Grande rêveuse depuis que je sais dormir.
          </p>
        </div>
      </div>
    </div>
  );
};

type TagProps = { label: string };

const Tag = ({ label }: TagProps) => {
  return (
    <div className="text-sm text-white px-2 leading-none py-0.5 rounded-full font-bold border-white border-2">
      {label}
    </div>
  );
};
