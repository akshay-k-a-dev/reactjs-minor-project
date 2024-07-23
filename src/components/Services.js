
import React from 'react';

const Services = () => {
  return (
    <div className="container">
      <h1 className="my-4">Our Services</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Service 1</h5>
              <p className="card-text">Description of service 1.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Service 2</h5>
              <p className="card-text">Description of service 2.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Service 3</h5>
              <p className="card-text">Description of service 3.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
