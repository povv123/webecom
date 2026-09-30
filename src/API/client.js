const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/api";
const TOKEN_KEY = "authToken";

// Origin of the backend (BASE_URL without the trailing /api). Used to turn
// upload paths like "/uploads/prod-123.jpg" into full URLs.
export const API_ORIGIN = BASE_URL.replace(/\/api\/?$/, "");

// Images seeded from public/images work as-is (served by the React app).
// Images uploaded through the admin panel live on the API server.
export function assetUrl(path) {
  if (!path) return "";
  if (/^(https?:|data:)/.test(path)) return path;
  if (path.startsWith("/uploads/")) return `${API_ORIGIN}${path}`;
  return path;
}

export function getToken() {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setToken(token) {
  try {
    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
    } else {
      localStorage.removeItem(TOKEN_KEY);
    }
  } catch {
    // localStorage unavailable (private browsing, etc.) - auth just won't persist
  }
}

export async function request(path, { method = "GET", body, auth = false } = {}) {
  const headers = {};
  const isForm = typeof FormData !== "undefined" && body instanceof FormData;

  // FormData must NOT be JSON-stringified and must not get a manual
  // Content-Type - the browser adds the multipart boundary itself.
  if (body !== undefined && !isForm) headers["Content-Type"] = "application/json";

  if (auth) {
    const token = getToken();
    if (token) headers.Authorization = `Bearer ${token}`;
  }

  let res;
  try {
    res = await fetch(`${BASE_URL}${path}`, {
      method,
      headers,
      body: body === undefined ? undefined : isForm ? body : JSON.stringify(body),
    });
  } catch {
    throw new Error("Cannot reach the server. Please check your connection and try again.");
  }

  if (res.status === 204) return null;

  const isJson = res.headers.get("content-type")?.includes("application/json");
  const data = isJson ? await res.json() : null;

  if (!res.ok) {
    throw new Error(data?.message || `Request failed with status ${res.status}`);
  }

  return data;
}