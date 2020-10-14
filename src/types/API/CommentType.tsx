import { BaseTable } from "./BaseType";
import { User } from "./UserType";

export type Comment = BaseTable<{
  content: string;
  author: User;
  parent?: Comment | null;
}>;
