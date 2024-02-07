import type { User } from "../User";
import type { UserData, UserDefinitions } from "../types";
import type { UserEmail } from "../value-objects/UserEmail";

export interface IUserRepository {
  saveUser(userData: UserData): Promise<User>;
  // getUserByEmail(email: UserEmail): UserDefinitions;
}