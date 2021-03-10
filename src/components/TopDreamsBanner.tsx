import React from "react";
import { TopicCard } from "./TopicCard";

const DREAM =
  "https://images.unsplash.com/photo-1534229317157-f846a08d8b73?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80";
const MIGHTMARE =
  "https://images.unsplash.com/photo-1545276000-974f15d80cf1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1272&q=80";
const LUCIDE =
  "https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80";

export function TopDreamsBanner() {
  return (
    <div className="container mx-auto space-y-4">
      <span className="text-violet text-lg font-semibold">LE TOP RÊVES</span>
      <div className="flex space-x-4">
        <TopicCard imageUrl={MIGHTMARE} label="Le top cauchemar" link="/" />
        <TopicCard imageUrl={LUCIDE} label="Le top rêve lucide" link="/" />
        <TopicCard imageUrl={DREAM} label="Le top rêve" link="/" />
      </div>
    </div>
  );
}
