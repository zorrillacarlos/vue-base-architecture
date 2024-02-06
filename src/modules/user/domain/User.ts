import type { UserDefinitions } from "./types";
import { UserEmail } from "./value-objects/UserEmail";
import { UserName } from "./value-objects/UserName";

export class User {

  private constructor(
    private readonly id: UniqueId,
    private readonly name: string,
    private readonly surname: string,
    private readonly email: string
  ){
  }

  static create({ id, name, surname, email }: UserDefinitions): User {
    return new User(
      id,
      new UserName(name).value,
      new UserName(surname).value,
      new UserEmail(email).value,
    );
  }
}