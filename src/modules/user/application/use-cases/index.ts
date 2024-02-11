import type { IUserRepository } from "../../domain/repository/UserRepository";
import type { UserData } from "../../domain/types";
import type { UserView } from "../UserView";
import { CreateNewUser } from "./CreateNewUser";

export class UserServiceEntryPoint {
  private createNewUserUseCase: CreateNewUser

  constructor(
    private readonly userRepository: IUserRepository 
  ){
    this.createNewUserUseCase = new CreateNewUser(userRepository);
  }

  async createUser(user: UserData): Promise<UserView> {
    return await this.createNewUserUseCase.execute(user)
  }
}