import { request, assetUrl } from "./client";


export function normalizeProduct(p) {
  if (!p) return null;
  const attrs = p.attributes || {};
  return {
    ...attrs,
    ...p,
    id: p.slug, // stable, URL-friendly id used by routes and bag/saves
    subCategory: p.subCategorySlug,
    category: p.categorySlug,
    isNew: !!p.isNewArrival,
    image: assetUrl(p.image),
  };
}

// GET /products  -> plain array of normalised products
let cache = null;
let cacheTime = 0;
const CACHE_MS = 30 * 1000;

export async function listProducts({ force = false } = {}) {
  if (!force && cache && Date.now() - cacheTime < CACHE_MS) return cache;
  const res = await request("/products", { auth: false });
  const list = Array.isArray(res) ? res : res?.data || [];
  cache = list.map(normalizeProduct);
  cacheTime = Date.now();
  return cache;
}

export function clearProductCache() {
  cache = null;
}

export async function getProductsBySubCategory(subCategorySlug) {
  const products = await listProducts();
  return products.filter((p) => p.subCategory === subCategorySlug);
}

export async function getProductBySlug(slug) {
  const products = await listProducts();
  return products.find((p) => p.slug === slug) || null;
}

export async function getProductsByIds(ids) {
  const set = new Set(ids.map(String));
  const products = await listProducts();
  return products.filter((p) => set.has(String(p._id)));
}

// Grouped by the buy-route keys used by /buy/:categoryId
export const BUY_ROUTE_BY_SUBCATEGORY = {
  mobile: "mobile",
  laptop: "laptops",
  accessory: "electronics",
  "furnishing-accessory": "furnitureacc",
  furniture: "office",
  "home-furniture": "home",
  machinery: "machinery",
  "precision-tool": "tools",
};

export function getBuyRoute(subCategory) {
  return BUY_ROUTE_BY_SUBCATEGORY[subCategory] || subCategory;
}

export async function getAllProductsGrouped() {
  const products = await listProducts();
  return products.reduce((groups, product) => {
    const key = getBuyRoute(product.subCategory) || "uncategorized";
    (groups[key] = groups[key] || []).push(product);
    return groups;
  }, {});
}

// POST /products (multipart/form-data with an image file) - admin only
export async function createProduct(formData) {
  const res = await request("/products", { method: "POST", body: formData, auth: true });
  clearProductCache();
  return res;
}