import type { User } from "../../domain/User";
import type { UserData } from "../../domain/types";

export interface IUserUseCase {
  createUser(user: UserData): Promise<User>
}