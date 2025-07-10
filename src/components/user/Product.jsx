import React, { useState } from 'react';
import Clothing from './Clothing';
import Shoe from './Shoe';
import Electronic from './Electronic';

const pages = {
  'Shop Clothing': {
    component: (
     <Clothing/>
    ),
  },
  'Shop Shoes': {
    component: (
      <Shoe/>
    ),
  },
  'Shop Electronics': {
    title: 'Vendor Distribution',
    subtitle: 'License distribution by vendor',
    component: (
      <Electronic/>
    ),
  },
};

export default function SimplePageSwitcher() {
  const [page, setPage] = useState('Shop Clothing');
  const { component } = pages[page];

  return (
    <div className="container-fluid p-3" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="header d-flex align-items-center justify-content-center">
       <div className="right d-flex gap-2">
  {Object.keys(pages).map((key) => {
    const isActive = page === key;
    return (
      <button
        key={key}
        className='rounded-4 px-4'
        onClick={() => setPage(key)}
        style={{
          backgroundColor: isActive ? '#E8B5B8' : '#F2E8EB',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          color: isActive ? 'white' : 'black',
          cursor: 'pointer',
          paddingTop: '12px',
          paddingBottom: '12px'
        }}
      >
        {key.charAt(0).toUpperCase() + key.slice(1)}
      </button>
    );
  })}
</div>

      </div>

      <div className="container mt-4">
        {component}
      </div>
    </div>
  );
}
