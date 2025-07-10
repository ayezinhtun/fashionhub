import React from 'react';
import { TrendingUp } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const costData = [
  { month: 'Jan', cost: 4000 },
  { month: 'Feb', cost: 3000 },
  { month: 'Mar', cost: 5000 },
  { month: 'Apr', cost: 4500 },
  { month: 'May', cost: 6000 },
  { month: 'Jun', cost: 7000 },
  { month: 'Jul', cost: 8000 },
];

export default function Chart() {
  return (
    <div className="container p-4 border rounded-2 shadow-sm">
      <div className="d-flex align-items-center mb-3">
        <TrendingUp className="text-primary me-2" />
        <div>
          <p className="mb-2">Monthly Sales</p>
          <h4>$25000</h4>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={costData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
          <YAxis stroke="#6b7280" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}
            formatter={(value) => [`$${value.toLocaleString()}`, 'Cost']}
          />
          <Line
            type="monotone"
            dataKey="cost"
            stroke="#3B82F6"
            strokeWidth={3}
            dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
