import React from 'react';
import { PieChart as PieChartIcon } from 'lucide-react';
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer
} from 'recharts';

const vendorData = [
  { vendor: 'Microsoft', value: 20, totalCost: 5000 },
  { vendor: 'Adobe', value: 10, totalCost: 2500 },
  { vendor: 'Autodesk', value: 5, totalCost: 1500 },
];

const COLORS = ['#6366F1', '#F59E0B', '#10B981'];

export default function CircleChart() {
  return (
    <div className="container p-4 border rounded-2 shadow-sm">
      <div className="d-flex align-items-center mb-3">
        <PieChartIcon className="text-primary me-2" />
        <div>
          <p className="mb-2">Order Distribution</p>
          <h4>150</h4>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={vendorData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ vendor, percent }) => `${vendor} ${(percent * 100).toFixed(0)}%`}
            outerRadius={90}
            dataKey="value"
          >
            {vendorData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}
            formatter={(value, name, props) => [
              `${value} licenses ($${props.payload.totalCost.toLocaleString()})`,
              props.payload.vendor
            ]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
