export interface Login {
  token: string;
  refreshToken: string;
  user: User;
}

export interface ErrorObject {
  error: Error;
}

export interface User {
  email: string;
  firstName: string;
  lastName: string;
}

export interface Error {
  error: string;
}
