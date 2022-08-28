export class BaseError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = new.target.name;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
