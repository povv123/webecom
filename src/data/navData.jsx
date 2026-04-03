export const navData = [
  {
    title: "Home",
    id: "home",
    path: "/",
    columns: []
  },
  {
    title: "About Us",
    id: "about",
    path: "/about",
    columns: [
      {
        heading: "Our Company",
        links: [
          { name: "Mission & Vision", path: "/about/mission" },
          { name: "Leadership", path: "/about/leadership" },
          { name: "History", path: "/about/history" }
        ]
      }
    ]
  },
  {
    title: "Products",
    id: "products",
    path: "/products",
    columns: [
      {
        heading: "Electronics",
        links: [
          { name: "Mobile Phones", path: "/products/electronics/mobile" },
          { name: "Laptops", path: "/products/electronics/laptops" },
          { name: "Accessories", path: "/products/electronics/accessories" }
        ]
      },
      {
        heading: "Furniture",        links: [
          { name: "Office Furniture", path: "/products/furniture/office" },
          { name: "Home Furniture", path: "/products/furniture/home" },
          { name: "Accessories", path: "/products/furniture/accessories" }
        ]
      },
      {
        heading: "Industrial",
        links: [
          { name: "Tools", path: "/products/industrial/machinetools" },
          { name: "Machinery", path: "/products/industrial/machinery" }
        ]
      }
    ]
  },
  {
    title: "Services",
    id: "services",
    path: "/services",
    columns: [
      {
        heading: "Consulting",
        links: [
          { name: "Business Strategy", path: "/services/consulting/strategy" },
          { name: "IT Consulting", path: "/services/consulting/it" },
          { name: "Financial Analysis", path: "/services/consulting/financial" },
          { name: "Taxes", path: "/services/consulting/taxes" },
          { name: "Logistics Services", path: "/services/consulting/logistics" }
        ]
      },
      {
        heading: "Maintenance",
        links: [
          { name: "Equipment Servicing", path: "/services/maintenance/equipment" },
          { name: "Facility Management", path: "/services/maintenance/facility" },
          { name: "Spare Parts", path: "/services/maintenance/repair" },
          { name: "Internet Provider", path: "/services/maintenance/isp" }
        ]
      },
      {
        heading: "Training",
        links: [
          { name: "Technical Training", path: "/services/training/technical" },
          { name: "Customer Service Training", path: "/services/training/customer-service" }
        ]
      }
    ]
  },
  {
    title: "Solutions",
    id: "solutions",
    path: "/solutions",
    columns: [
      {
        heading: "Industries",
        links: [
          { name: "Healthcare", path: "/solutions/healthcare" },
          { name: "Education", path: "/solutions/education" },
          { name: "Manufacturing", path: "/solutions/manufacturing" }
        ]
      }
    ]
  },
  {
    title: "Resources",
    id: "resources",
    path: "/resources",
    columns: [
      {
        heading: "Knowledge Base",
        links: [
          { name: "Blog", path: "/resources/blog" },
          { name: "Case Studies", path: "/resources/case-studies" },
          { name: "Whitepapers", path: "/resources/whitepapers" },
          { name: "FAQs", path: "/resources/faqs" }
        ]
      }
    ]
  },
  {
    title: "Careers",
    id: "careers",
    path: "/careers",
    columns: [
      {
        heading: "Join Us",
        links: [
          { name: "Job Openings", path: "/careers/openings" },
          { name: "Internships", path: "/careers/internships" }
        ]
      }
    ]
  },
  {
    title: "Contact",
    id: "contact",
    path: "/contact",
    columns: [
      {
        heading: "Connect",
        links: [
          { name: "Request a Quote", path: "/contact/quote" },
          { name: "Inquiry Form", path: "/contact/inquiry" },
          { name: "Support Center", path: "/contact/support" }
        ]
      }
    ]
  },
  // --- UTILITY ITEMS (Accessed via icons in MegaMenu) ---
  {
    title: "Search",
    id: "search",
    path: "/search",
    type: "utility",
    columns: []
  },
  {
    title: "Bag",
    id: "bag",
    path: "/cart",
    type: "utility",
    columns: []
  }
];