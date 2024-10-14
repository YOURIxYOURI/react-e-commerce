import React, { useState } from 'react';

const AddProduct = ({ products, addProduct, removeProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ name, price: parseFloat(price) });
    setName('');
    setPrice('');
  };

  return (
    <div>
      <h2>Admin Panel</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">Product Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="productName" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter product name" 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">Product Price</label>
          <input 
            type="number" 
            className="form-control" 
            id="productPrice" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            placeholder="Enter product price" 
          />
        </div>

        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>

      <h3 className="mt-4">Existing Products</h3>
      <ul className="list-group">
        {products.map(product => (
          <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
            {product.name} - ${product.price}
            <button className="btn btn-danger btn-sm" onClick={() => removeProduct(product.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddProduct;
