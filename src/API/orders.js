import { request } from "./client";

export function listOrders() {
  return request("/orders", { auth: true });
}

export function getOrder(id) {
  return request(`/orders/${id}`, { auth: true });
}

// items:   [{ productId, quantity }]  (omit to check out the server cart)
// details: { customer, deliveryMethod, shippingAddress, provincialDetails,
//            paymentMethod, financeDetails, note }
// The backend Order model does not store `details` yet - it is sent now so
// the admin screens are ready as soon as those fields are added server-side.
export function placeOrder(items, details = {}) {
  return request("/orders", {
    method: "POST",
    body: items ? { items, ...details } : details,
    auth: true,
  });
}