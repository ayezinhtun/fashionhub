import React, { useState } from 'react';
import { motion } from 'framer-motion';

import {
  Calendar,
  Download,
  Filter,
  Plus,
  Search
} from 'lucide-react';

const Stock = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Static mock data
  const StockData = [
    {
      id: 1,
      name: 'Tops',
      instock: 500,
      sale: 200,
      balance: 300
    },
    {
      id: 2,
      name: 'Bottoms',
      instock: 300,
      sale: 200,
      balance: 100
    },
     {
      id: 3,
      name: 'Shoes',
      instock: 200,
      sale: 100,
      balance: 100
    },
  ];

 const filteredLicenses = StockData.filter((l) => {
  const query = searchQuery.toLowerCase();
  return l.name.toLowerCase().includes(query);
});

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center my-4">
        <h3>Stock Management</h3>
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
            <th className="text-muted" style={{ border: '0' }}>Product name</th>
            <th className="text-muted" style={{ border: '0' }}>In-Stock Quantity</th>
            <th className="text-muted" style={{ border: '0' }}>Sales</th>
            <th className="text-muted" style={{ border: '0' }}>Balance</th>
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
                  <p className="m-0">{data.instock}</p>
                </td>
                <td style={{ border: '0' }}>
                  <p className="m-0">{data.sale}</p>
                </td>
                <td style={{ border: '0' }}>
                  <p className="m-0">{data.balance}</p>
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

export default Stock;
