import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CategoryModel from './CategoryModel';

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
        title: 'Total Categories',
        value: '1200',
    },
];

const Category = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Static mock data
  const mockData = [
    {
      id: 1,
      name: 'Mattress Protector',
    },
    {
      id: 2,
      name: 'Hair & Nail',
    },
     {
      id: 3,
      name: 'Dining Sets',
    },
     {
      id: 4,
      name: 'Oxfords & Lace-UPs',
    },
    {
      id: 5,
      name: 'T-Shirts',
    },
    {
      id: 6,
      name: 'Clothing Sets',
    },
    {
      id: 7,
      name: 'Electronics',
    },
    {
      id: 8,
      name: 'Smart Watches',
    },
    {
      id: 9,
      name: 'Home Accessories',
    },
    {
      id: 10,
      name: 'Skin Care',
    },
    {
      id: 11,
      name: 'Car Accessories',
    },
    {
      id: 12,
      name: 'Phone Accessories',
    },
  ];

 const filteredLicenses = mockData.filter((l) => {
  const query = searchQuery.toLowerCase();
  return l.name.toLowerCase().includes(query);
});

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center my-4">
        <h3>Category Dashboard</h3>
        <div className="d-flex gap-2">
          <button className="btn d-flex align-items-center text-white"
           style={{ backgroundColor: '#E3262E' }}
           data-bs-toggle="modal"
          data-bs-target="#CategoryModal"
           >
            <Plus size={16} className="me-1" />
            Add Category
          </button>
          <CategoryModel/>
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

      <div className="border rounded-3 p-3 mb-4">
        <div className="d-flex gap-3 align-items-center">
          <div className="flex-grow-1 position-relative">
            <Search
              size={20}
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#6c757d',
                pointerEvents: 'none'
              }}
            />
            <input
              type="search"
              className="form-control ps-5 py-2"
              placeholder="Search category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="btn btn-outline-secondary d-flex align-items-center gap-1">
            <Filter size={16} />
            Filters
          </button>
        </div>
      </div>

      <div className='table-responsive border overflow-hidden' style={{ borderRadius: '12px' }}>
                <table className="table table-hover table-bordered mb-0">
        <thead>
          <tr>
            <th className="text-muted" style={{ border: '0' }}>No</th>
            <th className="text-muted" style={{ border: '0' }}>Name</th>
            <th className="text-muted" style={{ border: '0' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredLicenses.map((data, index) => {
            return (
              <tr key={data.id}>
                 <td style={{ border: '0' }}>
                  <p className="m-0">{index+1}</p>
                </td>
                <td style={{ border: '0' }}>
                  <p className="m-0">{data.name}</p>
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
