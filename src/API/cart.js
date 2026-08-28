import { request } from "./client";

export function getCart() {
  return request("/cart", { auth: true });
}

export function addCartItem(productId, quantity = 1) {
  return request("/cart/items", { method: "POST", body: { productId, quantity }, auth: true });
}

export function removeCartItem(productId) {
  return request(`/cart/items/${productId}`, { method: "DELETE", auth: true });
}
