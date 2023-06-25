interface AuthTypes {
  username: string;
  password: string;
}

interface AuthResponse {
  auth: boolean;
  errorDetails?: string;
}

const authInitialValues: AuthTypes = {
  username: "",
  password: "",
};

export { authInitialValues };
export type { AuthResponse };
export default AuthTypes;
