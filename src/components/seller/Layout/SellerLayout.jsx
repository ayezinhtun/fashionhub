import React from 'react';
import SellerSidebar from './SellerSidebar';
import { Outlet } from 'react-router-dom';

export const SellerLayout = () => {
  return (
    <div className="d-flex vh-100">
      <SellerSidebar />
      <main className="flex-grow-1 overflow-auto p-4" style={{ backgroundColor: '#FAFAFA' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default SellerLayout;
