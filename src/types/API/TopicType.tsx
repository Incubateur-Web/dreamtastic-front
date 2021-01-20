import { BaseTable } from "./BaseType";

export type Topic = BaseTable<{
  name: string;
  color: string;
}>;
