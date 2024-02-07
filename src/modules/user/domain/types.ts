export type UserDefinitions = {
  id: UniqueId;
  name: string;
  surname: string;
  email: string;
}

export type UserData = Omit<UserDefinitions, 'id'>