import React from 'react';
import { PieChart as PieChartIcon } from 'lucide-react';
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer
} from 'recharts';

const OrderData = [
  { category: 'Tops', count: 20, amount: 5000 },
  { category: 'Shoe', count: 10, amount: 2500 },
  { category: 'Phone Accessory', count: 5, amount: 1500 },
];

const COLORS = ['#6366F1', '#F59E0B', '#10B981'];

export default function CircleChart() {
  const totalCount = OrderData.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="container p-4 border rounded-2 shadow-sm">
      <div className="d-flex align-items-center mb-3">
        <PieChartIcon className="text-primary me-2" />
        <div>
          <p className="mb-2">Order Distribution</p>
          <h4>{totalCount}</h4>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={OrderData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ category, percent }) =>
              `${category} ${(percent * 100).toFixed(0)}%`
            }
            outerRadius={90}
            dataKey="count" // 👈 key fix here
            nameKey="category"
          >
            {OrderData.map((entry, index) => (
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
              `${value} orders ($${props.payload.amount.toLocaleString()})`,
              props.payload.category
            ]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
