import React from 'react';

export default function Part6() {
  return (
    <div className="chapter-content">
      <div className="text-muted text-center" style={{ marginBottom: '1rem', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>PART SIX</div>
      <h1 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>The Toolkit</h1>
      <h2 className="text-center text-muted" style={{ fontWeight: 'normal', fontSize: '1.5rem', marginBottom: '2.5rem' }}>Tear-Out Pages for Teachers and Directors</h2>
      
      <p>This section contains the practical tools you need to run the practice. We suggest copying them or pinning them to a wall where you can see them.</p>
      
      <div className="callout-cream">
        <h3 style={{ textTransform: 'uppercase', fontSize: '1rem', letterSpacing: '0.05em', marginBottom: '1rem' }}>TOOLKIT 1: THE ME CHECK (WALLET CARD)</h3>
        <p style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', marginBottom: '1rem' }}>Copy this, cut it out, keep it where you see it.</p>
        <div style={{ padding: '1.5rem', border: '2px dashed var(--color-border)', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-md)' }}>
          <h4 style={{ textAlign: 'center', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>THE ME CHECK</h4>
          <ol style={{ paddingLeft: '1.5rem', marginTop: '1rem', fontFamily: 'var(--font-sans)', fontSize: '1.125rem' }}>
            <li style={{ marginBottom: '1rem' }}><strong>Body check:</strong> How am I right now? <br/><span style={{ fontSize: '0.9em', color: 'var(--color-text-muted)' }}>(Tight? Warm? Fast? Slow?)</span></li>
            <li><strong>Capacity check:</strong> Can I be present for a child who needs me right now? <br/><span style={{ fontSize: '0.9em', color: 'var(--color-text-muted)' }}>(If yes: go. If no: breathe, ask for a minute, or name it aloud.)</span></li>
          </ol>
        </div>
      </div>
      
      <div className="callout-purple">
        <h3 style={{ textTransform: 'uppercase', fontSize: '1rem', letterSpacing: '0.05em', marginBottom: '1rem' }}>TOOLKIT 2: REFLECTION GROUP AGENDA</h3>
        <p style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', marginBottom: '1rem' }}>For 3–5 teachers meeting for 45 minutes.</p>
        <div style={{ padding: '1.5rem', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-sans)' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1.5rem' }}>
              <strong>1. The Arriving (5 min)</strong>
              <br/>Silence or a short grounding exercise. Name one thing you are leaving outside the door.
            </li>
            <li style={{ marginBottom: '1.5rem' }}>
              <strong>2. The Moments (15 min)</strong>
              <br/>Each teacher shares one brief "bear moment" from the week. No interpretation, just what happened. "I noticed..."
            </li>
            <li style={{ marginBottom: '1.5rem' }}>
              <strong>3. The Question (20 min)</strong>
              <br/>One teacher brings a question or a stuck point. The group does not solve it. The group asks wondering questions: "I wonder what the child's body felt like?" "I wonder what your Little Self felt in that moment?"
            </li>
            <li>
              <strong>4. The Closing (5 min)</strong>
              <br/>Name one thing you are taking with you back into the classroom.
            </li>
          </ul>
        </div>
      </div>
      
      <div className="callout-teal">
        <h3 style={{ textTransform: 'uppercase', fontSize: '1rem', letterSpacing: '0.05em', marginBottom: '1rem' }}>TOOLKIT 3: A NOTE TO DIRECTORS</h3>
        <p>If you lead a school or a center, this practice asks something of you, too.</p>
        <p>You cannot mandate a teacher to be emotionally responsive. You can only create the conditions where emotional responsiveness is possible. If your teachers are exhausted, underpaid, unsupported when a parent is angry, or judged by standardized metrics that don't value play, the bears will become just another task.</p>
        <p><strong>Your job is to hold the teachers so the teachers can hold the children.</strong></p>
        <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', fontFamily: 'var(--font-sans)', fontSize: '1rem' }}>
          <li>Protect the reflection group time. It is not prep time. It is not staff meeting time. It is supervision time.</li>
          <li>Find the budget for identical, high-quality bears. Don't make teachers scrounge for them.</li>
          <li>When a teacher comes to you dysregulated, do a Me Check yourself before you respond.</li>
          <li>Stand behind your teachers when a family questions play. Have the research ready. (See Part One.)</li>
        </ul>
      </div>
    </div>
  );
}
