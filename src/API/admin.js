import { request } from "./client";

// GET /admin/stats
export function getDashboardStats() {
  return request("/admin/stats", { auth: true });
}

// GET /admin/users
export function getAllUsers() {
  return request("/admin/users", { auth: true });
}

// DELETE /admin/users/:id
export function deleteUser(userId) {
  return request(`/admin/users/${userId}`, { method: "DELETE", auth: true });
}

// GET /admin/orders
export function getAllOrders() {
  return request("/admin/orders", { auth: true });
}

// PUT /admin/orders/:id/status
// status must be one of: "pending" | "paid" | "shipped" | "cancelled"
export function updateOrderStatus(orderId, status) {
  return request(`/admin/orders/${orderId}/status`, {
    method: "PUT",
    body: { status },
    auth: true,
  });
}

// GET /admin/products
export function getAllProductsAdmin() {
  return request("/admin/products", { auth: true });
}

// POST /admin/products
// Expects: { slug, name, categorySlug, subCategorySlug, price, brand?, type?, tagline?, image?, isNewArrival?, attributes? }
export function createProduct(productData) {
  return request("/admin/products", { method: "POST", body: productData, auth: true });
}

// PUT /admin/products/:id
export function updateProduct(productId, productData) {
  return request(`/admin/products/${productId}`, { method: "PUT", body: productData, auth: true });
}

// DELETE /admin/products/:id
export function deleteProduct(productId) {
  return request(`/admin/products/${productId}`, { method: "DELETE", auth: true });
}