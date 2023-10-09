export interface SignInRequestPayload {
  email: string;
  password: string;
  remember: boolean;
}

export interface SignUpRequestPayload {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
