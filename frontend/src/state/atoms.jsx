import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  default: {
    token: localStorage.getItem("token") || null,
    isAuthenticated: !!localStorage.getItem("token"),
  },
});

export const themeState = atom({
  key: "themeState",
  default: localStorage.getItem("theme") || "light",
});
