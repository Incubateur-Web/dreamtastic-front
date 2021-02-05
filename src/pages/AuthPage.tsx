import React, { PropsWithChildren, useEffect } from "react";
import { useMouse } from "react-use";

export default function AuthPage({ children }: PropsWithChildren<{}>) {
  const container = React.useRef(null);
  const image = React.useRef(null);
  const motion = useMouse(container);

  useEffect(() => {
    console.log(motion);
  }, [motion]);

  return (
    <div ref={container} className="min-h-screen flex">
      <div className="bg-blue-night flex-1 flex">
        <div className="z-20 w-full lg:w-1/3 flex bg-white rounded-xl lg:rounded-3xl m-2 lg:m-6">
          <div className="w-full flex flex-col bg-white rounded-3xl relative">
            <div className="text-6xl font-bold w-full text-center mt-2 font-pacifico absolute text-blue-night top-0">
              Dreamtastic
            </div>
            <div className="w-full m-auto">{children}</div>
            <img
              src={`${process.env.PUBLIC_URL}/images/dream.svg`}
              alt=""
              className="w-64 h-64 mx-auto lg:hidden"
              style={{ filter: "drop-shadow(0 0 0.75rem white)" }}
            />
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
            <div className="relative flex w-2/3 m-auto">
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
