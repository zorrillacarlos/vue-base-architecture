export type Primitives = string | number | boolean | Date;

type Optional<T> = T | undefined | null;

export abstract class ValueObject<T extends Primitives> {
	readonly value: T;

	constructor(value: T) {
		this.value = value;
		this.ensureValueIsDefined(value);
	}

	toString(): string {
		return this.value.toString();
	}

	private ensureValueIsDefined(value: Optional<T>): void {
		if (value === null || value === undefined) console.log('error')
	}
}