export class UserEmailIsNotValid extends Error {
  constructor(email: string) {
    super(`${email} is not a valid email`)
    this.name = 'ValidationEmailError'
  }
}