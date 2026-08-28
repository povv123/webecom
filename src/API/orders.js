import { request } from "./client";

export function listOrders() {
  return request("/orders", { auth: true });
}

export function getOrder(id) {
  return request(`/orders/${id}`, { auth: true });
}

export function placeOrder(items) {
  return request("/orders", {
    method: "POST",
    body: items ? { items } : undefined,
    auth: true,
  });
}
