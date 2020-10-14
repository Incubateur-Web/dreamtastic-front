import BaseTable from "./BaseType";
import Dream from "./DreamType";

export default class User extends BaseTable {
  username!: string;
  description!: string;
  avatarPath!: string;
  lastConnection!: Date;
  dreams!: Array<Dream>;
}
