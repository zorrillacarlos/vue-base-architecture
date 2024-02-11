import type { User } from "../domain/User";

export class UserView {
  private constructor(
    public readonly name: string,
    public readonly surname: string,
    public readonly email: string,
    public readonly createAt: string
  ){}

  static createViewFromDomain(user: User) {
    const { name, surname, email, createAt } = user.properties
    return new UserView (name, surname, email, createAt.toLocaleDateString());
  }

  get fullName() {
    return {
      fullName: `${this.name} ${this.surname}`
    }
  }
}