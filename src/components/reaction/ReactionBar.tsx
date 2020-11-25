import clsx from "clsx";
import React from "react";
import ReactionItem from "./ReactionItem";

export type Props = { visible: boolean };

const ReactionBar = React.forwardRef(({ visible }: Props, ref: any) => (
  <div
    ref={ref}
    className={clsx(
      "absolute bg-white px-3 rounded-md bottom-0 flex text-3xl py-1 shadow-sm",
      [!visible && "hidden"]
    )}
  >
    <ReactionItem smiley="👍" />
    <ReactionItem smiley="🥰" />
    <ReactionItem smiley="🤣" />
    <ReactionItem smiley="😱" />
    <ReactionItem smiley="🤯" />
  </div>
));

export default ReactionBar;
