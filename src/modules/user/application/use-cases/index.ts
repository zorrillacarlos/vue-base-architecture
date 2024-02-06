import type { IUserRepository } from "../../domain/repository/UserRepository";
import type { UserDefinitions } from "../../domain/types";
import { CreateNewUser } from "./CreateNewUser";

export class UserServiceEntryPoint {
  private createNewUserUseCase: CreateNewUser

  constructor(
    private readonly userRepository: IUserRepository 
  ){
    this.createNewUserUseCase = new CreateNewUser(userRepository);
  }

  async createUser(user: UserDefinitions): Promise<void> {
    return this.createNewUserUseCase.execute(user)
  }
}