import React, { act } from 'react'
import { color, motion } from 'framer-motion';


import {
  FileText,
  AlertTriangle,
  DollarSign,
  Building,
  FolderOpen,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  Calculator,
  PlusIcon,
  DownloadIcon,
  UploadIcon,
  RefreshCcw,
  Receipt,
  Calendar,
  Bell,
  MessageCircle
} from 'lucide-react';

const cards = [
    {
        id: 1, 
        title: 'Total Order',
        value: '100',
    },
    
];
const OrderData = [
    {
        id:1,
        Customer: 'Sophia Clark',
        product: 'Tops',
        status: 'Shipped',
        Quantity: 1,
        price: 4000,
        total: '4000'
    },
     {
        id:2,
        Customer: 'Ethan Carter',
        product: 'T-shirt',
        status: 'Delivered',
        Quantity: 1,
        price: 4000,
        total: '4000'
    }
]
const SellerOrder = () => {
  return (
        <div className=''>
            <div className='d-flex algin-items-center justify-content-between'>
                <div className="text">
                    <h2 className='fw-bold'>Orders</h2>
                    <p style={{ color: '#964F54' }}>Manage your customer orders!</p>
                </div>
                <div className='d-flex align-items-center'>
                    <p>Tuesday, June 24, 2025</p>
                </div>
            </div>

            <div className="row mt-4">
                {cards.map((card, index) => {
                    const Icon = card.icon;
                    return(
                        <div key={index} className="col-lg-6 mb-4">
                   <motion.div
                        whileHover={{
                            y: -2,
                             boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                            transition: { duration: 0.3, ease: 'easeOut' }
                        }}
                        className="card border p-3"
                        style={{cursor: 'pointer'}}
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

                <h4 className='text-muted mb-3'>Order Lists</h4>

            <div className='table-responsive border overflow-hidden' style={{ borderRadius: '12px' }}>
                <table className="table table-hover table-bordered mb-0">
        <thead>
          <tr>
            <th className="text-muted" style={{ border: '0' }}>No</th>
            <th className="text-muted" style={{ border: '0' }}>Customer</th>
            <th className="text-muted" style={{ border: '0' }}>Product</th>
            <th className="text-muted" style={{ border: '0' }}>Quantity</th>
            <th className="text-muted" style={{ border: '0' }}>Price</th>
             <th className="text-muted" style={{ border: '0' }}>Total</th>
                         <th className="text-muted" style={{ border: '0' }}>Status</th>
            <th className="text-muted" style={{ border: '0' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {OrderData.map((data, index) => {
            return (
              <tr key={data.id}>
                 <td style={{ border: '0' }}>
                  <p className="m-0">{index+1}</p>
                </td>
                <td style={{ border: '0' }}>
                  <p className="m-0">{data.Customer}</p>
                </td>
                 <td style={{ border: '0' }}>
                  <p className="m-0">{data.product}</p>
                </td>
                 <td style={{ border: '0' }}>
                  <p className="m-0">{data.Quantity}</p>
                </td>
                 <td style={{ border: '0' }}>
                  <p className="m-0">{data.price} MMK</p>
                </td>
                 <td style={{ border: '0' }}>
                  <p className="m-0">{data.total}</p>
                </td>
                 <td style={{ border: '0' }}>
                  <p className="m-0">{data.status}</p>
                </td>
                 <td style={{ border: '0' }}>
                    <a href="" style={{ backgroundColor: '#E3262E' }} className='btn text-white'>Delete</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>

            

        </div>
  )
}

export default SellerOrder
