import { request } from "./client";

// Maps a product's subCategorySlug back to the key it lived under in the old
// src/data/allProductsData.jsx, so pages written against that shape keep working.
const LEGACY_SUBCATEGORY_KEY = {
  mobile: "mobile",
  laptop: "laptops",
  accessory: "electronics",
  furniture: "office",
  "home-furniture": "home",
  "furnishing-accessory": "furnitureacc",
  "precision-tool": "tools",
  machinery: "machinery",
};

export function normalizeProduct(doc) {
  if (!doc) return doc;
  const { slug, subCategorySlug, categorySlug, isNewArrival, attributes, __v, ...rest } = doc;
  return {
    ...rest,
    ...attributes,
    id: slug,
    subCategory: subCategorySlug,
    isNew: isNewArrival,
  };
}

export async function listProducts(filters = {}) {
  const query = new URLSearchParams(
    Object.fromEntries(Object.entries(filters).filter(([, v]) => v !== undefined && v !== null))
  ).toString();
  const docs = await request(`/products${query ? `?${query}` : ""}`);
  return docs.map(normalizeProduct);
}

export async function getProductBySlug(slug) {
  const doc = await request(`/products/${slug}`);
  return normalizeProduct(doc);
}

export function getProductsBySubCategory(subCategorySlug) {
  return listProducts({ subCategory: subCategorySlug });
}

export function getProductsByCategory(categorySlug) {
  return listProducts({ category: categorySlug });
}

export async function getAllProductsGrouped() {
  const docs = await listProducts();
  return docs.reduce((grouped, product) => {
    const key = LEGACY_SUBCATEGORY_KEY[product.subCategory] || product.subCategory;
    (grouped[key] ||= []).push(product);
    return grouped;
  }, {});
}
