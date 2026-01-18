import React from 'react';
import { Chapter } from '../types';

interface Props {
  chapter: Chapter;
}

export const ChapterSection: React.FC<Props> = ({ chapter }) => {
  return (
    <section id={chapter.id} className="mb-20 scroll-mt-10">
      <div className="relative mb-8">
        <h2 className="text-3xl font-serif font-bold text-legal-900 pb-4 border-b-2 border-legal-200">
          {chapter.title}
        </h2>
        <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-gold-500"></div>
      </div>
      
      <div className="space-y-12">
        {chapter.subsections.map((sub, idx) => (
          <div key={idx} className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-bold text-legal-800 mb-4 flex items-center">
              <span className="w-1.5 h-6 bg-gold-500 mr-3 rounded-full"></span>
              {sub.title}
            </h3>
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed whitespace-pre-line text-justify">
              {sub.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};