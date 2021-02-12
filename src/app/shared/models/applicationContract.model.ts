export class FailureResponse implements ApplicationContract<any> {
  isSuccessful = false;
  payload = null;
  statusMessage: string;

  constructor(statusMessage: string) {
    this.statusMessage = statusMessage ? statusMessage : "internalServerError";
  }
}

export interface ApplicationContract<T> {
  isSuccessful: boolean;
  payload: T;
  statusMessage: string;
}
