import React from 'react';
import { ModelComparisonData } from '../types';

interface Props {
  data: ModelComparisonData[];
}

export const ComparisonTable: React.FC<Props> = ({ data }) => {
  return (
    <div className="my-8 overflow-x-auto rounded-xl shadow-lg border border-slate-200">
      <table className="w-full text-sm text-left text-slate-600">
        <thead className="text-xs text-slate-700 uppercase bg-slate-100 border-b border-slate-200">
          <tr>
            <th scope="col" className="px-6 py-4 font-bold text-legal-900 bg-slate-200 sticky left-0 z-10">特性指標</th>
            <th scope="col" className="px-6 py-4 text-blue-900 bg-blue-50">DeepSeek V3.2</th>
            <th scope="col" className="px-6 py-4 text-purple-900 bg-purple-50">Claude Opus 4.5</th>
            <th scope="col" className="px-6 py-4 text-green-900 bg-green-50">GPT-5.2</th>
            <th scope="col" className="px-6 py-4 text-orange-900 bg-orange-50">Gemini 3.0</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="bg-white border-b hover:bg-slate-50 transition-colors">
              <th scope="row" className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap sticky left-0 bg-white shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                {row.feature}
              </th>
              <td className="px-6 py-4 leading-relaxed">{row.deepseek}</td>
              <td className="px-6 py-4 leading-relaxed">{row.claude}</td>
              <td className="px-6 py-4 leading-relaxed">{row.gpt}</td>
              <td className="px-6 py-4 leading-relaxed">{row.gemini}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};