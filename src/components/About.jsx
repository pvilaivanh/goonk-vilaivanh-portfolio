import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";
import profile4 from "../assets/profile4.jpg";
import profile5 from "../assets/profile5.jpg";
import profile6 from "../assets/profile6.jpg";
import profile7 from "../assets/profile7.jpg";

const galleryImages = [
  profile2,
  profile3,
  profile4,
  profile5,
  profile6,
  profile7,
];

function About() {
  return (
    <section className="content-section">
      <div className="section-header">
        <span>About</span>
        <h2>Built for storytelling through imagery and motion.</h2>
      </div>
      <div className="split-pane">
        <div>
          <p>
            My name is Goonk, though most people simply call me G. 
            I first developed an interest in cameras in 2011 as a hobby, 
            and by 2014 I began freelancing, creating visual content 
            for clients and small businesses across different industries.
          </p>
          <p>
            My foundation in media production comes from my experience 
            within the automotive industry and wedding filmmaking. The 
            aesthetic style behind my videos is heavily inspired by my 
            passion for automotive culture, motorsport events, and car shows. 
            That passion continues to drive me creatively, pushing me to travel, 
            capture stunning vehicles in beautiful locations, and tell stories 
            through cinematic visuals.
          </p>
          <p>
            Wedding filmmaking also taught me the importance of 
            storytelling — capturing meaningful moments, recording 
            emotional speeches, and using dialogue and audio to create 
            a deeper connection within a film. That experience naturally 
            led me toward interviews and documentary-style work, where I 
            enjoy learning through conversation, building narratives, and 
            developing creative concepts through scripting and visual storytelling.
          </p>
          <p>
            Over the years, my work has expanded into sports, portraits, 
            products, documentaries, interviews, events, social media 
            content, and more. Every project brings a new opportunity to 
            learn, grow, and create something unique.
          </p>
          <p>
            What excites me most about picking up a camera is knowing that 
            no two shoots are ever the same. There is always another story 
            waiting to be told, another business to help grow, or another 
            creative challenge that pushes me to become better at what I do 
            through visual creation.
          </p>
        </div>

        <aside className="about-panel">
          <h3>Professional strengths</h3>
          <p>
            Creative collaborator who supports marketing goals, develops branded
            visuals, and delivers organized media assets ready for distribution.
          </p>
          <div className="stats-grid">
            <div>
              <strong>7+</strong>
              <span>Years experience</span>
            </div>
            <div>
              <strong>4+</strong>
              <span>Major contracts</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Client satisfaction focus</span>
            </div>
          </div>
        </aside>
      </div>

      <section className="gallery-section">

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <article key={index} className="gallery-card">
              <img
                src={image}
                alt={`Portfolio image ${index + 2}`}
                className="gallery-image"
              />
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

export default About;
