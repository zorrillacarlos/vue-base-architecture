import { DateValueObject } from "@/modules/shared/value-objects/DateValueObject";
import { UserDateIncorrectFormat } from "../exceptions/UserDateIsNotValid";

export class UserDate extends DateValueObject{
  private readonly dateRegExp = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

  constructor( readonly value: Date ) {
    super(value)
    this.ensureValueIsDateInstance(value);
    this.ensureValidDate(value);
  }

  private ensureValueIsDateInstance(value: any): void{
    if(isNaN(Date.parse(value))) throw new UserDateIncorrectFormat(value, 'is not a Date instance')
  } 

  private ensureValidDate(value: Date): void {
    const dateTransformToString = value.toLocaleDateString()
    if (!this.dateRegExp.test(dateTransformToString)) throw new UserDateIncorrectFormat(dateTransformToString, 'is not a correct Date Format')
  }
}