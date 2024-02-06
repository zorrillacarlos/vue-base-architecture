import type { UserDefinitions } from "../types";

export interface IUserRepository {
  save(user: UserDefinitions): void
}