import React from 'react';

interface SidebarProps {
  currentChapter: number;
  onSelectChapter: (index: number) => void;
}

const CHAPTERS = [
  "Title Page",
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
    <nav className="sidebar">
      <div className="sidebar-logo">
        <svg viewBox="0 0 100 100" style={{ height: '32px', width: 'auto', stroke: 'currentColor', fill: 'none', strokeWidth: 1.5 }}>
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="25" r="25" />
          <circle cx="50" cy="75" r="25" />
          <circle cx="25" cy="50" r="25" />
          <circle cx="75" cy="50" r="25" />
          <circle cx="32" cy="32" r="25" />
          <circle cx="68" cy="68" r="25" />
          <circle cx="32" cy="68" r="25" />
          <circle cx="68" cy="32" r="25" />
        </svg>
        <div className="sidebar-logo-text">
          ConnectEd Circles
          <small>BEARS Guide</small>
        </div>
      </div>
      
      <h4>Contents</h4>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {CHAPTERS.map((title, index) => {
          const isActive = index === currentChapter;
          return (
            <a 
              key={index} 
              href={`#chapter-${index}`}
              onClick={(e) => {
                e.preventDefault();
                onSelectChapter(index);
              }}
              style={{
                opacity: isActive ? 1 : undefined,
                color: isActive ? 'var(--sage-light)' : undefined,
                fontWeight: isActive ? 600 : undefined,
              }}
            >
              {title}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
