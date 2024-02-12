import { UserCreatedYetExist } from "../../domain/exceptions/UserCreateadYetExist";
import type { IUserRepository } from "../../domain/repository/UserRepository";
import type { UserData } from "../../domain/types";
import { UserEmail } from "../../domain/value-objects/UserEmail";
import { UserView } from "../UserView";

export class CreateNewUser {
  constructor(
    private readonly userRepository: IUserRepository
  ){}

  async execute ({name, surname, username, email, createAt}: UserData): Promise<string> {
    await this.ensureUserNotExist(email);
    const userResponse = await this.userRepository.saveUser({ name, surname, username, email, createAt });
    return UserView.createViewFromDomain(userResponse).fullName
  }

  private async ensureUserNotExist(email: string): Promise<void> {
    if(await this.userRepository.searchUser(new UserEmail(email).value)) throw new UserCreatedYetExist(email)
  }
}