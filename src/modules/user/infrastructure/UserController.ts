import type { IHttpRequestService } from "@/modules/shared/repositories/http.interface";
import type { IUserRepository } from "../domain/repository/UserRepository";
import type { UserData } from "../domain/types";
import type { User } from "../domain/User";

export class UserController implements IUserRepository {
  constructor(
    private readonly client: IHttpRequestService
  ) {}

  async saveUser(user: UserData): Promise<User> {
    return this.client.post('url', user)
  }
}