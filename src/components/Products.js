
import React from 'react';

const Products = () => {
  return (
    <div className="container">
      <h1 className="my-4">Our Products</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="path-to-image.jpg" className="card-img-top" alt="Product 1" />
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
              <p className="card-text">Description of product 1.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="path-to-image.jpg" className="card-img-top" alt="Product 2" />
            <div className="card-body">
              <h5 className="card-title">Product 2</h5>
              <p className="card-text">Description of product 2.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="path-to-image.jpg" className="card-img-top" alt="Product 3" />
            <div className="card-body">
              <h5 className="card-title">Product 3</h5>
              <p className="card-text">Description of product 3.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
