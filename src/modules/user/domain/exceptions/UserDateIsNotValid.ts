export class UserDateIncorrectFormat extends Error {
  constructor(
    public readonly value: string,
    public readonly message: string
  ) {
    super();
    this.name = 'ValidationDateError'
    this.message = `${value} ${message}`
  }
}