import { User } from "../domain/User";

export class UserApiAdapter {
  constructor(
    public readonly id: UniqueId,
    public readonly name: string,
    public readonly surname: string,
    public readonly email: string
  ){}

  createDomain(): User {
    return User.create({
      id: this.id,
      name: this.name,
      surname: this.surname,
      email: this.email
    })
  }
}