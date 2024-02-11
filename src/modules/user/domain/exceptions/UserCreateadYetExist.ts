export class UserCreatedYetExist extends Error {
  constructor(
    public readonly value: string,
  ) {
    super();
    this.name = 'ValidationExistingUserError'
    this.message = `${value} is an existing user`
  }
}