import { BadApiRequest } from "@/domains/shared/exceptions/BadApiRequest.error";
import type { IUserRepository } from "../../core/repositories/user.respository";
import { UserEmail } from "../../core/value-obects/user.email";
import { UserViewModel } from "../view-model/user.view";
export class GetUser {
  constructor(
    private readonly userResources: IUserRepository
  ){}

  async execute(email: string): Promise<string | undefined> {
    try {
      const user = await this.userResources.getUserFromRepository(new UserEmail(email));
      if (!user) return;

      return UserViewModel.createUserViewMode(user).completeName;
    } catch(e) {
      throw new BadApiRequest(e as string)
    }
  }
}