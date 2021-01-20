import React from "react";
import { Dream } from "../../types/API/DreamType";
import DreamCard from "./DreamCard";

type Props = { dreams: Dream[] };

export default function DreamList({ dreams }: Props) {
  return (
    <>
      {dreams.map((dream) => (
        <DreamCard {...dream} />
      ))}
    </>
  );
}
