import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Admin/Inventory.css';

const CATEGORY_MAP = {
  'Electronics': ['Mobile phones', 'Laptops', 'Accessories'],
  'Furniture': ['Office Furniture', 'Home Furniture', 'Accessories'],
  'Industrial Equipment': ['Tools', 'Machinery']
};

const INITIAL_INVENTORY = [
  {
    id: 'h-1',
    name: "Cloud Sectional Sofa",
    brand: "LuxeHome",
    category: "Furniture",
    subCategory: "Home Furniture", 
    type: "Living Room",
    price: 2499,
    tagline: "Ultra-soft linen. Modular design.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop",
    isNew: true,
    dimensions: '120"W x 40"D',
    stock: 15
  },
  {
    id: 'e-1',
    name: "ETER ProBook 16",
    brand: "ETER",
    category: "Electronics",
    subCategory: "Laptops",
    type: "Workstation",
    price: 1299,
    tagline: "Strikingly thin. Built for developers.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop",
    isNew: true,
    dimensions: '14"W x 9.5"D',
    stock: 42
  },
  {
    id: 'i-1',
    name: "CNC Lathe Pro",
    brand: "Industrial",
    category: "Industrial Equipment",
    subCategory: "Machinery",
    type: "Heavy Machinery",
    price: 8500,
    tagline: "Precision engineering.",
    image: "https://images.unsplash.com/photo-1565439390118-8096ddf133aa?q=80&w=1000&auto=format&fit=crop",
    isNew: false,
    dimensions: '72"W x 36"D',
    stock: 3
  }
];

