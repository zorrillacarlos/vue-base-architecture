import { StringValueObject } from "@/modules/shared/value-objects/StringValueObject";
import { MIN_NAME_LENGTH } from "../constants"
import { UserNameIsTooShort } from "../exceptions/UserNameIsTooShort"

export class UserName extends StringValueObject{

  constructor(value: string){
    super(value)
    this.ensureNameLength(value)
  }

  toPrimitive(): string {
    return this.value
  }

  private ensureNameLength(value: string): void {
    if(value.length < MIN_NAME_LENGTH) throw new UserNameIsTooShort(value)
  }
}