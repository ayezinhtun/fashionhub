import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react'

function Footer() {
  return (
    <div className='container-fluid pt-4 px-5' style={{ backgroundColor: '#E8B5B8', color: '#1C0D0F' }}>
      <div className="row py-4">
        <div className="col-lg-3">
            <h5>About</h5>
            <p className='text-muted'>Shopora</p>
        </div>
        <div className='col-lg-3'>
            <h5>Quick Links</h5>
            <ul className='p-0'>
                <li className='nav-link text-muted'>Home</li>
                <li className='nav-link text-muted'>About</li>
                <li className='nav-link text-muted'>Product</li>
                <li className='nav-link text-muted'>Contact</li>
            </ul>
        </div>
        <div className="col-lg-3">
            <h5>Contact Info</h5>
            <ul className='p-0'>
                <li className='nav-link text-muted'>Email: sale@gmail.com</li>
                <li className='nav-link text-muted'>Phone: 09-400401206</li>
                <li className='nav-link text-muted'>Address: Yangon</li>
            </ul>
        </div>
        <div className='col-lg-3'>
            <h5>Follow Us</h5>
            <div className='d-flex justify-content-start align-items-center '>
              <div className='bg-white text-muted me-2 d-flex align-items-center justify-content-center rounded-circle' style={{ width: '40px', height: '40px' }}>
                 <Facebook/>
              </div>
              <div className='bg-white text-muted me-2 d-flex align-items-center justify-content-center rounded-circle' style={{ width: '40px', height: '40px' }}>
                 <Instagram/>
              </div>
              <div className='bg-white text-muted d-flex align-items-center justify-content-center rounded-circle' style={{ width: '40px', height: '40px' }}>
                 <Twitter/>
              </div>
            </div>
        </div>
      </div>
      <p className='text-center pb-2' style={{ color: '#1C0D0F' }}>@2024 Shopora. All rights reserved.</p>
    </div>
  )
}

export default Footer
