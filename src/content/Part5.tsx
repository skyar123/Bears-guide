import React from 'react';
import { ImageFeature } from '../components/ImageFeature';

export default function Part5() {
  return (
    <div className="chapter-content">
      <div className="text-muted text-center" style={{ marginBottom: '1rem', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>PART FIVE</div>
      <h1 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>The Bear Year</h1>
      <h2 className="text-center text-muted" style={{ fontWeight: 'normal', fontSize: '1.5rem', marginBottom: '2.5rem' }}>A Month-by-Month Rhythm</h2>
      
      <h2>The Bear Year</h2>
      <p>This section is an outline, not a straitjacket. A classroom responds to the season, the weather, the families in it, and the unpredictable events of a year. If there's a flood in October, you don't do the October theme. You do what the children need.</p>
      
      <p>But having a structure helps. It gives the year an arc — from arriving, to belonging, to exploring, to remembering, to saying goodbye.</p>
      
      <ImageFeature 
        src="/images/the_bear_journal.png" 
        alt="A journal resting on a rug." 
        caption="A journal resting on a rug." 
      />
      
      <h3>September: Arrival and Naming</h3>
      <p>This is the month of "Who are you?" The bears arrive. The children name them. You introduce the cozy corner.</p>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', fontFamily: 'var(--font-serif)', fontSize: '1.125rem' }}>
        <li><strong>Teacher Focus:</strong> Establishing the physical space. Where do bears live? How do we hold them?</li>
        <li><strong>Play Invitation:</strong> Create a "bear hospital" for bears that need extra care.</li>
        <li><strong>Journal Prompt:</strong> "This is my bear. My bear's name is..."</li>
      </ul>
      
      <h3>October: Safe and Scared</h3>
      <p>Once the initial excitement settles, anxieties often surface. This is the month to normalize fear and introduce the bear as a companion for it.</p>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', fontFamily: 'var(--font-serif)', fontSize: '1.125rem' }}>
        <li><strong>Teacher Focus:</strong> Mirroring language. "Your bear looks worried."</li>
        <li><strong>Play Invitation:</strong> Build "safe places" for bears using blocks, boxes, and blankets.</li>
        <li><strong>Journal Prompt:</strong> "When my bear feels scared, I..."</li>
      </ul>
      
      <h3>November: Family and Belonging</h3>
      <p>As the weather cools and holidays approach, the focus shifts to family. This can be complex for children in non-traditional families, foster care, or families separated by distance or borders.</p>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', fontFamily: 'var(--font-serif)', fontSize: '1.125rem' }}>
        <li><strong>Teacher Focus:</strong> Inviting families in. The family wall. Noticing whose story isn't being told.</li>
        <li><strong>Play Invitation:</strong> Bear families. Who lives in your bear's house?</li>
        <li><strong>Journal Prompt:</strong> "My bear's family looks like this..."</li>
      </ul>
      
      <h3>December/January: Transitions and Returns</h3>
      <p>Winter breaks are long for small children. The return is often rocky. Bears provide continuity.</p>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', fontFamily: 'var(--font-serif)', fontSize: '1.125rem' }}>
        <li><strong>Teacher Focus:</strong> Re-establishing routines. Re-introducing the cozy corner.</li>
        <li><strong>Play Invitation:</strong> Bear travel. Suitcases, bus tickets, moving.</li>
        <li><strong>Journal Prompt:</strong> "While we were away, my bear..."</li>
      </ul>
      
      <h3>February: Love and Friendship</h3>
      <p>Children notice who plays with whom. Bears can help navigate early social dynamics, exclusion, and repair.</p>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', fontFamily: 'var(--font-serif)', fontSize: '1.125rem' }}>
        <li><strong>Teacher Focus:</strong> Facilitating bear-to-bear interactions. Containing aggressive play safely.</li>
        <li><strong>Play Invitation:</strong> Bear mailboxes. Writing notes (scribbles) to other bears.</li>
        <li><strong>Journal Prompt:</strong> "My bear's best friend is..."</li>
      </ul>
      
      <h3>March: Growing and Changing</h3>
      <p>Spring brings energy and shifts in development. Children are physically and cognitively different than they were in September.</p>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', fontFamily: 'var(--font-serif)', fontSize: '1.125rem' }}>
        <li><strong>Teacher Focus:</strong> Noticing mastery. "Your bear learned how to do that!"</li>
        <li><strong>Play Invitation:</strong> Bear school. Let the children "teach" their bears what they've learned.</li>
        <li><strong>Journal Prompt:</strong> "My bear is getting big. Now my bear can..."</li>
      </ul>
      
      <h3>April/May: Saying Goodbye</h3>
      <p>The end of the year is a major transition. Saying goodbye well is a skill children need for life.</p>
      
      <ImageFeature 
        src="/images/end_of_day.png" 
        alt="The last golden light of a late afternoon in a preschool classroom." 
        caption="The last golden light of a late afternoon in a preschool classroom." 
      />
      
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', fontFamily: 'var(--font-serif)', fontSize: '1.125rem' }}>
        <li><strong>Teacher Focus:</strong> Honoring the end. Reviewing the bear journals together.</li>
        <li><strong>Play Invitation:</strong> Packing up. Taking bears to visit the next classroom or the kindergarten room.</li>
        <li><strong>Journal Prompt:</strong> "What I will remember about my bear is..."</li>
      </ul>
      
      <p>When the year ends, the bears go home with the children. They are transitional objects; the transition is happening, and the object must go with the child into whatever comes next.</p>
    </div>
  );
}
