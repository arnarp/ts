type User = {
  name: string;
  kt: string;
  email: string | null;
};

/**
 * From T, pick a set of properties
 * whose keys are in the union K
 */
type Pikk<T, K extends keyof T> = { [P in K]: T[P] };

type PikkUser = Pikk<User, "name" | "kt">;
type PikkUser2 = { [P in "name" | "kt"]: User[P] };
type PikkUser3 = {
  name: User["name"];
  kt: User["kt"];
};
type PikkUser4 = {
  name: string;
  kt: string;
};

type NonNullablePropertyKeys<T> = {
  [P in keyof T]: null extends T[P] ? never : P
}[keyof T];

type NonNullableUserPropertyKeys = NonNullablePropertyKeys<User>;
type NonNullableUserPropertyKeys2 = {
  [P in keyof User]: null extends User[P] ? never : P
}[keyof User];
type NonNullableUserPropertyKeys3 = {
  [P in "name" | "kt" | "email"]: null extends User[P] ? never : P
}[keyof User];
type NonNullableUserPropertyKeys4 = {
  name: null extends User["name"] ? never : "name";
  kt: null extends User["kt"] ? never : "kt";
  email: null extends User["email"] ? never : "email";
}[keyof User];
type NonNullableUserPropertyKeys5 = {
  name: null extends string ? never : "name";
  kt: null extends string ? never : "kt";
  email: null extends string | null ? never : "email";
}[keyof User];
type NonNullableUserPropertyKeys6 = {
  name: "name";
  kt: "kt";
  email: never;
}[keyof User];
type NonNullableUserPropertyKeys7 = {
  name: "name";
  kt: "kt";
  email: never;
}["name" | "kt" | "email"];
type NonNullableUserPropertyKeys8 =
  | {
      name: "name";
      kt: "kt";
      email: never;
    }["name"]
  | {
      name: "name";
      kt: "kt";
      email: never;
    }["kt"]
  | {
      name: "name";
      kt: "kt";
      email: never;
    }["email"];
type NonNullableUserPropertyKeys9 = "name" | "kt" | never;
type NonNullableUserPropertyKeys10 = "name" | "kt";

type NonNullableProperties<T> = Pick<T, NonNullablePropertyKeys<T>>;
type NonNullableUserProperties = NonNullableProperties<User>;
