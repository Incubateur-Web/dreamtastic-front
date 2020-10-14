export type BaseTable<T> = T & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};
