import { Dream } from "../types/API/DreamType";
import { random, date } from "faker";
import { generateUser } from "./User";
import { getRanDomInt } from "./utils";
import { generateComments } from "./Comment";

export const generateDream = (): Dream => ({
  id: random.uuid(),
  createdAt: date.past(),
  updatedAt: date.soon(),
  author: generateUser(),
  content: random.words(getRanDomInt(200)),
  comments: generateComments(3),
  isAnonymous: true,
  isPublished: true,
  title: random.words(4),
  topic: { color: "", name: "" },
  type: { color: "", name: "" },
});

export const generateDreams = (number: number = 10): Dream[] =>
  new Array(number).fill(generateDream);
