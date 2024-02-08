import type { User } from "../../domain/User";
import type { IUserRepository } from "../../domain/repository/UserRepository";
import type { UserData } from "../../domain/types";

export class CreateNewUser {
  constructor(
    private readonly userRepository: IUserRepository
  ){}

  async execute (user: UserData): Promise<User> {
    const userResponse = await this.userRepository.saveUser(user);
    return userResponse
  }
}