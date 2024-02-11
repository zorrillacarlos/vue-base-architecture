import type { User } from "../User";
import type { UserData } from "../types";

export interface IUserRepository {
  saveUser(userData: UserData): Promise<User>;
  searchUser(email: string): Promise<User | undefined>;
}