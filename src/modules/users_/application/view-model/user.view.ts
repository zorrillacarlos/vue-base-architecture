
import type { UserType } from "../../core/user.type";
import type { UserEmail } from "../../core/value-obects/user.email";

export class UserViewModel {
  private constructor(
    public readonly name: string,
    public readonly surname: string,
    public readonly email: UserEmail
  ){}

  static createUserViewMode({ name, surname, email } : UserType) {
    return new UserViewModel(name, surname, email);
  }

  get completeName(): string {
    return `${this.name} ${this.surname}`
  }

  get completeEmail(): UserEmail {
    return this.email
  }
}