export default function Inventory() {
  const [inventory, setInventory] = useState(INITIAL_INVENTORY);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // State for holding the product currently being edited
  const [editingProduct, setEditingProduct] = useState(null);

  const categories = useMemo(() => {
    const cats = new Set(inventory.map(item => item.category));
    return ['All', ...Array.from(cats)];
  }, [inventory]);

  const filteredInventory = inventory.filter(item => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleDelete = (id) => {
    if(window.confirm('Remove this item from inventory?')) {
      setInventory(inventory.filter(item => item.id !== id));
    }
  };

  const handleEditClick = (product) => {
    setEditingProduct({ ...product }); 
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    setInventory(inventory.map(item => item.id === editingProduct.id ? editingProduct : item));
    alert('Product updated successfully!');
    setEditingProduct(null); // Return to list view
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct(prev => ({
      ...prev,
      [name]: value,
    

      ...(name === 'category' ? { subCategory: '' } : {})
    }));
  };

  // --- EDIT VIEW ---
  if (editingProduct) {
    return (
      <div className="invoebv edit-mode">
        {/* Left Panel: Edit Form */}
        <aside className="form-sidebar">
          <div className="sidebar-header">
            <h2>Edit Product</h2>
            <p className="subtitle">ID: {editingProduct.id}</p>
          </div>

          <form className="sell-form" onSubmit={handleSaveChanges}>
            
            <div className="form-group photo-upload-group">
              <label>Product Image</label>
              <div className="single-photo-container">
                <div className="photo-preview relative-group">
                  <img src={editingProduct.image} alt="Preview" className="uploaded-thumbnail" />
                </div>
              
              
                <input 
                  type="text" 
                  name="image"
                  placeholder="Image URL" 
                  value={editingProduct.image}
                  onChange={handleEditChange}
                  style={{ marginTop: '12px' }}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Product Name</label>
              <input 
                type="text" 
                name="name" 
                value={editingProduct.name}
                onChange={handleEditChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Brand</label>
              <input 
                type="text" 
                name="brand" 
                value={editingProduct.brand}
                onChange={handleEditChange}
              />
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label>Price ($)</label>
                <input 
                  type="number" 
                  name="price" 
                  value={editingProduct.price}
                  onChange={handleEditChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Stock</label>
                <input 
                  type="number" 
                  name="stock" 
                  value={editingProduct.stock}
                  onChange={handleEditChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Category</label>
              <select 
                name="category" 
                value={editingProduct.category} 
                onChange={handleEditChange}
                required
              >
                <option value="" disabled>Select category</option>
                {Object.keys(CATEGORY_MAP).map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {editingProduct.category && CATEGORY_MAP[editingProduct.category] && (
              <div className="form-group">
                <label>Subcategory</label>
                <select 
                  name="subCategory" 
                  value={editingProduct.subCategory} 
                  onChange={handleEditChange}
                  required
                >
                  <option value="" disabled>Select subcategory</option>
                  {CATEGORY_MAP[editingProduct.category].map(sub => (
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="form-group">
              <label>Tagline / Description</label>
              <textarea 
                name="tagline" 
                rows="3"
                value={editingProduct.tagline}
                onChange={handleEditChange}
              />
            </div>

            <div className="sidebar-footer">
              <button type="button" className="btn-secondary" onClick={handleCancelEdit}>Cancel</button>
              <button type="submit" className="btn-primary">Save Changes</button>
            </div>
          </form>
        </aside>

        {/* Right Panel: Live Preview */}
        <main className="preview-main">
          <div className="preview-header">
            <h3>Live Storefront Preview</h3>
          </div>
          
          <div className="preview-card-container">
            <div className="preview-card">
              <div className="preview-image-area">
                <img src={editingProduct.image} alt="Preview" className="main-preview-img" />
              </div>
              
              <div className="preview-details">
                <h2 className="preview-title">{editingProduct.name}</h2>
                <p className="preview-price">${editingProduct.price}</p>
                
                <div className="preview-meta">
                  <span>{editingProduct.brand} • {editingProduct.category}</span>
                  {editingProduct.subCategory && <span> • {editingProduct.subCategory}</span>}
                </div>

                <div className="preview-description">
                  <p>{editingProduct.tagline}</p>
                  <p className="text-muted" style={{fontSize: '12px', marginTop: '12px'}}>
                    Stock: {editingProduct.stock} | Dimensions: {editingProduct.dimensions}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // --- LIST VIEW ---
  return (
    <div className="invoebv">
      <div className="inventory-container">
        
        <header className="inventory-header">
          <div>
            <h1>Inventory</h1>
            <p className="subtitle">Manage your product.</p>
          </div>
          
          <div className="header-actions">
            <div className="category-select-wrapper">
              <select 
                className="category-dropdown"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="search-wrapper">
              <span className="search-icon">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input 
                type="text" 
                placeholder="Search by name, brand..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Link to="/admin/products" className="btn-primary">+ Add Product</Link>
          </div>
        </header>

        <div className="category-section">
          <h2 className="category-title">
            {selectedCategory === 'All' ? 'All Products' : selectedCategory}
          </h2>
          
          <div className="table-wrapper mini-list">
            <table className="inventory-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>ID</th>
                  <th>Subcategory & Type</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInventory.length > 0 ? (
                  filteredInventory.map(item => (
                    <tr key={item.id}>
                      <td className="col-product">
                        <div className="product-info-cell">
                          <img src={item.image} alt={item.name} className="product-thumbnail-mini" />
                          <div className="product-details">
                            <span className="product-name">
                              {item.name}
                              {item.isNew && <span className="badge-new">New</span>}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="col-id"><span className="id-badge">{item.id}</span></td>
                      <td className="col-category">
                        <span className="sub-cat">{item.subCategory} • {item.type}</span>
                      </td>
                      <td className="col-brand">{item.brand}</td>
                      <td className="col-price">${item.price.toLocaleString()}</td>
                      <td className="col-stock">
                        <span className={`stock-indicator ${item.stock > 10 ? 'in-stock' : 'low-stock'}`}>
                          {item.stock}
                        </span>
                      </td>
                      <td className="col-actions text-right">
                        <button className="action-btn edit-btn" onClick={() => handleEditClick(item)}>Edit</button>
                        <button className="action-btn delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7">
                      <div className="empty-state-container">
                        <p className="empty-state">No products found matching your criteria.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}