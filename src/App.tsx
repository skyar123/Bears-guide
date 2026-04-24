import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import TitlePage from './content/TitlePage';
import Letter from './content/Letter';
import Part1 from './content/Part1';
import Part2 from './content/Part2';
import Part3 from './content/Part3';
import Part4 from './content/Part4';
import Part5 from './content/Part5';
import Part6 from './content/Part6';
import Appendices from './content/Appendices';
import './index.css';

const CHAPTER_COMPONENTS = [
  TitlePage,
  Letter,
  Part1,
  Part2,
  Part3,
  Part4,
  Part5,
  Part6,
  Appendices
];

function App() {
  const [currentChapter, setCurrentChapter] = useState(0);

  // Scroll to top when chapter changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentChapter]);

  const CurrentComponent = CHAPTER_COMPONENTS[currentChapter];

  return (
    <div className="guide-layout">
      <Sidebar 
        currentChapter={currentChapter} 
        onSelectChapter={setCurrentChapter} 
      />
      <main className="content">
        {currentChapter === 0 ? (
          <CurrentComponent />
        ) : (
          <div className="page">
            <CurrentComponent />
          </div>
        )}
        
        {/* Navigation buttons at the bottom of content */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 60px 80px', maxWidth: currentChapter === 0 ? '100%' : '720px', margin: '0 auto' }}>
          <button 
            onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
            disabled={currentChapter === 0}
            style={{
              padding: '12px 24px',
              borderRadius: '2px',
              border: '1px solid var(--rule)',
              background: 'transparent',
              cursor: currentChapter === 0 ? 'not-allowed' : 'pointer',
              opacity: currentChapter === 0 ? 0.3 : 1,
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              fontSize: '14px',
              color: 'var(--ink)'
            }}
          >
            ← Previous
          </button>
          <button 
            onClick={() => setCurrentChapter(Math.min(CHAPTER_COMPONENTS.length - 1, currentChapter + 1))}
            disabled={currentChapter === CHAPTER_COMPONENTS.length - 1}
            style={{
              padding: '12px 24px',
              borderRadius: '2px',
              border: 'none',
              background: 'var(--dark-green)',
              color: 'var(--cream)',
              cursor: currentChapter === CHAPTER_COMPONENTS.length - 1 ? 'not-allowed' : 'pointer',
              opacity: currentChapter === CHAPTER_COMPONENTS.length - 1 ? 0.3 : 1,
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              fontSize: '14px'
            }}
          >
            Next →
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
