import { Dream } from "../types/API/DreamType";
import { random, date } from "faker";
import { generateUser } from "./User";

export const generateDream = (): Dream => ({
  id: random.uuid(),
  createdAt: date.past(),
  updatedAt: date.past(),
  author: generateUser(),
  content: random.words(200),
  comments: [],
  isAnonymous: true,
  isPublished: true,
  title: random.words(4),
  topic: { color: "", name: "" },
  type: { color: "", name: "" },
});

export const generateDreams = (number: number = 10): Dream[] =>
  new Array(number).fill(generateDream);
