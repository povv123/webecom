import { request } from "./client";

export function getWishlist() {
  return request("/wishlist", { auth: true });
}

export function addWishlistItem(productId) {
  return request(`/wishlist/${productId}`, { method: "POST", auth: true });
}

export function removeWishlistItem(productId) {
  return request(`/wishlist/${productId}`, { method: "DELETE", auth: true });
}
