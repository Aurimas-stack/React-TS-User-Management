export enum Routes {
  Login = "/login",
  Users = "/items",
  Weak = "/items/weak",
  Reused = "/items/reused",
  Root = "/",
  Old = "/items/old",
}

export enum API {
  Login = "api/login",
  Items = "api/items",
  User = "api/user",
}

export enum Roles {
  read = "read",
  write = "write",
  amin = "amin",
}

export interface IItem {
  name: string;
  role: Roles;
  email: string;
  createdAt: string;
}

export const MS_PER_DAY = 1000 * 60 * 60 * 24;
