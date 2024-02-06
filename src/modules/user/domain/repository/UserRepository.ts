import type { UserDefinitions } from "../types";
import type { UserEmail } from "../value-objects/UserEmail";

export interface IUserRepository {
  saveUser(user: UserDefinitions): void;
  getUserByEmail(email: UserEmail): UserDefinitions;
}