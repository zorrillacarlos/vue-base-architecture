import type { IHttpRequestService } from "@/modules/shared/repositories/http.interface";
import type { IUserRepository } from "../domain/repository/UserRepository";
import type { UserData } from "../domain/types";
import type { User } from "../domain/User";
import { UserApiMapper } from "./mappers/UserApiMapper";
import type { UserDTO } from "./mappers/UserDTO";

export class UserController implements IUserRepository {
  constructor(
    private readonly client: IHttpRequestService
  ) {}

  async saveUser(user: UserData): Promise<User> {
    const newUser = await this.client.post<UserDTO, any>(
      `${import.meta.env.VITE_APP_API_NAMESPACE}/users/create`,
      UserApiMapper.createApiDTO(user)
    );
    return UserApiMapper.createDomain(newUser)
  }

  async searchUser(email: string):Promise<User | undefined> {
    const usersFromApi = await this.client.get<UserDTO[]>(`${import.meta.env.VITE_APP_API_NAMESPACE}/users`);
    const userFinded = usersFromApi.find((user: UserDTO) => user.email === email)
    return userFinded ? UserApiMapper.createDomain(userFinded) : undefined;
  }
}