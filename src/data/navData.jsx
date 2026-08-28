export const navData = [
  {
    title: { en: "Home", kh: "ទំព័រដើម" },
    id: "home",
    path: "/",
    columns: []
  },
  {
    title: { en: "About Us", kh: "អំពីយើង" },
    id: "about",
    path: "/about",
    columns: [
      {
        links: [
          { name: { en: "Explore All Aboutus", kh: "ស្វែងយល់ទាំងអស់អំពីយើង" }, path: "/about" },
          { name: { en: "Mission & Vision", kh: "បេសកកម្ម និងចក្ខុវិស័យ" }, path: "/about/mission" },
          { name: { en: "Leadership", kh: "ថ្នាក់ដឹកនាំ" }, path: "/about/leadership" },
          { name: { en: "History", kh: "ប្រវត្តិសាវតារ" }, path: "/about/history" }
        ]
      }
    ]
  },
  {
    title: { en: "Products", kh: "ផលិតផល" },
    id: "products",
    path: "/products",
    columns: [
      {
        links: [
          { name: { en: "Explore All Products", kh: "ស្វែងរកផលិតផលទាំងអស់" }, path: "/products" },
          { name: { en: "Mobile Phones", kh: "ទូរស័ព្ទដៃ" }, path: "/products/electronics/mobile" },
          { name: { en: "Laptops", kh: "កុំព្យូទ័រយួរដៃ" }, path: "/products/electronics/laptops" },
          { name: { en: "Accessories", kh: "គ្រឿងបន្លាស់" }, path: "/products/electronics/accessories" }
        ]
      },
      {
        heading: { en: "Furniture", kh: "គ្រឿងសង្ហារិម" },
        links: [
          { name: { en: "Office Furniture", kh: "គ្រឿងសង្ហារិមការិយាល័យ" }, path: "/products/furniture/office" },
          { name: { en: "Home Furniture", kh: "គ្រឿងសង្ហារិមគេហដ្ឋាន" }, path: "/products/furniture/home" },
          { name: { en: "Accessories", kh: "គ្រឿងបន្លាស់" }, path: "/products/furniture/accessories" }
        ]
      },
      {
        heading: { en: "Industrial", kh: "ឧស្សាហកម្ម" },
        links: [
          { name: { en: "Tools", kh: "ឧបករណ៍" }, path: "/products/industrial/machinetools" },
          { name: { en: "Machinery", kh: "គ្រឿងម៉ាស៊ីន" }, path: "/products/industrial/machinery" }
        ]
      }
    ]
  },
  {
    title: { en: "Services", kh: "សេវាកម្ម" },
    id: "services",
    path: "/services",
    columns: [
      {
        links: [
          { name: { en: "Explore All Services", kh: "ស្វែងរកសេវាកម្មទាំងអស់" }, path: "/services" },
          { name: { en: "Business Strategy", kh: "យុទ្ធសាស្ត្រអាជីវកម្ម" }, path: "/services/consulting/strategy" },
          { name: { en: "IT Consulting", kh: "ការពិគ្រោះយោបល់ផ្នែកព័ត៌មានវិទ្យា" }, path: "/services/consulting/it" },
          { name: { en: "Financial Analysis", kh: "ការវិភាគហិរញ្ញវត្ថុ" }, path: "/services/consulting/financial" },
          { name: { en: "Taxes", kh: "ពន្ធដារ" }, path: "/services/consulting/taxes" },
          { name: { en: "Logistics Services", kh: "សេវាកម្មភស្តុភារកម្ម" }, path: "/services/consulting/logistics" }
        ]
      },
      {
        heading: { en: "Maintenance", kh: "ការថែទាំ" },
        links: [
          { name: { en: "Equipment Servicing", kh: "សេវាកម្មថែទាំឧបករណ៍" }, path: "/services/maintenance/equipment" },
          { name: { en: "Facility Management", kh: "ការគ្រប់គ្រងទីតាំង" }, path: "/services/maintenance/facility" },
          { name: { en: "Spare Parts", kh: "គ្រឿងបន្លាស់" }, path: "/services/maintenance/repair" },
          { name: { en: "Internet Provider", kh: "អ្នកផ្តល់សេវាអ៊ីនធឺណិត" }, path: "/services/maintenance/isp" }
        ]
      },
      {
        heading: { en: "Training", kh: "ការបណ្តុះបណ្តាល" },
        links: [
          { name: { en: "Technical Training", kh: "ការបណ្តុះបណ្តាលបច្ចេកទេស" }, path: "/services/training/technical" },
          { name: { en: "Customer Service Training", kh: "ការបណ្តុះបណ្តាលផ្នែកសេវាអតិថិជន" }, path: "/services/training/customer-service" }
        ]
      }
    ]
  },
  {
    title: { en: "Solutions", kh: "ដំណោះស្រាយ" },
    id: "solutions",
    path: "/solutions",
    columns: [
      {
        links: [
          { name: { en: "Explore All Solutions", kh: "ស្វែងរកដំណោះស្រាយទាំងអស់" }, path: "/solutions" },
          { name: { en: "Healthcare", kh: "សុខាភិបាល" }, path: "/solutions/healthcare" },
          { name: { en: "Education", kh: "វិស័យអប់រំ" }, path: "/solutions/education" },
          { name: { en: "Manufacturing", kh: "ផលិតកម្ម" }, path: "/solutions/manufacturing" }
        ]
      }
    ]
  },
  {
    title: { en: "Resources", kh: "ធនធាន" },
    id: "resources",
    path: "/resources",
    columns: [
      {
        links: [
          { name: { en: "Explore All Resources", kh: "ស្វែងរកធនធានទាំងអស់" }, path: "/resources" },
          { name: { en: "Blog", kh: "ប្លុក" }, path: "/resources/blog" },
          { name: { en: "Case Studies", kh: "ការសិក្សាស្រាវជ្រាវករណីជាក់ស្តែង" }, path: "/resources/case-studies" },
          { name: { en: "Whitepapers", kh: "របាយការណ៍ផ្លូវការ" }, path: "/resources/whitepapers" },
          { name: { en: "FAQs", kh: "សំណួរដែលសួរញឹកញាប់" }, path: "/resources/faqs" }
        ]
      }
    ]
  },
  {
    title: { en: "Careers", kh: "ឱកាសការងារ" },
    id: "careers",
    path: "/careers",
    columns: [
      {
        links: [
          { name: { en: "Explore All Careers", kh: "ស្វែងរកឱកាសការងារទាំងអស់" }, path: "/careers" },
          { name: { en: "Job Openings", kh: "មុខតំណែងការងារទំនេរ" }, path: "/careers/openings" },
          { name: { en: "Internships", kh: "ការហាត់ការ" }, path: "/careers/internships" }
        ]
      }
    ]
  },
  {
    title: { en: "Contact", kh: "ទំនាក់ទំនង" },
    id: "contact",
    path: "/contact",
    columns: [
      {
        links: [
          { name: { en: "Explore All Contacts", kh: "ស្វែងរកព័ត៌មានទំនាក់ទំនងទាំងអស់" }, path: "/contact" },
          { name: { en: "Request a Quote", kh: "ស្នើសុំការវាយតម្លៃតម្លៃ" }, path: "/contact/quote" },
          { name: { en: "Inquiry Form", kh: "ទម្រង់សាកសួរព័ត៌មាន" }, path: "/contact/inquiry" },
          { name: { en: "Support Center", kh: "មជ្ឈមណ្ឌលគាំទ្រ" }, path: "/contact/support" }
        ]
      }
    ]
  },
  // --- UTILITY ITEMS (Accessed via icons in MegaMenu) ---
  {
    title: { en: "Search", kh: "ស្វែងរក" },
    id: "search",
    path: "/search",
    type: "utility",
    columns: []
  },
  {
    title: { en: "Bag", kh: "កន្ត្រក" },
    id: "bag",
    path: "/cart",
    type: "utility",
    columns: []
  }
];