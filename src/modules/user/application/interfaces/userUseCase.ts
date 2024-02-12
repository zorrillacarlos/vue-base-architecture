import type { UserData } from "../../domain/types";

export interface IUserUseCase {
  createUser(user: UserData): Promise<string>
}