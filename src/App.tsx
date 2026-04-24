import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
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
    <div className="flex" style={{ minHeight: '100vh' }}>
      <Sidebar 
        currentChapter={currentChapter} 
        onSelectChapter={setCurrentChapter} 
      />
      <main style={{ flex: 1, padding: '4rem 2rem', backgroundColor: 'var(--color-bg)' }}>
        <div className="container glass-panel" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
          <CurrentComponent />
          
          <div className="flex justify-between" style={{ marginTop: '5rem', borderTop: '1px solid var(--color-border)', paddingTop: '2rem' }}>
            <button 
              onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
              disabled={currentChapter === 0}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                background: 'transparent',
                cursor: currentChapter === 0 ? 'not-allowed' : 'pointer',
                opacity: currentChapter === 0 ? 0.5 : 1,
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                color: 'var(--color-text-main)'
              }}
            >
              ← Previous
            </button>
            <button 
              onClick={() => setCurrentChapter(Math.min(CHAPTER_COMPONENTS.length - 1, currentChapter + 1))}
              disabled={currentChapter === CHAPTER_COMPONENTS.length - 1}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                background: 'var(--color-primary)',
                color: 'white',
                cursor: currentChapter === CHAPTER_COMPONENTS.length - 1 ? 'not-allowed' : 'pointer',
                opacity: currentChapter === CHAPTER_COMPONENTS.length - 1 ? 0.5 : 1,
                fontFamily: 'var(--font-sans)',
                fontWeight: 500
              }}
            >
              Next →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
