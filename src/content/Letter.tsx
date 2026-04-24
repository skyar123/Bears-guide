import React from 'react';
import { ImageFeature } from '../components/ImageFeature';

export default function Letter() {
  return (
    <div className="chapter-content">
      <h1>A Letter to the Teacher</h1>
      
      <ImageFeature 
        src="/images/note_to_teacher.png" 
        alt="A note to myself, taped to the inside of the door" 
        caption="A note to myself, taped to the inside of the door." 
      />
      
      <p>If you're reading this, someone handed you a stack of teddy bears and a manuscript and asked you to add one more thing to your week. We know. We've been the teacher in that moment — laminating machine still warm, twenty-six children about to walk in, a binder someone promised would "change everything" sitting unopened on the counter.</p>
      
      <p>So before anything else: this guide isn't one more thing. It's a way of doing what you're already doing — greeting, comforting, holding, watching, surviving — with one small object in the room that makes a child's hardest feelings easier to put down somewhere.</p>
      
      <p>We wrote this in the storytelling tradition of Amy Laura Dombro and the clinical tradition of Emotionally Responsive Practice at Bank Street College, founded by Lesley Koplow. The research is here, and it's strong. Wherever we could, we've told it through stories. Children deserve stories. Teachers do too.</p>
      
      <p>Read what helps. Skip what doesn't. The bears will be patient with you.</p>
      
      <p className="text-muted" style={{ fontStyle: 'italic', marginBottom: '2rem' }}>— Gabriel and Skylar</p>
      
      <p>There's a structural map of this guide at the back, in Appendix A. We put it there on purpose. Your first contact with this guide should be a child, not a color key.</p>
      
      <div className="callout-cream">
        <h3>IF YOU ONLY HAVE TEN MINUTES</h3>
        <p>If you don't have time to read this guide before Monday, take this with you:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.125rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Choose bears that are 8–12 inches tall, soft, neutral-faced, and as close to identical as possible. Put them on a low shelf children can reach. Let each child choose one and name it.</li>
          <li style={{ marginBottom: '0.5rem' }}>Watch before you talk. When a child is doing something with their bear, sit nearby. Let them tell you — or don't ask.</li>
          <li style={{ marginBottom: '0.5rem' }}>When you do speak, speak about the bear, not the child. "Your bear looks worried" is something a three-year-old can hear. "You look worried" sometimes isn't.</li>
          <li style={{ marginBottom: '0.5rem' }}>Never take a bear away as punishment.</li>
          <li style={{ marginBottom: '0.5rem' }}>When something hard happens in the room, your steadiness is the intervention. The bear helps. You're the engine.</li>
        </ul>
        <p>Everything else in this guide is an elaboration of those five things. If you want the why, read on.</p>
      </div>

      <h2>Welcome, Teacher</h2>
      
      <ImageFeature 
        src="/images/morning_dropoff.png" 
        alt="Drop-off, a Tuesday in early October." 
        caption="Drop-off, a Tuesday in early October." 
      />
      
      <p>Inside, the classroom was quiet as morning drop-off merged with free play. Outside, a light rain fell. The teacher sang "Hello, Everybody" as children arrived — some running in, some hanging back, some watching from the doorway.</p>
      
      <p>What stood out was what several children were doing with their bears. Mateo hugged his bear tightly, whispering in its ear.</p>
      
      <p>"How is your bear today, Mateo?" the teacher asked.</p>
      <p>"I'm keeping her safe," Mateo said.</p>
      
      <p>Across the room, Aliyah was pulling small wooden blocks off the shelf, one by one, and stacking them slowly around her bear.</p>
      
      <p>"Tell me about what you're making for your bear," the teacher said, sitting down beside her.</p>
      <p>"It's a super-house," Aliyah said, without looking up. "Because he's scared of thunder."</p>
      
      <p>Near the cubbies, Sienna sat on the floor with her bear face-down in her lap. She wasn't doing anything with it — wasn't dressing it, wasn't talking to it — but her hand stayed on its back the whole morning, the way you'd keep a hand on a sleeping baby. The teacher noticed and didn't interrupt.</p>
      
      <p>Three months earlier, Hurricane Helene had unleashed flooding across our region that destroyed homes, businesses, and roads. Adults struggled to make sense of what had happened. Children struggled more quietly. In the months that followed, caregivers did their best to comfort them. Some talked about the flood. Some made simple books about the storm. And some — like the teacher in this classroom — turned to teddy bears.</p>
      
      <p>This guide is for the teacher who saw those three moments and thought, "Something real is happening here." The teacher who greets children every morning and navigates twenty transitions and twenty small griefs and twenty tiny triumphs before lunch. The teacher who already knows, deep down, that play is how children do the hardest work of their lives.</p>
      
      <p>Be honest with us about what this is and isn't. It isn't a curriculum. There are no lesson plans in the traditional sense. What it offers instead is a way of thinking about children, play, and bears — grounded in research, shaped by years of classroom experience.</p>
      
      <p>Mateo whispering. Aliyah building. Sienna keeping a hand on her bear's back. These look ordinary, easy to overlook. But play in early childhood is never simple, and stillness isn't absence. Play is the primary way children express, process, and make sense of their experience — and sometimes play looks like a steady hand on a small soft thing.</p>
      
      <p>Healing happens in everyday moments — a child whispering to a bear, a teacher gently naming feelings, a family adding a lullaby to the classroom, a child who just holds her bear and is allowed to.</p>
      
      <p>That's what this guide is about.</p>
    </div>
  );
}
