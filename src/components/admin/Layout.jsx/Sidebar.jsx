import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Sidebar.css';
import BrandIcon from '../../user/BrandIcon';
import {
  LayoutDashboard,
  FileText,
  BarChart3,
  Bell,
  LogOut,
  ChevronLeft,
 ChevronRight,
 Activity,
 Settings,
 Zap,
 Shield,
 HelpCircle,
 User,
 Users,
 Tags,
 Package,
 ShoppingBag,
 ShoppingCart,
 Store,
 Boxes
} from 'lucide-react';
import { label, path } from 'framer-motion/client';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);

    const quickActions = [
    { action: 'report', label: 'Generate Report', icon: Zap },
    { action: 'export', label: 'Export Data', icon: Shield },
    { action: 'settings', label: 'Settings', icon: HelpCircle },
  ];


  
  const handleQuickAction = (action) => {
    switch (action) {
       case 'add-license':
        // Navigate to add license
        break;
      case 'security-check':
        // Run security check
        break;
      case 'help':
        // Open help
        break;
    }
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    { label: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/administors/overview' },
    { label: 'Customers', icon: <Users size={20} />, path: '/administors/customer' },
    {label: 'Category', icon: <Tags size={20} />, path: '/administors/category'},
    {label: 'Products', icon: <Package size={20} />, path: '/administors/adminproduct'},
    {label: 'Sellers', icon: <Store size={20} />, path: '/administors/seller' },
    {label: 'Orders', icon: <ShoppingCart size={20} />, path: '/administors/order'},
        {label: 'Stock', icon: <Boxes size={20} />, path: '/administors/stock'},
  ];

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`vh-100 pt-3 d-flex flex-column`}
        style={{
          width: collapsed ? '80px' : '300px',
          backgroundColor: '#E8B5B8',
          transition: 'width 0.3s ease',
          overflowY: 'auto',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'  
        }}
      >
        {/* Header */}
        <div className='border-bottom px-3'>
             <div className="d-flex justify-content-between align-items-center mb-3">
          {!collapsed && 
            <div className="d-flex align-items-center">

                <div className="d-flex align-items-center me-3">
                    <div className="me-2">
                        <BrandIcon size={24} />
                        </div>
                        <a className="navbar-brand fw-bold fs-4" href="/">Fashion Hub</a>
                    </div>
            </div>
          
          }
          <button
            className="btn btn-sm bg-white"
            onClick={toggleSidebar}
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>
        </div>
       

        {/* Navigation */}
       <ul className="nav nav-pills flex-column px-3 py-2 border-bottom">
        {menuItems.map((item) => (
          <li key={item.label} className="nav-item pb-2">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `nav-link d-flex align-items-center gap-2 text-dark hover-bg py-3 ${
                  isActive ? 'bg-white text-dark py-3' : ''
                }`
              }
            >
              {item.icon}
              {!collapsed && <span className='text-muted fw-semibold'>{item.label}</span>}
            </NavLink>
          </li>
        ))}
      </ul>

        {/* Footer */}
        <div className="mt-auto">
          <button className="btn btn-outline-danger w-100 d-flex align-items-center gap-2">
            <LogOut size={18} />
            {!collapsed && 'Sign Out'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
