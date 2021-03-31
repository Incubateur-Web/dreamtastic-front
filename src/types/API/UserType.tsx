import { BaseTable } from "./BaseType";
import { Dream } from "./DreamType";

export type User = BaseTable<{
  firstName: string;
  lastName: string;
  name: string;
  username: string;
  description: string;
  lastConnection: Date | string;
  dreams: Array<Dream>;
}>;
