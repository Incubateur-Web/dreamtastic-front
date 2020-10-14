import { User } from "../types/API/UserType";
import { random, date } from "faker";
import { Comment } from "../types/API/CommentType";
import { generateUser } from "./User";

export const generateComment = (): Comment => ({
  id: random.uuid(),
  createdAt: date.past(),
  updatedAt: date.past(),
  author: generateUser(),
  content: random.words(200),
  parent: null,
});

export const generateComments = (number: number = 10): Comment[] =>
  new Array(number).fill(generateComment());
