import React from "react";
import DreamCard from "../components/DreamCard";
import DefaultLayout from "../layouts/DefaultLayout";
import { generateDream } from "../mocks/Dream";

export default function HomePage() {
  return (
    <DefaultLayout>
      <div className="space-y-4">
        {Array(10)
          .fill("")
          .map((_, index) => {
            return <DreamCard key={index} dream={generateDream()} />;
          })}
      </div>
    </DefaultLayout>
  );
}
