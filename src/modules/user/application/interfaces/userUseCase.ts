import type { UserData } from "../../domain/types";
import type { UserView } from "../UserView";

export interface IUserUseCase {
  createUser(user: UserData): Promise<UserView>
}