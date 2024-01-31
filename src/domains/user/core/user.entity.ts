// create a entity class creator for domain core business logic
// example:
/*import type { UserType } from './user.types'
export class User {
  constructor(
    private readonly id: UniqueId,
    private readonly name: string,
    private readonly surname: string,
    private readonly email: string,
  ) { }

  static createUser(props: UserType) {
    const { id, name, surname, email } = props
    return new User(id, name, surname, email)
  }
 
  get userEntity(): UserType {
    return {
      id: this.id,
      name: this.name,
      surname: this.surname,
      email: this.email
    }
  }
}*/