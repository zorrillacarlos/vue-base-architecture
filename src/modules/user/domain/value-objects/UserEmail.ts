import { StringValueObject } from "@/modules/shared/value-objects/StringValueObject";
import { UserEmailIsNotValid } from "../exceptions/UserEmailIsNotValid";

export class UserEmail extends StringValueObject{
  private readonly emailRegExp =
		/^(?=.*[@](?:gmail\.com|hotmail\.com)$)[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[a-zA-Z0-9_-]*$/;

  constructor( readonly value: string ) {
    super(value)
    this.ensureValidEmail(value);
  }

  private ensureValidEmail(value: string): void {
    if (!this.emailRegExp.test(value)) throw new UserEmailIsNotValid(value)
  }
}