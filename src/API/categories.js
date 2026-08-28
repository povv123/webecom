import { request } from "./client";

export async function listCategories() {
  return request("/categories");
}

export async function getCategory(slug) {
  return request(`/categories/${slug}`);
}
