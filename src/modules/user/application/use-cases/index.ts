import type { IUserRepository } from "../../domain/repository/UserRepository";
import type { UserData } from "../../domain/types";
import { CreateNewUser } from "./CreateNewUser";

export class UserServiceEntryPoint {
  private createNewUserUseCase: CreateNewUser

  constructor(
    private readonly userRepository: IUserRepository 
  ){
    this.createNewUserUseCase = new CreateNewUser(userRepository);
  }

  async createUser(user: UserData): Promise<string> {
    return await this.createNewUserUseCase.execute(user)
  }
}