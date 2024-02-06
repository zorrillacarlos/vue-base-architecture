export class UserNameIsTooShort extends Error {
  constructor(public readonly value: string) {
    super(`The user name ${value} is too short`)
  }
}