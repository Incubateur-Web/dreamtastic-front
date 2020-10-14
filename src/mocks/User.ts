import { User } from "../types/API/UserType";
import { random, date } from "faker";

export const generateUser = (): User => ({
  id: random.uuid(),
  createdAt: date.past(),
  updatedAt: date.past(),
  description: random.words(200),
  dreams: [],
  lastConnection: date.recent(),
  username: random.word(),
});

export const generateUsers = (number: number = 10): User[] =>
  new Array(number).fill(generateUser);
