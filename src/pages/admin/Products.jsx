import React, { useState } from "react";
import "../../styles/Admin/Products.css";

const CATEGORY_MAP = {
  "Men's Fashion": ['T-Shirts & Shirts', 'Pants & Jeans', 'Jackets & Coats', 'Shoes', 'Accessories'],
  'Electronics': ['Mobile phones', 'Laptops', 'Accessories'],
  'Furniture': ['Office Furniture', 'Home Furniture', 'Accessories'],
  'Industrial Equipment': ['Tools', 'Machinery']
};

export default function CreateProduct() {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
    subcategory: '',
    description: '',
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'category' ? { subcategory: '' } : {})
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    e.target.value = '';
  };

  const handleRemoveImage = () => {
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }
    setImageFile(null);
    setImagePreview(null);
  };

  const handlePublish = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAlert({ type: '', text: '' });

    try {
      const payload = new FormData();
      payload.append('title', formData.title);
      payload.append('price', formData.price);
      payload.append('category', formData.category);
      payload.append('subcategory', formData.subcategory);
      payload.append('description', formData.description);

      if (imageFile) {
        payload.append('image', imageFile);
      }

      const response = await fetch('http://localhost:8000/api/products', {
        method: 'POST',
        body: payload,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to save product to database');
      }

      setAlert({ type: 'success', text: 'Product successfully added to database!' });

      // Reset state on successful submission
      setFormData({
        title: '',
        price: '',
        category: '',
        subcategory: '',
        description: '',
      });
      handleRemoveImage();
    } catch (error) {
      console.error('Error adding product:', error);
      setAlert({ type: 'error', text: error.message || 'Something went wrong.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="produadmin">
      
      {/* Left Panel: Admin Form */}
      <aside className="form-sidebar">
        <div className="sidebar-header">
          <h2>Add New Product</h2>
        </div>

        {alert.text && (
          <div style={{
            padding: '10px 14px',
            marginBottom: '15px',
            borderRadius: '6px',
            fontSize: '14px',
            backgroundColor: alert.type === 'success' ? '#d4edda' : '#f8d7da',
            color: alert.type === 'success' ? '#155724' : '#721c24',
            border: `1px solid ${alert.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
          }}>
            {alert.text}
          </div>
        )}

        <form className="sell-form" onSubmit={handlePublish}>
          
          {/* Photo Upload Area */}
          <div className="form-group photo-upload-group">
            <label>Product Image</label>
            <div className="single-photo-container">
              {imagePreview ? (
                <div className="photo-preview relative-group">
                  <img src={imagePreview} alt="Upload preview" className="uploaded-thumbnail" />
                  <button 
                    type="button" 
                    className="remove-photo-btn" 
                    onClick={handleRemoveImage}
                    title="Remove image"
                  >
                    ×
                  </button>
                </div>
              ) : (
                <label className="add-photo-btn full-width-upload">
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageUpload} 
                    style={{ display: 'none' }} 
                  />
                  <span className="plus-icon">+</span>
                  <span>Upload Photo</span>
                </label>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input 
              type="text" 
              id="title"
              name="title" 
              placeholder=" Products name " 
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price ($)</label>
            <input 
              type="number" 
              step="0.01"
              id="price"
              name="price" 
              placeholder="0.00" 
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select 
              id="category"
              name="category" 
              value={formData.category} 
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a category</option>
              {Object.keys(CATEGORY_MAP).map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {formData.category && (
            <div className="form-group">
              <label htmlFor="subcategory">Subcategory</label>
              <select 
                id="subcategory"
                name="subcategory" 
                value={formData.subcategory} 
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select a subcategory</option>
                {CATEGORY_MAP[formData.category].map(sub => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea 
              id="description"
              name="description" 
              placeholder="Detailed description of the product..." 
              rows="5"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="sidebar-footer">
            <button 
              type="submit" 
              className="btn-publish"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Saving to Database...' : 'Add Product'}
            </button>
          </div>
        </form>
      </aside>

      {/* Right Panel: Live Preview */}
      <main className="preview-main">
        <div className="preview-header">
          <h3>Live Product Preview</h3>
        </div>
        
        <div className="preview-card-container">
          <div className="preview-card">
            <div className="preview-image-area">
              {imagePreview ? (
                <img src={imagePreview} alt="Main Preview" className="main-preview-img" />
              ) : (
                <span className="placeholder-text">Your item's photo will appear here</span>
              )}
            </div>
            
            <div className="preview-details">
              <h2 className="preview-title">
                {formData.title || 'Your item title'}
              </h2>
              <p className="preview-price">
                {formData.price ? `$${parseFloat(formData.price).toFixed(2)}` : '$0.00'}
              </p>
              
              <div className="preview-meta">
                {formData.category && <span>{formData.category}</span>}
                {formData.subcategory && <span> • {formData.subcategory}</span>}
              </div>

              <div className="preview-description">
                {formData.description ? (
                  <p>{formData.description}</p>
                ) : (
                  <p className="placeholder-text">Item description will appear here...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}