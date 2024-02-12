import { StringValueObject } from "@/modules/shared/value-objects/StringValueObject";
import { UserEmailIsNotValid } from "../exceptions/UserEmailIsNotValid";

export class UserPassword extends StringValueObject {
  private readonly passwordRegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

  constructor(value: string){
    super(value)
    this.ensureCorrectFormat(value)
  }

  private ensureCorrectFormat(value: string): void {
    if (!this.passwordRegExp.test(value)) throw new UserEmailIsNotValid(value)
  }
}