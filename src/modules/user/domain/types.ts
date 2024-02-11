export type UserDefinitions = {
  id: UniqueId;
  name: string;
  surname: string;
  email: string;
  password: string;
  createAt: Date
}

export type UserData = Omit<UserDefinitions, 'id' | 'password'>