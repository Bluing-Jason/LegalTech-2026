import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { CostData } from '../types';

interface Props {
  data: CostData[];
}

export const CostChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-96 bg-white p-6 rounded-xl shadow-sm border border-slate-200 my-8">
      <h3 className="text-lg font-bold text-legal-800 mb-4 text-center font-serif">百萬Token推理成本對比 (USD)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="name" tick={{fill: '#475569'}} axisLine={false} tickLine={false} />
          <YAxis tick={{fill: '#475569'}} axisLine={false} tickLine={false} />
          <Tooltip 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
            cursor={{fill: '#f1f5f9'}}
          />
          <Legend />
          <Bar dataKey="input" name="輸入成本" fill="#627d98" radius={[4, 4, 0, 0]} barSize={50} />
          <Bar dataKey="output" name="輸出成本" fill="#b08d55" radius={[4, 4, 0, 0]} barSize={50} />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-center text-xs text-slate-500 mt-2">註：DeepSeek成本極具優勢，Claude適合高價值產出</p>
    </div>
  );
};