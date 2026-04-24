import React from 'react';

export default function Appendices() {
  return (
    <div className="chapter-content">
      <h1 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '2.5rem' }}>Appendices</h1>
      
      <h2>Appendix A: The Practice at a Glance</h2>
      <p>A summary for quick reference.</p>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', fontFamily: 'var(--font-serif)', fontSize: '1.125rem' }}>
        <li><strong>The Posture:</strong> Notice (watch first) · Join (sit nearby) · Make Meaning (wonder aloud).</li>
        <li><strong>The Tool:</strong> Identical 8–12" soft bears, one for each child, kept accessible.</li>
        <li><strong>The Rule:</strong> Never take a bear away as punishment. Never use the bear to shame.</li>
        <li><strong>The Support:</strong> The Me Check (daily), the Reflection Group (weekly).</li>
      </ul>

      <h2>Appendix B: Dear Families Letter</h2>
      <div style={{ padding: '2rem', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
        <p>Dear Families,</p>
        <p>Welcome to our classroom! This year, you will hear a lot about teddy bears.</p>
        <p>We use bears in our classroom not just as toys, but as tools for learning and feeling. Young children have very big feelings — excitement, fear, sadness, joy — and their feelings often arrive faster than their words do. A bear is a safe place for a child to put those feelings. When a child can hold a bear and say, "My bear is scared," it helps them practice understanding themselves.</p>
        <p>Every child will have a classroom bear. They will name it, care for it, and play with it. The bears will stay at school so they are always here when the children arrive.</p>
        <p>You are an important part of this! We invite you to talk with your child about their bear. If you have a family photo or a special song from home you'd like to share with your child's bear, we would love that.</p>
        <p>If you have questions, my door is always open. We are so glad you're here.</p>
        <p>Warmly,</p>
        <p>[Teacher Name]</p>
      </div>

      <h2 style={{ marginTop: '3rem' }}>Appendix C: Recommended Reading</h2>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', fontFamily: 'var(--font-serif)', fontSize: '1.125rem' }}>
        <li><em>Unsmiling Faces: How Preschools Can Heal</em> by Lesley Koplow</li>
        <li><em>The Boy Who Would Be a Helicopter</em> by Vivian Gussin Paley</li>
        <li><em>The Power of Showing Up</em> by Daniel J. Siegel and Tina Payne Bryson</li>
        <li><em>Brain-Body Parenting</em> by Mona Delahooke</li>
      </ul>
      
      <div className="text-center" style={{ marginTop: '5rem', marginBottom: '2rem' }}>
        <p className="text-muted" style={{ fontStyle: 'italic' }}>End of Guide.</p>
      </div>
    </div>
  );
}
