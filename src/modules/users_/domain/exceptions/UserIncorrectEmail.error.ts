// create a user invalid email excepcion
// example:
export class UserIncorrectEmail extends Error {
  constructor(readonly value: string) {
    super()
    this.name = 'Invalid email'
    this.message = `${value} is not a correct email`;
  }
}