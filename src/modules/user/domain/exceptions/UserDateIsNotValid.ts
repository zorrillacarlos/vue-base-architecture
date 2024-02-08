export class UserDateIncorrectFormat extends Error {
  constructor(public readonly value: string) {
    super(`The ${value} has not correct format`)
  }
}