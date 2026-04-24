import React from 'react';

interface SidebarProps {
  currentChapter: number;
  onSelectChapter: (index: number) => void;
}

const CHAPTERS = [
  "A Letter to the Teacher",
  "Part One: Why Bears",
  "Part Two: Bringing Bears to Life",
  "Part Three: Noticing What Bears Show Us",
  "Part Four: Tending Your Own Practice",
  "Part Five: The Bear Year",
  "Part Six: The Toolkit",
  "Appendices"
];

export function Sidebar({ currentChapter, onSelectChapter }: SidebarProps) {
  return (
    <nav style={{
      width: '300px',
      backgroundColor: 'var(--color-surface)',
      borderRight: '1px solid var(--color-border)',
      height: '100vh',
      position: 'sticky',
      top: 0,
      padding: '2rem 1.5rem',
      overflowY: 'auto'
    }}>
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          ConnectEd Circles
        </h1>
        <h2 style={{ fontSize: '1.5rem', marginTop: '0.5rem', lineHeight: 1.2 }}>
          BEARS in the Classroom
        </h2>
      </div>
      
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {CHAPTERS.map((title, index) => {
          const isActive = index === currentChapter;
          return (
            <li key={index}>
              <button
                onClick={() => onSelectChapter(index)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  backgroundColor: isActive ? 'var(--color-accent)' : 'transparent',
                  color: isActive ? 'var(--color-text-main)' : 'var(--color-text-muted)',
                  fontWeight: isActive ? 600 : 400
                }}
              >
                {title}
              </button>
            </li>
          );
        })}
      </ul>
      
      <div style={{ marginTop: 'auto', paddingTop: '3rem' }}>
        <p className="text-muted" style={{ fontSize: '0.8rem', fontFamily: 'var(--font-sans)' }}>
          By Gabriel Guyton & Skylar Belt<br/>
          © ConnectEd Circles LLC
        </p>
      </div>
    </nav>
  );
}
