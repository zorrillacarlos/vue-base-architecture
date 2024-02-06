import type { IUserRepository } from "../../core/repositories/user.respository";
import type { UserEmail } from "../../core/value-obects/user.email";
import type { User } from "../../core/user.entity";
import type { IHttpRequestService } from "@/domains/shared/repositories/http.interface";

export class UserController implements IUserRepository {
  constructor(
    private readonly client: IHttpRequestService
  ){}

  getUserFromRepository(email: UserEmail): Promise<User> {
    try {

    }
  }
}