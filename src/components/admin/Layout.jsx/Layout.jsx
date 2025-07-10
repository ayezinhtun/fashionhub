import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="d-flex vh-100">
      <Sidebar />
      <main className="flex-grow-1 overflow-auto p-4" style={{ backgroundColor: '#FAFAF' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
