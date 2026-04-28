import React, { useState } from "react";
import "../../styles/Admin/Products.css"; 

const CATEGORY_MAP = {
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

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'category' ? { subcategory: '' } : {})
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // Grab only the first file
    if (!file) return;

    // Create a local object URL to display the image
    const newImageUrl = URL.createObjectURL(file);
    setImage(newImageUrl);

    // Clear the input value so the same file can be selected again if needed
    e.target.value = '';
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const handlePublish = (e) => {
    e.preventDefault();
    console.log('Publishing product:', formData);
    console.log('Attached Image:', image ? 'Yes' : 'No');
    alert('Product added successfully to ETER!');
  };

  return (
    <div className="produadmin">
      
      {/* Left Panel: Form */}
      <aside className="form-sidebar">
        <div className="sidebar-header">
          <h2>Add New Product</h2>
        </div>

        <form className="sell-form" onSubmit={handlePublish}>
          
          {/* Photo Upload Area - Limited to 1 */}
          <div className="form-group photo-upload-group">
            <label>Product Image</label>
            <div className="single-photo-container">
              
              {image ? (
                // Display uploaded image thumbnail
                <div className="photo-preview relative-group">
                  <img src={image} alt="Upload preview" className="uploaded-thumbnail" />
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
                // Upload Button
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
              placeholder="Product Title" 
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price ($)</label>
            <input 
              type="number" 
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
            <button type="submit" className="btn-publish">Add Product</button>
          </div>
        </form>
      </aside>

      {/* Right Panel: Live Preview */}
      <main className="preview-main">
        <div className="preview-header">
          <h3>Preview Product</h3>
        </div>
        
        <div className="preview-card-container">
          <div className="preview-card">
            <div className="preview-image-area">
              {image ? (
                <img src={image} alt="Main Preview" className="main-preview-img" />
              ) : (
                <span className="placeholder-text">Your item's photo will appear here</span>
              )}
            </div>
            
            <div className="preview-details">
              <h2 className="preview-title">
                {formData.title || 'Your item title'}
              </h2>
              <p className="preview-price">
                {formData.price ? `$${formData.price}` : 'Price'}
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