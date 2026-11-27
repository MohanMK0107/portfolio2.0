# Developer Portfolio — Next.js + TypeScript + Tailwind CSS

# Developer Portfolio — Next.js + TypeScript
```
npm install
npm run dev   # http://localhost:3000
```
- Content: `data/content.ts` · Resume: replace `public/resume.pdf`.
- Theme colours: CSS variables in `app/globals.css` (dark/light), mapped to Tailwind colours in `tailwind.config.ts`
  (bg, card, line, txt, mut, accent, violet, amber, kw, str, fn). Change a colour once and the whole site updates.
- Contact form uses mailto; swap `submit()` in `components/ContactForm.tsx` for Formspree/Resend/your API.
=======
- All content: `data/content.ts` (name, bio, skills, experience, education, projects, links).
- Resume: replace `public/resume.pdf` with your own PDF (same filename).
- Theme: dark by default, toggle in the navbar (remembered in localStorage).
- Contact form opens the visitor's mail app (mailto). For a real backend, swap `submit()` in `components/ContactForm.tsx` with a fetch to Formspree / Resend / your API.

