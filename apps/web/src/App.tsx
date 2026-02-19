import { useState } from "react";
import { Brand } from "./Brand";
import "./App.css";

export function App() {
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [copyLabel, setCopyLabel] = useState("Copy email");
  const email = "admin@seotech.dev";
  const year = new Date().getFullYear();

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyLabel("Copied");
      window.setTimeout(() => setCopyLabel("Copy email"), 1400);
    } catch {
      setCopyLabel("Copy failed");
      window.setTimeout(() => setCopyLabel("Copy email"), 1800);
    }
  }

  return (
    <main className="site" aria-label="SEOTech.dev">
      <div className="site__grid" />
      <div className="site__content">
        <header className="site__header">
          <Brand />
          <p className="site__tagline">Bespoke systems. Direct contact. Zero fluff.</p>
        </header>

        <section className="site__statement">
          <p className="site__lead">
            Independent software consulting for leaders who need clear direction, decisive execution, and zero vendor theater.
          </p>
          <p className="site__blurb">
            We build and host bespoke software for SEO agencies and independent professionals. Reach out if you'd like to chat
            about a project.
          </p>
        </section>

        <footer className="site__footer">
          <button type="button" onClick={() => setIsEmailOpen(true)}>
            Email
          </button>
        </footer>
      </div>

      {isEmailOpen ? (
        <div className="email-modal" role="dialog" aria-modal="true" aria-label="Contact email">
          <div className="email-modal__card">
            <h2>Contact</h2>
            <p>{email}</p>
            <div className="email-modal__actions">
              <button type="button" onClick={handleCopyEmail}>
                {copyLabel}
              </button>
              <a href={`mailto:${email}`}>Open mail app</a>
              <button type="button" onClick={() => setIsEmailOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <aside className="site__floating-footer" aria-label="Company footer">
        <strong>SEOTech.dev LLC</strong>
        <small>Copyright &copy; {year}</small>
      </aside>
    </main>
  );
}
