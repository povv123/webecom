import React, { useState, useMemo, useRef } from 'react';
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
  }
];

export default function Inventory() {
  const [inventory, setInventory] = useState(INITIAL_INVENTORY);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [editingProduct, setEditingProduct] = useState(null);
  
  const fileInputRef = useRef(null);

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

  const handleSaveChanges = (e) => {
    e.preventDefault();
    setInventory(inventory.map(item => item.id === editingProduct.id ? editingProduct : item));
    alert('Product updated successfully!');
    setEditingProduct(null);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'category' ? { subCategory: '' } : {})
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newUrl = URL.createObjectURL(file);
      setEditingProduct(prev => ({ ...prev, image: newUrl }));
    }
    e.target.value = ''; 
  };

  const handleRemoveImage = () => {
    setEditingProduct(prev => ({ ...prev, image: '' }));
  };

  // --- EDIT VIEW ---
  if (editingProduct) {
    return (
      <div className="invoebv edit-mode">
        <aside className="form-sidebar">
          <div className="sidebar-header">
            <h2>Edit Product</h2>
            <p className="subtitle">ID: {editingProduct.id}</p>
          </div>

          <form className="sell-form" onSubmit={handleSaveChanges}>
            <div className="form-group photo-upload-group">
              <label>Product Image</label>
              
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageUpload} 
                accept="image/*" 
                style={{ display: 'none' }} 
              />

              <div className="edit-photo-container">
                {editingProduct.image ? (
                  <div className="image-manage-wrapper">
                    <img src={editingProduct.image} alt="Preview" className="edit-main-image" />
                    <div className="image-actions-overlay">
                      <button 
                        type="button" 
                        className="change-img-btn" 
                        onClick={() => fileInputRef.current.click()}
                      >
                        Change Image
                      </button>
                      <button 
                        type="button" 
                        className="remove-img-x" 
                        onClick={handleRemoveImage}
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="upload-placeholder-box" onClick={() => fileInputRef.current.click()}>
                    <span className="plus-icon">+</span>
                    <span>Upload Image</span>
                  </div>
                )}
              </div>
            </div>

            <div className="form-group">
              <label>Product Name</label>
              <input type="text" name="name" value={editingProduct.name} onChange={handleEditChange} required />
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label>Price ($)</label>
                <input type="number" name="price" value={editingProduct.price} onChange={handleEditChange} required />
              </div>
              <div className="form-group">
                <label>Stock</label>
                <input type="number" name="stock" value={editingProduct.stock} onChange={handleEditChange} required />
              </div>
            </div>

            <div className="form-group">
              <label>Category</label>
              <select name="category" value={editingProduct.category} onChange={handleEditChange} required>
                {Object.keys(CATEGORY_MAP).map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>

            <div className="sidebar-footer">
              <button type="button" className="btn-secondary" onClick={() => setEditingProduct(null)}>Cancel</button>
              <button type="submit" className="btn-primary">Save Changes</button>
            </div>
          </form>
        </aside>

        <main className="preview-main">
          <div className="preview-header"><h3>Live Storefront Preview</h3></div>
          <div className="preview-card-container">
            <div className="preview-card">
              <div className="preview-image-area">
                {editingProduct.image ? <img src={editingProduct.image} alt="Preview" className="main-preview-img" /> : <span>No Image</span>}
              </div>
              <div className="preview-details">
                <h2 className="preview-title">{editingProduct.name}</h2>
                <p className="preview-price">${editingProduct.price}</p>
                <p className="preview-description">{editingProduct.tagline}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="invoebv">
      <div className="inventory-container">
        <header className="inventory-header">
          <div>
            <h1>Inventory</h1>
            <p className="subtitle">Manage your products.</p>
          </div>
          
          <div className="header-actions">
            {/* ADDED SEARCH INPUT HERE */}
            <div className="search-wrapper">
              <input 
                type="text" 
                placeholder="Search name, brand, or ID..." 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
                className="inventory-search-input"
              />
              {searchQuery && (
                <button className="clear-search" onClick={() => setSearchQuery('')}>×</button>
              )}
            </div>

            <select 
              className="category-dropdown" 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
            
            <Link to="/admin/products" className="btn-primary">+ Add Product</Link>
          </div>
        </header>

        <div className="table-wrapper">
          {/* ... Table logic remains the same ... */}
          <table className="inventory-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Stock</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInventory.length > 0 ? (
                filteredInventory.map(item => (
                  <tr key={item.id}>
                    <td>
                      <div className="product-info-cell">
                        <img src={item.image} alt="" className="product-thumbnail-mini" />
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td>${item.price}</td>
                    <td>{item.stock}</td>
                    <td className="text-right">
                      <button className="action-btn edit-btn" onClick={() => handleEditClick(item)}>Edit</button>
                      <button className="action-btn delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="no-results">No products found matching "{searchQuery}"</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}