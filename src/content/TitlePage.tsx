export default function TitlePage() {
  return (
    <div className="cover">
      <div className="cover-logo">
        <svg viewBox="0 0 100 100" style={{ height: '48px', width: 'auto', stroke: 'currentColor', fill: 'none', strokeWidth: 1.5 }}>
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
      </div>

      <div className="cover-main">
        <div className="cover-eyebrow">A Practical Guide for Teachers</div>
        <h1 className="cover-title">
          BEARS
          <span>in the Classroom</span>
        </h1>
        <p className="cover-subtitle">
          Guided Play with Teddy Bears to Invite Feelings, Stories, and Healing
        </p>

        <div className="cover-meta">
          <div className="authors">Gabriel Guyton &middot; Skylar Belt</div>
          ConnectEd Circles LLC &middot; Asheville &amp; Western North Carolina<br />
          With companion notes for facilitators, coaches, supervisors, and directors<br />
          <span style={{ fontStyle: 'italic' }}>
            Grounded in the Emotionally Responsive Practice of Bank Street College of Education, founded by Lesley Koplow.
          </span>
        </div>
      </div>
    </div>
  );
}
