import React, { act } from 'react'
import { color, motion } from 'framer-motion';
import Chart from './Chart';
import CircleChart from './CircleChart';

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
  BarChart3,
  Receipt,
  Calendar,
  Bell,
  MessageCircle
} from 'lucide-react';

const cards = [
    {
        id: 1, 
        title: 'Total Sales',
        value: '$250,000',
    },
    {
        id: 2, 
        title: 'Number of Orders',
        value: '1,500',
    },
    {
        id: 3, 
        title: 'Number of Customers',
        value: 100,
    },
    {
        id: 4, 
        title: 'Number of Sellers',
        value: 100,
    },
];

const quickactions = [
    {
        id: 1,
        icon: PlusIcon,
        title: 'Add New License',
        description: 'Quickly add a new license to your inventory',
        color: '#3b82f6',
    },
     {
        id: 2,
        icon: DownloadIcon,
        title: 'Export Report',
        description: 'Download current license data as CSV or PDF',
        color: '#22c55e',
    },
     {
        id: 3,
        icon: UploadIcon,
        title: 'Import Licenses',
        description: 'Bulk import licenses from spreadsheet',
        color: '#8b5cf6',
    },
     {
        id: 4,
        icon: RefreshCcw,
        title: 'Sync Data',
        description: 'Refresh license data from all sources',
        color: '#f97316'
    },
     {
        id: 5,
        icon: AlertTriangle,
        title: 'Check Expires',
        description: 'Review licenses expiring in the next 30 days',
        color: '#ef4444',
    },
     {
        id: 6,
        icon: BarChart3,
        title: 'View Analytics',
        description: 'Quickly add a new license to your inventory',
        color: '#6366f1'
    },
]

const Overview = () => {
  return (
        <div className=''>
            <div className='d-flex algin-items-center justify-content-between'>
                <div className="text">
                    <h2 className='fw-bold'>Dashboard Overview </h2>
                </div>
                <div className='d-flex align-items-center'>
                    <p>Tuesday, June 24, 2025</p>
                </div>
            </div>

            <div className="row mt-4">
                {cards.map((card, index) => {
                    const Icon = card.icon;
                    return(
                        <div key={index} className="col-lg-3 mb-4">
                   <motion.div
                        whileHover={{
                            y: -2,
                             boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                            transition: { duration: 0.3, ease: 'easeOut' }
                        }}
                        className="card border-0 p-3"
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

            <div className="row">
                <h5>Sales Performance</h5>
                <div className="col-lg-6">
                    <Chart/>
                </div>
                <div className="col-lg-6">
                    <CircleChart/>
                </div>
            </div>

            

        </div>
  )
}

export default Overview
