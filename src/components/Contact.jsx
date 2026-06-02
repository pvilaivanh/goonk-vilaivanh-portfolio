import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [projectBrief, setProjectBrief] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || !projectBrief.trim()) {
      setStatus("Please enter both your name and a project brief.");
      return;
    }

    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\n\nProject brief:\n${projectBrief}`,
    );

    setStatus("Opening your email client...");
    window.location.href = `mailto:visualsbygoonk@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setName("");
      setProjectBrief("");
      setStatus("");
    }, 1000);
  };

  return (
    <section className="content-section contact-section">
      <div className="section-header">
        <span>Contact</span>
        <h2>Let's create visuals that elevate your next project.</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>Get in Touch</h3>
          <p>
            <strong>Email</strong>
            <br />
            <a href="mailto:visualsbygoonk@gmail.com">
              visualsbygoonk@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone</strong>
            <br />
            423-895-2595
          </p>
          <p>
            <strong>Location</strong>
            <br />
            Charlotte, NC
          </p>
          <p>
            <strong>Showreel</strong>
            <br />
            <a
              href="https://www.youtube.com/watch?v=UmOciDYJKzg"
              target="_blank"
              rel="noreferrer"
            >
              youtube.com/watch?v=UmOciDYJKzg
            </a>
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Project Brief
            <textarea
              placeholder="Tell me about your project"
              value={projectBrief}
              onChange={(e) => setProjectBrief(e.target.value)}
            />
          </label>
          <button type="submit" className="button button-primary">
            Send Message
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
