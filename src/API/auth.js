import { request, setToken } from "./client";

export async function register(profile) {
  const data = await request("/auth/register", { method: "POST", body: profile });
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

export async function updateProfile(updates) {
  return request("/auth/me", { method: "PATCH", body: updates, auth: true });
}

export async function changePassword(currentPassword, newPassword) {
  return request("/auth/me/password", {
    method: "PATCH",
    body: { currentPassword, newPassword },
    auth: true,
  });
}
