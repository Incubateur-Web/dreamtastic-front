import { BaseTable } from "./BaseType";
import { User } from "./UserType";
import { Comment } from "./CommentType";

export type Dream = BaseTable<{
  author: User;
  anonym: boolean;
  isPublished: boolean;
  content: string;
  topics: string[];
  type: string;
  title: string;
  comments: Array<Comment>;
}>;
