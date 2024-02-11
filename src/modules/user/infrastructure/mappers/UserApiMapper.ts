import { User } from "../../domain/User";
import type { UserData } from "../../domain/types";
import type { UserDTO } from "./UserDTO";

export class UserApiMapper {
  static createDomain(newUser: UserDTO): User {
    const { date, ...rest } = newUser;
    return User.create({
      ...rest,
      createAt: new Date(Date.parse(date)),
    })
  }

  static createApiDTO(newUser: UserData) {
    const { createAt, ...rest } = newUser
    return {
      ...rest,
      date: createAt
    }
  }
}