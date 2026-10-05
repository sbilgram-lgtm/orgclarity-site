import './App.css'

const LINKEDIN = 'https://www.linkedin.com/in/sbilgram/'
const TRAILHEAD = 'https://www.salesforce.com/trailblazer/m2j8638ok5228lp4qv'
const TOOL_URL  = 'https://sf-tech-debt-assessor-production.up.railway.app'

const CERTS = [
  'Certified Application Architect',
  'Certified System Architect',
  'Agentforce Specialist',
  'Agentforce Sales Consultant',
  'Agentforce Service Consultant',
  'AI Associate',
  'Data 360 Consultant',
  'OmniStudio Consultant',
  'Experience Cloud Consultant',
  'Platform Integration Architect',
  'Platform Data Architect',
  'Platform Sharing & Visibility Architect',
  'Platform Development Lifecycle & Deployment Architect',
  'Platform Identity & Access Management Architect',
  'Platform Developer',
  'Platform App Builder',
  'Platform Administrator',
  'Platform Administrator II',
  'Accredited Agentforce Health Professional',
]

const SKILLS = [
  { icon: '🏗️', title: 'Technical Architecture', desc: 'End-to-end Salesforce solution design — data model, integration patterns, scalability, and multi-cloud strategy.' },
  { icon: '🤖', title: 'Agentforce & AI', desc: 'Designing autonomous agent architectures, prompt engineering, AI governance frameworks, and Data Cloud integration.' },
  { icon: '📋', title: 'Platform Governance', desc: 'Org health assessment, technical debt remediation, release management, and long-term platform health strategies.' },
  { icon: '🔒', title: 'Security & Compliance', desc: 'Sharing model design, identity & access management, MFA enforcement, and security health reviews.' },
  { icon: '⚡', title: 'Performance & Scalability', desc: 'Governor limit strategy, async architecture, platform cache, and large-org performance tuning.' },
  { icon: '🔗', title: 'Integration Architecture', desc: 'API-led connectivity, event-driven architecture, Named Credentials, and external system design.' },
]

