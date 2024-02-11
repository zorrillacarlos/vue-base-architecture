import type { UserData } from "./types";
import { UserDate } from "./value-objects/UserDate";
import { UserEmail } from "./value-objects/UserEmail";
import { UserName } from "./value-objects/UserName";

export class User {
  private constructor(
    private readonly name: string,
    private readonly surname: string,
    public readonly email: string,
    private readonly createAt: Date,
  ){
  }

  static create({ name, surname, email, createAt }: UserData): User {
    return new User(
      new UserName(name).value,
      new UserName(surname).value,
      new UserEmail(email).value,
      new UserDate(createAt).value
    );
  }

  get properties(): UserData {
    return {
      name: this.name,
      surname: this.surname,
      email: this.email,
      createAt: this.createAt
    }
  }
}