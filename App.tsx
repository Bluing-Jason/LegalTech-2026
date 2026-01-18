import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { ChapterSection } from './components/ChapterSection';
import { ComparisonTable } from './components/ComparisonTable';
import { CostChart } from './components/CostChart';
import { chapters, modelComparison, costData, reportTitle, reportSubtitle, references } from './data';
import { Menu, X, ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState(chapters[0].id);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Logic to determine active chapter based on scroll position
      const chapterElements = chapters.map(c => document.getElementById(c.id));
      const scrollPosition = window.scrollY + 150; // Offset

      let currentActive = chapters[0].id;
      for (const el of chapterElements) {
        if (el && el.offsetTop <= scrollPosition) {
          currentActive = el.id;
        }
      }
      setActiveChapter(currentActive);
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen bg-legal-50 font-sans">
      {/* Sidebar for Desktop */}
      <Navigation chapters={chapters} activeChapterId={activeChapter} />

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 w-full bg-legal-900 text-white z-50 p-4 shadow-md flex justify-between items-center">
        <span className="font-serif font-bold">LegalTech 2026</span>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-legal-900 z-40 pt-20 px-6 lg:hidden overflow-y-auto">
          <ul className="space-y-4">
            {chapters.map((chapter) => (
              <li key={chapter.id}>
                <a
                  href={`#${chapter.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-legal-100 text-lg py-2 border-b border-legal-700"
                >
                  {chapter.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 lg:p-12 p-6 lg:mt-0 mt-16 max-w-7xl mx-auto w-full">
        {/* Header */}
        <header className="mb-16 text-center lg:text-left">
          <div className="inline-block px-3 py-1 bg-gold-500 text-white text-xs font-bold rounded-full mb-4 tracking-wider">
            2026 深度評估報告
          </div>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-legal-900 mb-4 leading-tight">
            {reportTitle}
          </h1>
          <p className="text-xl text-legal-500 font-light">
            {reportSubtitle}
          </p>
        </header>

        {/* Dynamic Content Injection */}
        {chapters.map((chapter) => (
          <React.Fragment key={chapter.id}>
            <ChapterSection chapter={chapter} />
            
            {/* Inject Charts/Tables specifically after certain chapters for context */}
            {chapter.id === 'chapter-6' && (
              <div className="mb-20">
                <CostChart data={costData} />
              </div>
            )}
            
            {chapter.id === 'chapter-7' && (
              <div className="mb-20">
                 <h3 className="text-2xl font-serif font-bold text-legal-900 mb-6">附錄：模型能力深度對比</h3>
                <ComparisonTable data={modelComparison} />
              </div>
            )}
          </React.Fragment>
        ))}

        {/* References */}
        <footer className="mt-20 pt-10 border-t border-legal-200">
          <h3 className="text-xl font-serif font-bold text-legal-900 mb-6">參考文獻 & 資料來源</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {references.map((ref) => (
              <a 
                key={ref.id} 
                href={ref.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 bg-white rounded-lg border border-slate-200 hover:border-gold-500 hover:shadow-md transition-all group"
              >
                <div className="flex justify-between items-start">
                  <p className="text-sm font-medium text-slate-700 group-hover:text-legal-700">{ref.title}</p>
                  <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded ml-2 whitespace-nowrap">{ref.date}</span>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-12 text-center text-slate-400 text-sm">
            © 2026 LegalTech Research Institute. All rights reserved.
          </div>
        </footer>
      </main>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-legal-900 text-white p-3 rounded-full shadow-lg hover:bg-gold-600 transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default App;