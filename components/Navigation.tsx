import React from 'react';
import { Chapter } from '../types';
import { ScrollText, Gavel, Scale, Database, FileText, Shield, Coins, BookOpen } from 'lucide-react';

interface NavigationProps {
  chapters: Chapter[];
  activeChapterId: string;
}

const getIcon = (index: number) => {
  const icons = [BookOpen, Database, Scale, FileText, Shield, Coins, ScrollText];
  const Icon = icons[index] || ScrollText;
  return <Icon size={18} className="mr-2" />;
};

export const Navigation: React.FC<NavigationProps> = ({ chapters, activeChapterId }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="hidden lg:block w-72 h-screen sticky top-0 bg-legal-900 text-slate-100 overflow-y-auto border-r border-legal-800 shadow-xl">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8 text-legal-100">
          <Gavel className="w-8 h-8 text-gold-500" />
          <span className="font-serif text-xl font-bold tracking-wide">LegalTech 2026</span>
        </div>
        <ul className="space-y-1">
          {chapters.map((chapter, index) => {
            const isActive = activeChapterId === chapter.id;
            return (
              <li key={chapter.id}>
                <a
                  href={`#${chapter.id}`}
                  onClick={(e) => handleClick(e, chapter.id)}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium ${
                    isActive
                      ? 'bg-legal-700 text-white border-l-4 border-gold-500 shadow-md'
                      : 'text-legal-300 hover:bg-legal-800 hover:text-white'
                  }`}
                >
                  {getIcon(index)}
                  <span className="truncate">{chapter.title.split('：')[0]}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="mt-12 p-4 bg-legal-800 rounded-lg border border-legal-700">
          <h4 className="text-xs font-semibold text-gold-500 uppercase tracking-wider mb-2">關於報告</h4>
          <p className="text-xs text-legal-300 leading-relaxed">
            本報告分析了2026年四大頂級模型在跨司法管轄區法律應用中的表現。
          </p>
        </div>
      </div>
    </nav>
  );
};