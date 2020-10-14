import User from "../API/UserType";

export type LoginInput = Pick<User, "username"> & { password: string };

export type RegisterInput = Pick<User, "username"> & { password: string };
