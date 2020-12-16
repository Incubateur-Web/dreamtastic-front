import Axios from "axios";
import React from "react";
import { useQuery } from "../../hooks/useQuery";
import { Topic } from "../../types/API/TopicType";
import Loader from "../Loader";
import WidgetContainer from "./WidgetContainer";

export function TopicWidget() {
  const { data, error, loading } = useQuery(
    "http://localhost/topics",
    Axios.get
  );

  if (error)
    return (
      <WidgetContainer title="Topics" width="w-1/4">
        <div className="text-red-500">Error fetching topics</div>
      </WidgetContainer>
    );

  if (data === null)
    return (
      <WidgetContainer title="Topics" width="w-1/4">
        {loading ? (
          <Loader color="gray" />
        ) : (
          <div className="text-gray-500 text-center w-full">No Topics</div>
        )}
      </WidgetContainer>
    );

  return (
    <WidgetContainer title="Topics" width="w-1/4">
      {/* {JSON.stringify(data.topics)} */}
      {data.topics.map((topic: Topic) => {
        return <div style={{ color: topic.color }}>{topic.name}</div>;
      })}
    </WidgetContainer>
  );
}
