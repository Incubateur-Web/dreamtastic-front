import { BaseTable } from "./BaseType";
import { Dream } from "./DreamType";

export type User = BaseTable<{
  firstName: string;
  lastName: string;
  username: string;
  description: string;
  lastConnection: Date;
  dreams: Array<Dream>;
}>;
