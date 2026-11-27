# Developer Portfolio — Next.js + TypeScript + Tailwind CSS
```
npm install
npm run dev   # http://localhost:3000
```
- Content: `data/content.ts` · Resume: replace `public/resume.pdf`.
- Theme colours: CSS variables in `app/globals.css` (dark/light), mapped to Tailwind colours in `tailwind.config.ts`
  (bg, card, line, txt, mut, accent, violet, amber, kw, str, fn). Change a colour once and the whole site updates.
- Contact form uses mailto; swap `submit()` in `components/ContactForm.tsx` for Formspree/Resend/your API.
