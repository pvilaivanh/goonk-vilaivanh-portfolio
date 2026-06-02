import profile1 from "../assets/profile1.jpg";

function Home() {
  return (
    <section className="home-section">
      <div className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">Photography & Videography Portfolio</span>
          <h1>Goonk Vilaivanh</h1>
          <p>
            Creative and results-driven videographer and photographer with experience in automotive, 
            wedding, branded, interviews, and social media content production. Skilled in camera and 
            gimbal operation, lighting design, story-boarding, set design, directing, and color grading. 
            Proficiency in using DaVinci Resolve, Adobe Lightroom and Photoshop for editing in post-production. 
            Proven success in growing engagement with photo and video campaigns, Meta advertising, and 
            short-form social media reels. Passionate in visual storytelling through long-form media on 
            YouTube and documentaries. Based in Charlotte, NC and is available to travel or relocate.
          </p>
          <div className="hero-actions">
            <a href="/contact" className="button button-primary">
              Book a Consultation
            </a>
            <a href="/projects" className="button button-secondary">
              View More Work
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img src={profile1} alt="Goonk Vilaivanh" className="profile-photo" />
        </div>
      </div>

      <div className="showcase-grid">
        <article>
          <h2>Camera Operation</h2>
          <p>
            Expert in DSLR, mirrorless, and digital cinema camera setups for
            studio and location shoots.
          </p>
        </article>
        <article>
          <h2>Gimbal & B-Cam</h2>
          <p>
            Dynamic gimbal movement and second-camera coverage designed for
            weddings, automotive launches, and branded films.
          </p>
        </article>
        <article>
          <h2>Post Production</h2>
          <p>
            Color grading, editing, and content optimization for YouTube, social
            media reels, and paid digital campaigns.
          </p>
        </article>
      </div>

      <section className="content-section">
        <div className="section-header">
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">
          <div>
            <h3>Production</h3>
            <ul>
              <li>Camera operation</li>
              <li>B-Cam & gimbal work</li>
              <li>Set design and direction</li>
              <li>Lighting design</li>
            </ul>
          </div>
          <div>
            <h3>Editing</h3>
            <ul>
              <li>DaVinci Resolve</li>
              <li>Color grading</li>
              <li>Photo and video editing</li>
              <li>Content optimization</li>
            </ul>
          </div>
          <div>
            <h3>Storytelling</h3>
            <ul>
              <li>Brand-aligned visuals</li>
              <li>Reels and social content</li>
              <li>Documentary planning</li>
              <li>Creative collaboration</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-header">
          <h2>Education</h2>
        </div>

        <div className="education-card">
          <h3>
            Bachelor of Science in Digital Communications & Media/Multimedia
          </h3>
          <p className="education-meta">
            East Tennessee State University · Johnson City, TN
          </p>
          <p className="education-dates">Aug 2017 — Dec 2019</p>
          <p>
            Graduated in December 2019 with a Bachelor's Degree in Digital Media
            for Visual Effects. Built skills in camera operation, storyboarding,
            video and photo editing, photo compositing, 2D animated motion
            graphics, color grading, audio recording, and lighting.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-header">
          <h2>Showreel</h2>
        </div>
        <div className="video-section">
        <div className="video-container">
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/UmOciDYJKzg"
            title="Goonk Vilaivanh Showreel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      </section>
      
    </section>
  );
}

export default Home;
