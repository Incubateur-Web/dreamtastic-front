import clsx from "clsx";
import { forwardRef } from "react";
import ReactionItem from "./ReactionItem";

export type Props = { visible: boolean };

const ReactionBar = forwardRef(({ visible }: Props, ref: any) => (
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
