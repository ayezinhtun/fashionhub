import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SellerProductModel from './SellerProductModel';
import {
  Calendar,
  Download,
  Filter,
  Plus,
  Search
} from 'lucide-react';

const cards = [
    {
        id: 1, 
        title: 'Total Products',
        value: '100',
    },
];

const Category = () => {

  const productData = [
    {
      id: 1,
      product: 'T-Shirt',
      category: 'Organic Cotton T-Shirt',
      price: '10000'
    },
  ];

 

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center my-4">
        <div className="">
                <h3>Products</h3>
                 <p style={{ color: '#964F54' }}>Manage your product lists, add new items!</p>
        </div>
        
        <div className="d-flex gap-2">
          <button className="btn d-flex align-items-center text-white"
           style={{ backgroundColor: '#E3262E' }}
           data-bs-toggle="modal"
          data-bs-target="#SellerProductModal"
           >
            <Plus size={16} className="me-1" />
            Add Product
          </button>
          <SellerProductModel/>
        </div>
      </div>

       <div className="row mt-4">
                {cards.map((card, index) => {
                    return(
                        <div key={index} className="col-lg-6 mb-4">
                   <motion.div
                        whileHover={{
                            y: -2,
                             boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                            transition: { duration: 0.3, ease: 'easeOut' }
                        }}
                        className="card border-0 p-3 py-4"
                        style={{cursor: 'pointer', backgroundColor: '#F2E8EB' }}
                        >
                            <div className='d-flex align-items-center justify-content-between'>
                                <span className='fw-semibold text-muted'>{card.title}</span>
                            </div>
                             <h4 className='my-2'>{card.value}</h4>
                        </motion.div>
                </div>
                    )

                })}

            </div>

      <h4 className='text-muted mb-3'>Product Lists</h4>

      <div className='table-responsive border overflow-hidden' style={{ borderRadius: '12px' }}>
                <table className="table table-hover table-bordered mb-0">
        <thead>
          <tr>
            <th className="text-muted" style={{ border: '0' }}>No</th>
            <th className="text-muted" style={{ border: '0' }}>Product Name</th>
            <th className="text-muted" style={{ border: '0' }}>Category Name</th>
            <th className="text-muted" style={{ border: '0' }}>Price</th>
            <th className="text-muted" style={{ border: '0' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((data, index) => {
            return (
              <tr key={data.id}>
                 <td style={{ border: '0' }}>
                  <p className="m-0">{index+1}</p>
                </td>
                <td style={{ border: '0' }}>
                  <p className="m-0">{data.product}</p>
                </td>
                <td style={{ border: '0' }}>
                  <p className="m-0">{data.category}</p>
                </td>
                <td style={{ border: '0' }}>
                  <p className="m-0">{data.price}</p>
                </td>
                 <td style={{ border: '0' }}>
                    <a href="" style={{ backgroundColor: '#978086' }} className='btn me-2 text-white'>Edit</a>
                    <a href="" style={{ backgroundColor: '#E3262E' }} className='btn text-white'>Delete</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Category;
