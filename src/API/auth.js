import { request, setToken } from "./client";

export async function register(email, password) {
  const data = await request("/auth/register", { method: "POST", body: { email, password } });
  setToken(data.token);
  return data.user;
}

export async function login(email, password) {
  const data = await request("/auth/login", { method: "POST", body: { email, password } });
  setToken(data.token);
  return data.user;
}

export function logout() {
  setToken(null);
}

export async function fetchCurrentUser() {
  return request("/auth/me", { auth: true });
}
