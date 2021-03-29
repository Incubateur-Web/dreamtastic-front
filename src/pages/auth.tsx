import React, { PropsWithChildren } from "react";
import { useMouse } from "react-use";

export default function AuthPage({ children }: PropsWithChildren<{}>) {
  const container = React.useRef(null);
  const image = React.useRef(null);
  const motion = useMouse(container);

  return (
    <div ref={container} className="min-h-screen flex">
      <div className="bg-layout-color flex-1 flex items-center">
        <div className="z-20 w-full lg:w-1/3 h-full flex md:h-3/4 bg-white bg-opacity-20 md:rounded-xl lg:rounded-3xl md:m-2 lg:m-6">
          <div className="w-full flex flex-col rounded-3xl relative">
            <div className="text-6xl font-bold w-full text-center mt-2 font-pacifico relative text-white">
              Dreamtastic
            </div>
            <div className="flex-1 flex items-center">{children}</div>
          </div>
        </div>
        <div
          ref={image}
          style={{
            top: motion.docY / 30 + "px",
            left: motion.docX / 30 + "px",
          }}
          className="hidden z-10 lg:block fixed w-full h-full"
        >
          <div className="flex h-full">
            <div className="w-1/3" />
            <div className="w-2/3 m-auto">
              <img
                src={`${process.env.PUBLIC_URL}/images/dream.svg`}
                alt=""
                className="w-3/4 m-auto"
                style={{ filter: "drop-shadow(0 0 0.75rem white)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
