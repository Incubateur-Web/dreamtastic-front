import { ShapesBackground } from "./ShapesBackground";

export const TopBg = () => {
  return (
    <div className="absolute top-0 h-80 w-full">
      <div className="relative w-full h-full">
        <ShapesBackground />
      </div>
    </div>
  );
};
