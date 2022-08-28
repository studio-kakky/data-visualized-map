import { BaseError } from './BaseError';

export class HttpError extends BaseError {
  constructor(
    public readonly statusCode: number,
    public readonly body: ReadableStream<Uint8Array> | null,
    message?: string,
  ) {
    super(message);
  }
}