export default function App() {
  return (
    <div className="site">

      {/* ── NAV ── */}
      <nav className="nav">
        <span className="nav-brand">OrgClarity<span className="nav-ai">.ai</span></span>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#tool">Tool</a>
          <a href="#certs">Certifications</a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="nav-cta">Connect</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-inner">
          <p className="hero-name">Steven Bilgram</p>
          <p className="hero-eyebrow">Hands-On Salesforce Technical Architect</p>
          <h1 className="hero-title">
            Clarity for your<br />Salesforce org.
          </h1>
          <p className="hero-sub">
            Salesforce Technical Architect specializing in Agentforce, platform governance, and org health.
            12+ years · 19 certifications · Agentblazer Legend 2025 & 2026 · Certified Application Architect & Certified System Architect.
          </p>
          <div className="hero-actions">
            <a href={TOOL_URL} target="_blank" rel="noreferrer" className="btn-primary">Run a Free Assessment</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="btn-secondary">LinkedIn</a>
            <a href={TRAILHEAD} target="_blank" rel="noreferrer" className="btn-secondary">Trailhead</a>
          </div>
        </div>
        <div className="hero-stats">
          {[
            { value: '12+', label: 'Years of Salesforce Experience' },
            { value: '19', label: 'Salesforce Certifications' },
            { value: '25+', label: 'Years of Technical Expertise' },
          ].map(s => (
            <div className="stat" key={s.label}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section" id="about">
        <div className="section-inner">
          <h2 className="section-title">About</h2>
          <p className="about-text">
            I'm Steven Bilgram, a Salesforce Technical Architect with over 12 years of experience
            designing, building, and governing enterprise Salesforce platforms. I specialize in technical architecture,
            Agentforce and AI readiness, platform governance, and org health — helping organizations build
            Salesforce orgs that are secure, scalable, and built to last.
          </p>
          <p className="about-text">
            I built the SF Tech Debt Assessor — a free, read-only tool that automatically scans any Salesforce
            org across 390 checks in 23 categories and delivers a scored, actionable health report in under
            5 minutes. No manual work, no guesswork.
          </p>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="section section-alt" id="skills">
        <div className="section-inner">
          <h2 className="section-title">Areas of Expertise</h2>
          <div className="skills-grid">
            {SKILLS.map(s => (
              <div className="skill-card" key={s.title}>
                <span className="skill-icon">{s.icon}</span>
                <h3 className="skill-title">{s.title}</h3>
                <p className="skill-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOL ── */}
      <section className="section" id="tool">
        <div className="section-inner">
          <h2 className="section-title">SF Tech Debt Assessor</h2>
          <p className="section-sub">
            A free, read-only web app that connects to any Salesforce org via OAuth and runs a comprehensive
            automated health assessment — no manual work required.
          </p>
          <div className="tool-card">
            <div className="tool-left">
              <div className="tool-stats">
                {[
                  { value: '390', label: 'Checks' },
                  { value: '23', label: 'Categories' },
                  { value: '100%', label: 'Read-Only' },
                  { value: '< 5 min', label: 'To Complete' },
                ].map(s => (
                  <div className="tool-stat" key={s.label}>
                    <span className="tool-stat-value">{s.value}</span>
                    <span className="tool-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
              <ul className="tool-features">
                {[
                  'Scores every category out of 100 with Critical / High / Medium / Low findings',
                  'Drill down to the exact records, users, rules, or classes causing each issue',
                  'Export to PDF, Excel, CSV, or a 4-phase Remediation Roadmap',
                  'Covers Code Quality, Security, Agentforce/AI readiness, Service Cloud, OmniStudio, and more',
                  'No data stored — all results live in your browser session only',
                ].map(f => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href={TOOL_URL} target="_blank" rel="noreferrer" className="btn-primary">Launch the Assessor →</a>
            </div>
            <div className="tool-right">
              <h3>How to Run an Assessment</h3>
              <ol className="tool-steps">
                {[
                  { step: '1', title: 'Register a Connected App', desc: 'Create a Connected App or External Client App in your Salesforce org Setup. Takes ~5 minutes. Full instructions are inside the app.' },
                  { step: '2', title: 'Open the App', desc: 'Go to the assessor URL. Enter your org URL, Consumer Key, and Consumer Secret from the app you just created.' },
                  { step: '3', title: 'Authenticate via OAuth', desc: 'Click Connect to Salesforce, log in with your credentials, and click Allow. The assessment starts automatically.' },
                  { step: '4', title: 'Review & Export', desc: 'Explore findings by category, drill into affected records, and export a PDF report or Remediation Roadmap.' },
                ].map(s => (
                  <li key={s.step} className="tool-step">
                    <span className="step-num">{s.step}</span>
                    <div>
                      <strong>{s.title}</strong>
                      <p>{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="section section-alt" id="certs">
        <div className="section-inner">
          <h2 className="section-title">19 Salesforce Certifications</h2>
          <p className="section-sub">Including Certified Application Architect and Certified System Architect — Salesforce's top architecture credentials. Agentblazer Legend 2025 & 2026 · 935 Badges.</p>
          <div className="certs-grid">
            {CERTS.map((c, i) => (
              <div className="cert-badge" key={c}>
                {i === 0 && <span className="cert-star">★</span>}
                {c}
              </div>
            ))}
          </div>
          <a href={TRAILHEAD} target="_blank" rel="noreferrer" className="btn-secondary" style={{ marginTop: '32px', display: 'inline-block' }}>
            View Trailhead Profile →
          </a>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="section-inner">
          <h2 className="cta-title">Ready to assess your org?</h2>
          <p className="cta-sub">Run a free 390-check assessment in under 5 minutes — no installation, no data stored.</p>
          <div className="hero-actions">
            <a href={TOOL_URL} target="_blank" rel="noreferrer" className="btn-primary">Run a Free Assessment</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="btn-secondary">Connect on LinkedIn</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <span>© 2026 Steven Bilgram · OrgClarity.ai</span>
        <span>Independent tool — not affiliated with or endorsed by Salesforce, Inc.</span>
      </footer>

    </div>
  )
}
