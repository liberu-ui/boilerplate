import { SignInRequestPayload, SignUpRequestPayload } from "~/types/app";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuth: false,
    intendedRoute: null,
    intendedPath: null,
  }),
  actions: {
    async login(loginRequestPayload: SignInRequestPayload) {
      // TO DO add api integration for handling login
      // localStorage.setItem("isAuth", true);
    },

    async register(signUpRequestPayload: SignUpRequestPayload) {
      // TO DO add api integration for handling registration
      // localStorage.setItem("isAuth", true);
    },

    logout() {
      this.isAuth = false;
      // localStorage.setItem("isAuth", false);
      // localStorage.removeItem("authorization");
    },

    setIntendedRoute(value: string) {
      // state.intendedRoute = value;
    },

    setIntendedPath(value: string) {
      /// state.intendedPath = value;
    },
  },
});
