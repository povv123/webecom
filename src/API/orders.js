import { request } from "./client";

export function listOrders() {
  return request("/orders", { auth: true });
}

export function getOrder(id) {
  return request(`/orders/${id}`, { auth: true });
}

export function placeOrder() {
  return request("/orders", { method: "POST", auth: true });
}
