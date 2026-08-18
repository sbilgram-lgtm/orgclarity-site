# OrgClarity.ai

Personal website for Steven Bilgram — Salesforce Technical Architect.

Live at **https://orgclarity.ai**

---

## About

Static personal site showcasing:
- Background and areas of expertise
- 19 Salesforce certifications including Certified Application Architect & Certified System Architect
- Agentblazer Legend 2025 & 2026
- SF Tech Debt Assessor — a free, read-only Salesforce org health tool

---

## Tech Stack

- React + TypeScript
- Vite
- Deployed on Cloudflare Pages (auto-deploys on push to `main`)

---

## Local Development

```bash
npm install
npm run dev
```

Open **http://localhost:5173**

---

## Deployment

Push to `main` — Cloudflare Pages builds and deploys automatically.

```bash
git add src/
git commit -m "Your message"
git push
```

---

## Project Structure

```
src/
  App.tsx     # All content — certs, skills, copy, links
  App.css     # All styles
  index.css   # Body reset only
```

All site content lives in `App.tsx`. To update certifications, stats, skills, or links, edit the constants at the top of that file.

---

*Built by Steven Bilgram — sbilgram-lgtm/orgclarity-site*
