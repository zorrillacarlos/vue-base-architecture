import type { IUserRepository } from "../../core/repositories/user.respository";
import type { IUserResponseType } from "./types";
export class GetUser {
  constructor(
    private readonly userResources: IUserRepository
  ){}

  async execute(email: string): Promise<IUserResponseType> {}
}