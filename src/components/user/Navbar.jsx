import React from "react";
import { useLocation } from 'react-router-dom';
import { UserRound, ShoppingBag, Search } from 'lucide-react';
import BrandIcon from './BrandIcon';


const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg text-white py-3" style={{ backgroundColor: '#E8B5B8', position: 'sticky', top: '0', zIndex: '1020' }}>
      <div className="container-fluid">
        <div className="d-flex align-items-center me-3">
           <div className="me-2">
              <BrandIcon size={24} />
            </div>

            <a className="navbar-brand" href="#">Fashion Hub</a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link me-2 ${location.pathname === '/' ? 'text-danger' : 'text-dark'}`}
                aria-current="page"
                href="/"
              >
                Home
              </a>

            </li>
            <li className="nav-item">
              <a
                className={`nav-link me-2 ${location.pathname === '/about' ? 'text-danger' : 'text-dark'}`}
                aria-current="page"
                href="/about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link me-2 ${location.pathname === '/product' ? 'text-danger' : 'text-dark'}`}
                aria-current="page"
                href="/product"
              >
                Products
              </a>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle me-2"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> */}
           <li className="nav-item">
             <a
                className={`nav-link me-2 ${location.pathname === '/contact' ? 'text-danger' : 'text-dark'}`}
                aria-current="page"
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
          <form className="d-flex align-items-center" role="search">
             <div className="position-relative me-3" style={{ width: '200px' }}>
              <Search
                size={20}
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#964F52',
                  pointerEvents: 'none'
                }}
              />
              <input
                type="search"
                className="form-control ps-5 py-2"
                placeholder="Search"
                style={{ color: '#964F52', borderRadius: '12px' }}
              />
            </div>

            <div className="icon d-flex align-items-center me-2">
              
            <div 
              className="d-flex align-items-center justify-content-center bg-white rounded-circle me-2" 
              style={{ 
                width: '30px', 
                height: '30px', 
                overflow: 'hidden', 
                flexShrink: 0 
              }}
            >
              <ShoppingBag size={20} className="text-muted" />
            </div>      
            </div>
          

          {/* <div 
            className="d-flex align-items-center justify-content-center bg-white rounded-circle" 
            style={{ 
              width: '30px', 
              height: '30px', 
              overflow: 'hidden', 
              flexShrink: 0 
            }}
          >
            <img src="https://i.ibb.co/tP2bHrgZ/woman-7305088-1280.jpg" className="w-100 h-100 object-cover" alt="" />
          </div>
           */}

           {/* <div>
            <a href="" style={{ backgroundColor: '#E82630' }} className="btn text-white rounded-4 px-4">Sign Up</a>
           </div> */}
           <a href="/login"
              className="d-flex align-items-center justify-content-center bg-white rounded-circle me-2" 
              style={{ 
                width: '30px', 
                height: '30px', 
                overflow: 'hidden', 
                flexShrink: 0 
              }}
            >
              <UserRound size={20} className="text-muted" />
            </a>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
