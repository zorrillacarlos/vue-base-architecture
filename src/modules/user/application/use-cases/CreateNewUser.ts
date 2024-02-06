import type { IUserRepository } from "../../domain/repository/UserRepository";
import type { UserDefinitions } from "../../domain/types";

export class CreateNewUser {
  constructor(
    private readonly userRepository: IUserRepository
  ){}

  async execute (user: UserDefinitions): Promise<void> {
    this.userRepository.saveUser(user)
  }
}