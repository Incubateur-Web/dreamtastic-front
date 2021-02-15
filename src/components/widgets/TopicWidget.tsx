import Axios from "axios";
import React from "react";
import { useQuery } from "../../hooks/useQuery";
import { Topic } from "../../types/API/TopicType";
import Loader from "../Loader";
import WidgetContainer from "./WidgetContainer";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function TopicWidget() {
  const { data, error, loading } = useQuery("/topics", Axios.get);

  if (error)
    return (
      <WidgetContainer title="Topics" width="w-1/4 px-4">
        <div className="text-red-500">Error fetching topics</div>
      </WidgetContainer>
    );

  if (data === null)
    return (
      <WidgetContainer title="Topics" width="w-1/4 px-2">
        {loading ? (
          <Loader color="gray" />
        ) : (
          <div className="text-gray-500 text-center w-full">No Topics</div>
        )}
      </WidgetContainer>
    );

  return (
    <WidgetContainer title="Topics" width="w-1/4 px-2">
      <div className="mt-2">
        {data.topics.map((topic: Topic) => {
          return (
            <div
              key={topic.id}
              className="text-xl px-4 py-1 text-white font-semibold rounded hover:bg-white cursor-pointer hover:bg-opacity-25"
            >
              <FontAwesomeIcon
                className="mr-3 my-auto text-white"
                icon={faClock}
              />
              {topic.name}
            </div>
          );
        })}
      </div>
    </WidgetContainer>
  );
}
