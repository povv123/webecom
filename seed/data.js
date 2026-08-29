const categories = [
  {
    slug: "electronics",
    name: { en: "Electronics", kh: "អេឡិចត្រូនិក" },
    order: 1,
    subcategories: [
      { slug: "mobile", name: { en: "Mobile Phones", kh: "ទូរស័ព្ទដៃ" } },
      { slug: "laptop", name: { en: "Laptops", kh: "កុំព្យូទ័រយួរដៃ" } },
      { slug: "accessory", name: { en: "Accessories", kh: "គ្រឿងបន្លាស់" } },
    ],
  },
  {
    slug: "furniture",
    name: { en: "Furniture", kh: "គ្រឿងសង្ហារិម" },
    order: 2,
    subcategories: [
      { slug: "furniture", name: { en: "Office Furniture", kh: "គ្រឿងសង្ហារិមការិយាល័យ" } },
      { slug: "home-furniture", name: { en: "Home Furniture", kh: "គ្រឿងសង្ហារិមគេហដ្ឋាន" } },
      { slug: "furnishing-accessory", name: { en: "Accessories", kh: "គ្រឿងបន្លាស់" } },
    ],
  },
  {
    slug: "industrial",
    name: { en: "Industrial", kh: "ឧស្សាហកម្ម" },
    order: 3,
    subcategories: [
      { slug: "precision-tool", name: { en: "Tools", kh: "ឧបករណ៍" } },
      { slug: "machinery", name: { en: "Machinery", kh: "គ្រឿងម៉ាស៊ីន" } },
    ],
  },
];

const CATEGORY_BY_SUBCATEGORY = {
  mobile: "electronics",
  laptop: "electronics",
  accessory: "electronics",
  furniture: "furniture",
  "home-furniture": "furniture",
  "furnishing-accessory": "furniture",
  "precision-tool": "industrial",
  machinery: "industrial",
};

function toProduct(raw) {
  const { id, subCategory, isNew, origin, series, colors, dimensions, specs, ...rest } = raw;

  const attributes = {};
  if (origin !== undefined) attributes.origin = origin;
  if (series !== undefined) attributes.series = series;
  if (colors !== undefined) attributes.colors = colors;
  if (dimensions !== undefined) attributes.dimensions = dimensions;
  if (specs !== undefined) attributes.specs = specs;

  return {
    ...rest,
    slug: String(id),
    categorySlug: CATEGORY_BY_SUBCATEGORY[subCategory],
    subCategorySlug: subCategory,
    isNewArrival: Boolean(isNew),
    attributes,
  };
}

