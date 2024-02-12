export type UserDefinitions = {
  id: UniqueId;
  name: string;
  surname: string;
  email: string;
  username: string;
  password: string;
  createAt: Date
}

export type UserData = Omit<UserDefinitions, 'id' | 'password'>