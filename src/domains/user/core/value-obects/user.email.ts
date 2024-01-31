export class UserEmail {
  private readonly validEmailRegExp =
		/^(?=.*[@](?:gmail\.com|hotmail\.com)$)[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[a-zA-Z0-9_-]*$/;

    constructor(readonly value: string) {  
      this.checkEmailIsValid(value);
    }

    private checkEmailIsValid(value: string): void {
      if (!this.validEmailRegExp.test(value)) {
        throw new InvalidArgumentError(`<${value}> is not a valid email`);
      }
    }
}