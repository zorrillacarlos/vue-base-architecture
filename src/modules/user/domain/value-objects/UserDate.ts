import { DateValueObject } from "@/modules/shared/value-objects/DateValueObject";
import { UserDateIncorrectFormat } from "../exceptions/UserDateIsNotValid";

export class UserDate extends DateValueObject{
  private readonly dateRegExp = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

  constructor( readonly value: Date ) {
    super(value)
    this.ensureValidDate(value);
  }

  private ensureValidDate(value: Date): void {
    const dateTransformToString = value.toDateString()
    if (!this.dateRegExp.test(dateTransformToString)) throw new UserDateIncorrectFormat(dateTransformToString)
  }
}