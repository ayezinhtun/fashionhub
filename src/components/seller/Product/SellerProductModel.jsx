import React from 'react';

const SellerProductModel = () => {
  return (
    <div
      className="modal fade"
      id="SellerProductModal"
      tabIndex="-1"
      aria-labelledby="SellerProductModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="SellerProductModalLabel">Add Product</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Product Name</label>
                <input type="text" className="form-control" name="company" />
              </div>
               <div className="mb-3">
                <label className="form-label">Category Name</label>
                <input type="text" className="form-control" name="company" />
              </div>
               <div className="mb-3">
                <label className="form-label">Price</label>
                <input type="text" className="form-control" name="company" />
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProductModel;
