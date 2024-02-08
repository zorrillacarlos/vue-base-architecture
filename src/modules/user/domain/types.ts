export type UserDefinitions = {
  id: UniqueId;
  name: string;
  surname: string;
  email: string;
  date: Date
}

export type UserData = Omit<UserDefinitions, 'id'>