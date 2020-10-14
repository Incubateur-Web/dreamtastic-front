import BaseTable from "./BaseType";
import User from "./UserType";

export default class Comment extends BaseTable {
  content!: string;
  author!: User;
  parent?: Comment;
}