// Product photos below live in public/images/products (served statically by
// the CRA frontend) rather than as webpack-bundled imports, since this file
// runs under Node during seeding and can't resolve build-time asset paths.
const laptops = [
  { id: "macbook-air-m3", name: "MacBook Air 13”", brand: "Apple", subCategory: "laptop", origin: "USA", price: 1099, tagline: "Strikingly thin. Fast M3 chip.", image: "/images/products/macbook-air-m3.jpg", isNew: true },
  { id: "dell-xps-13", name: "Dell XPS 13", brand: "Dell", subCategory: "laptop", origin: "USA", price: 999, tagline: "Iconic design. InfinityEdge display.", image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9340/media-gallery/silver/laptop-xps-13-9340-t-sl-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2077&qlt=100,1&resMode=sharp2&size=3491,2077&chrss=full", isNew: true },
  { id: "hp-spectre-x360", name: "HP Spectre x360", brand: "HP", subCategory: "laptop", origin: "USA", price: 1399, tagline: "Crafted to be exceptional.", image: "https://images.hp.com/is/image/HPNextGen/spectre-x360-14-fa0000-cto-1?wid=600", isNew: false },
  { id: "lenovo-yoga-9i", name: "Yoga 9i Gen 8", brand: "Lenovo", subCategory: "laptop", origin: "China", price: 1249, tagline: "Pure style. Pure power.", image: "https://p1-ofp.static.pub/medias/bWFya2V0aW5nL2Jsb2IvaW1hZ2UvY29tcHV0ZXJzL2xhcHRvcHMveW9nYS85aS1nZW4tOC0xNC1pbmNoLzEucG5n/lenovo-yoga-9i-gen-8-14-inch.png", isNew: false },
  { id: "surface-laptop-5", name: "Surface Laptop 5", brand: "Microsoft", subCategory: "laptop", origin: "USA", price: 899, tagline: "Blazing speed. Sophisticated style.", image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageMedia/RE57GZl?ver=80ef", isNew: false },
  { id: "razer-blade-16", name: "Razer Blade 16", brand: "Razer", subCategory: "laptop", origin: "Singapore", price: 2999, tagline: "More power. More pixels.", image: "https://assets2.razerzone.com/images/pnx.assets/0a0280425e4c84964648757041775e7a/razer-blade-16-2024-laptop-500x500.png", isNew: true },
  { id: "asus-zenbook-14", name: "Zenbook 14 OLED", brand: "ASUS", subCategory: "laptop", origin: "Taiwan", price: 799, tagline: "New Zen. Thinner. Lighter.", image: "https://dlcdnwebimgs.asus.com/gain/3D7A47B2-C4B2-4E5C-B23B-92D9F9162D1C", isNew: true },
  { id: "acer-swift-x", name: "Acer Swift X 14", brand: "Acer", subCategory: "laptop", origin: "Taiwan", price: 1049, tagline: "Empower your creativity.", image: "/images/products/acer-swift-x.jpg", isNew: false },
  { id: "alienware-m18", name: "Alienware m18", brand: "Dell", subCategory: "laptop", origin: "USA", price: 2199, tagline: "Ultimate desktop-class performance.", image: "/images/products/alienware-m18.jpg", isNew: true },
  { id: "msi-stealth-16", name: "MSI Stealth 16", brand: "MSI", subCategory: "laptop", origin: "Taiwan", price: 1899, tagline: "Sharp, slim, and stylish.", image: "/images/products/msi-stealth-16.jpg", isNew: false },
  { id: "samsung-galaxy-book4", name: "Galaxy Book4 Pro", brand: "Samsung", subCategory: "laptop", origin: "Korea", price: 1449, tagline: "The PC your world has been waiting for.", image: "/images/products/samsung-galaxy-book4.jpg", isNew: true },
  { id: "lg-gram-17", name: "LG gram 17", brand: "LG", subCategory: "laptop", origin: "Korea", price: 1599, tagline: "Ultra-lightweight, powerhouse.", image: "/images/products/lg-gram-17.jpg", isNew: false },
];

const mobiles = [
  { id: "m1", name: "iPhone 15 Pro", brand: "Apple", subCategory: "mobile", series: "Pro Series", price: 999, tagline: "Titanium. So strong. So light. So Pro.", image: "/images/products/iphone-15-pro.jpg", isNew: true },
  { id: "m2", name: "iPhone 19 Pro max ultra", brand: "Apple", subCategory: "mobile", series: "Pro Series", price: 2779, tagline: "Titanium. So strong. So light. So Pro.", image: "/images/products/iphone-pro-max-ultra.jpg", isNew: true },
  { id: "m3", name: "Galaxy S24 Ultra", brand: "Samsung", subCategory: "mobile", series: "S Series", price: 1299, tagline: "Galaxy AI is here.", image: "/images/products/galaxy-s24-ultra.jpg", isNew: true },
];

const accessories = [
  { id: 1, name: "iPhone 15 Pro Silicone Case", subCategory: "accessory", type: "Cases & Protection", brand: "Apple", price: 49, tagline: "Silky, soft-touch finish in eight colors.", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT1A3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1692823611029", isNew: true, colors: ["blue", "black", "pink"] },
  { id: 2, name: "20W USB-C Power Adapter", subCategory: "accessory", type: "Power & Cables", brand: "Apple", price: 19, tagline: "Fast, efficient charging at home or on the go.", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXH3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1661269793559", isNew: false },
  { id: 3, name: "AirPods Pro (2nd Gen)", subCategory: "accessory", type: "Audio", brand: "Apple", price: 249, tagline: "Magic remastered with Active Noise Cancellation.", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871985", isNew: true },
  { id: 4, name: "Logitech MX Master 3S", subCategory: "accessory", type: "Mice & Keyboards", brand: "Logitech", price: 99, tagline: "An icon remastered for ultimate precision.", image: "https://resource.logitech.com/w_600,c_limit,q_auto,f_auto,dpr_2.0/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-top-view-graphite.png", isNew: false },
  { id: 5, name: "MagSafe Battery Pack", subCategory: "accessory", type: "Power & Cables", brand: "Apple", price: 99, tagline: "Snap on for a quick power boost.", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJWY3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1625613218000", isNew: false },
  { id: 6, name: "Beats Studio Pro", subCategory: "accessory", type: "Audio", brand: "Beats", price: 349, tagline: "Fully immersive listening experience.", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTQ03?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687548003608", isNew: true },
];

const furnitureItems = [
  { id: "aeron-chair", name: "Aeron Ergonomic Chair", subCategory: "furniture", type: "Chairs", price: 1400, tagline: "The gold standard in office seating.", image: "/images/aeron.jpg", isNew: false },
  { id: "standing-desk-01", name: "Electric Standing Desk", subCategory: "furniture", type: "Desks", price: 550, tagline: "Switch from sitting to standing in seconds.", image: "/images/desk.jpg", isNew: true },
];

const homeFurniture = [
  { id: "h-1", name: "Cloud Sectional Sofa", brand: "LuxeHome", subCategory: "home-furniture", type: "Living Room", price: 2499, tagline: "Ultra-soft linen. Modular design.", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop", isNew: true, dimensions: "120\"W x 40\"D" },
  { id: "h-2", name: "Velvet Tufted Bed", brand: "SleepCo", subCategory: "home-furniture", type: "Bedroom", price: 220, tagline: "Performance velvet with a gold-finished frame.", image: "https://images.unsplash.com/photo-1505693419148-ad3b17446127?q=80&w=1000&auto=format&fit=crop", isNew: false, dimensions: "Queen / King" },
  { id: "h-3", name: "Marble Dining Table", brand: "CuisineArt", subCategory: "home-furniture", type: "Dining", price: 850, tagline: "Genuine Carrara marble with oak legs.", image: "https://images.unsplash.com/photo-1577145946459-1ad4229a49c6?q=80&w=1000&auto=format&fit=crop", isNew: true, dimensions: "72\" Diameter" },
  { id: "h-4", name: "Oak Sideboard", brand: "NordicStore", subCategory: "home-furniture", type: "Storage", price: 650, tagline: "Minimalist storage for the modern home.", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000&auto=format&fit=crop", isNew: false, dimensions: "60\"W x 18\"D x 30\"H" },
  { id: "h-5", name: "Abstract Ceramic Vase", brand: "Decor+", subCategory: "home-furniture", type: "Decor", price: 45, tagline: "Hand-painted matte finish.", image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=1000&auto=format&fit=crop", isNew: true, dimensions: "12\" Height" },
  { id: "h-6", name: "Mid-Century Armchair", brand: "RetroFit", subCategory: "home-furniture", type: "Living Room", price: 499, tagline: "Classic walnut wood and leather.", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000&auto=format&fit=crop", isNew: false, dimensions: "30\"W x 32\"D" },
];

const furnitureAccessories = [
  { id: "acc-1", name: "Ceramic Table Lamp", brand: "GlowHome", subCategory: "furnishing-accessory", type: "Lighting", price: 89.0, tagline: "Hand-thrown base with linen shade.", image: "https://example.com/lamp.jpg", isNew: true },
  { id: "acc-2", name: "Linen Throw Pillow", brand: "SoftTextiles", subCategory: "furnishing-accessory", type: "Textiles", price: 45.0, tagline: "Sustainable flax linen in Sage.", image: "https://example.com/pillow.jpg", isNew: false },
];

const machineryProducts = [
  { id: "heavy-01", name: "Hydraulic Excavator X-5", brand: "Caterpillar", subCategory: "machinery", type: "Excavators", price: 145000, tagline: "Engineered for maximum breakout force.", image: "https://example.com/excavator.png", isNew: true },
  { id: "heavy-02", name: "7-Series Electric Forklift", brand: "Toyota", subCategory: "machinery", type: "Forklifts", price: 32500, tagline: "Zero-emission lifting for high-volume warehouses.", image: "https://example.com/forklift.png", isNew: false },
  { id: "heavy-03", name: "All-Terrain Wheel Loader", brand: "Komatsu", subCategory: "machinery", type: "Wheel Loaders", price: 98000, tagline: "Superior stability and bucket capacity.", image: "https://example.com/loader.png", isNew: true },
  { id: "elec-01", name: "Commercial Deep Freezer XL", brand: "Samsung", subCategory: "machinery", type: "Electronic Machines", price: 2100, tagline: "Ultra-low temperature storage for bulk preservation.", image: "https://example.com/freezer.png", isNew: true },
  { id: "elec-02", name: "Industrial Split AC 5-Ton", brand: "Daikin", subCategory: "machinery", type: "Electronic Machines", price: 3400, tagline: "Rapid cooling for large warehouse and factory floors.", image: "https://example.com/ac.png", isNew: false },
  { id: "elec-03", name: "High-Velocity Drum Fan", brand: "Lasko", subCategory: "machinery", type: "Electronic Machines", price: 450, tagline: "Heavy-duty air circulation for demanding environments.", image: "https://example.com/fan.png", isNew: false },
  { id: "elec-04", name: "ProHEPA Industrial Air Purifier", brand: "Dyson", subCategory: "machinery", type: "Electronic Machines", price: 1250, tagline: "Advanced filtration for dust and chemical particulate removal.", image: "https://example.com/purifier.png", isNew: true },
  { id: "elec-05", name: "Commercial Front-Load Washer", brand: "LG", subCategory: "machinery", type: "Electronic Machines", price: 2800, tagline: "High-capacity, continuous-cycle washing for hospitality.", image: "https://example.com/washing-machine.png", isNew: false },
];

const machineTools = [
  { id: "tool-lathe-01", name: "Precision Bench Lathe", brand: "IronForge", subCategory: "precision-tool", type: "Lathes", price: 4500, tagline: "High-torque spindle. 0.001mm precision.", image: "/assets/images/industrial/lathe-bench.png", isNew: true, specs: "12-speed, 550W Motor" },
  { id: "tool-cnc-01", name: "Desktop CNC Router", brand: "Titan", subCategory: "precision-tool", type: "CNC Routers", price: 3200, tagline: "Carve wood, acrylic, and soft metals.", image: "/assets/images/industrial/cnc-router.png", isNew: false, specs: "Work area: 300x180x45mm" },
];

const products = [
  ...laptops,
  ...mobiles,
  ...accessories,
  ...furnitureItems,
  ...homeFurniture,
  ...furnitureAccessories,
  ...machineryProducts,
  ...machineTools,
].map(toProduct);

module.exports = { categories, products };
