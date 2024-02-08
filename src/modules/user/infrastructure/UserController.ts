import type { IHttpRequestService } from "@/modules/shared/repositories/http.interface";
import type { IUserRepository } from "../domain/repository/UserRepository";
import type { UserData } from "../domain/types";
import type { User } from "../domain/User";
import { UserApiAdapter } from "./UserApiAdapter";

export class UserController implements IUserRepository {
  constructor(
    private readonly client: IHttpRequestService
  ) {}

  async saveUser(user: UserData): Promise<User[]> {
    const userBody = {id: '0', ...user};
    const response = await this.client.get<UserApiAdapter[]>(
      `${import.meta.env.VITE_APP_API_NAMESPACE}/users`
    );

    console.log(response.map((user: UserApiAdapter) => user.email))
    return response.map((user: UserApiAdapter) => user.email)
  }
}