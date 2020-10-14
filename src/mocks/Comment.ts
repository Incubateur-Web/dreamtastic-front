import { random, date } from "faker";
import { Comment } from "../types/API/CommentType";
import { generateUser } from "./User";
import { getRanDomInt } from "./utils";

export const generateComment = (): Comment => ({
  id: random.uuid(),
  createdAt: date.past(),
  updatedAt: date.past(),
  author: generateUser(),
  content: random.words(getRanDomInt(50)),
  parent: null,
});

export const generateComments = (number: number = 10): Comment[] =>
  new Array(number).fill(generateComment());
