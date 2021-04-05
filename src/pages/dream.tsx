import { useQuery } from "../hooks/useQuery";
import DefaultLayout from "../layouts/DefaultLayout";
import Axios from "axios";
import { useParams } from "react-router";
import { TopicsContext } from "../contexts/TopicsContext";
import { TypeContext } from "../contexts/TypeContext";
import { useContext, useEffect, useState } from "react";

import CommentList from "../components/dreams/comments/CommentList";
import { NewCommentForm } from "../components/dreams/comments/NewCommentForm";
import { UserContext } from "../contexts/UserContext";
import { DATE_FORMAT, TIME_FORMAT } from "../utils/date-utils";
import format from "date-fns/format";
import fr from "date-fns/locale/fr";
import axios from "axios";
import { Dream } from "../types/API/DreamType";

export default function DreamPage() {
  const { id } = useParams<{ id: string }>();
  const { user } = useContext(UserContext);
  const [authorName, setAuthorName] = useState("Anonym");

  const { topics } = useContext(TopicsContext);
  const { types } = useContext(TypeContext);

  const { data, error, loading } = useQuery<{ dream: Dream }>(
    `/dreams/${id}`,
    Axios.get
  );

  useEffect(() => {
    const fetchUser = async () => {
      if (data && data.dream && !data.dream.anonym && data.dream.author) {
        const { data: userData } = await axios.get(
          `/users/${data.dream.author}`
        );
        setAuthorName(userData.user.name);
      }
    };
    fetchUser();
  }, [data]);

  if (error) return <DefaultLayout>{error}</DefaultLayout>;
  if (loading) return <DefaultLayout></DefaultLayout>;
  if (!data) return <DefaultLayout>No datas</DefaultLayout>;
  const dream = data.dream;
  const createdAt = new Date(dream.createdAt);

  return (
    <DefaultLayout>
      <div className="relative container mx-auto px-2 z-20">
        <div className="md:w-7/12 mx-auto">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl text-title-cyan font-semibold">
              {dream.title}
            </h1>
            {/* Info */}
            <div className="flex justify-between items-center text-sm">
              <div className="flex justify-between items-center space-x-3">
                <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                <div className="">{authorName}</div>
              </div>

              <span>
                {
                  types.find((type) => {
                    return type.id === dream.type;
                  })?.name
                }{" "}
                &bull; Publié le{" "}
                {format(createdAt, DATE_FORMAT, { locale: fr })} à{" "}
                {format(createdAt, TIME_FORMAT, { locale: fr })}
              </span>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1527487253850-19ea84ee398e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                alt=""
                className="h-32 md:h-72 w-full object-cover object-bottom"
              />
              <div className="absolute top-2 left-2 right-2">
                <div className="space-x-2 flex flex-wrap">
                  {topics
                    .filter((topic) => dream.topics.includes(topic.id))
                    .map((top) => {
                      return (
                        <div
                          key={top.id}
                          className="rounded-full text-xs leading-none border-2 px-2 py-0.5 font-semibold uppercase border-black backdrop-blur-2"
                        >
                          {top.name}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>

            <div className="text-justify py-4 text-sm md:text-base">
              {dream.content}
            </div>
          </div>

          <div className="py-4">
            <h3 className="font-bold text-dark-violet uppercase text-lg pb-4">
              Commentaires
            </h3>
            <CommentList dreamId={id} />
          </div>
          {user && (
            <div>
              <NewCommentForm dreamId={id} />
            </div>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
}
