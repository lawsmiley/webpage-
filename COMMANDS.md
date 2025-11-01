# ⚡ Quick Commands Reference

## Development

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Access at: `http://localhost:5173`

### Build for Production
```bash
npm run build
```
Output directory: `dist/`

### Preview Production Build
```bash
npm run preview
```

## Deployment

### Deploy to Vercel (CLI)
```bash
# Install Vercel globally (first time only)
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Deploy to Vercel (Git)
1. Push to GitHub
2. Connect repository on Vercel dashboard
3. Auto-deploy on push

## Useful Commands

### Kill Port (if already in use)
```bash
npx kill-port 5173
```

### Clean Install
```bash
rm -rf node_modules package-lock.json
npm install
```

### Check for Updates
```bash
npm outdated
```

### Update Dependencies
```bash
npm update
```

## EmailJS Setup Commands

1. Visit: https://www.emailjs.com/
2. Create account
3. Add email service
4. Create template with variables: `name`, `email`, `message`
5. Get credentials and update `Contact.jsx`

## Git Commands (if using Git)

### Initialize Repository
```bash
git init
git add .
git commit -m "Initial commit"
```

### Push to GitHub
```bash
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

## Testing Checklist

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Test all sections:
#    - Navbar scroll
#    - Hero buttons
#    - Service cards hover
#    - Project cards
#    - Contact form
#    - Footer links

# 4. Test responsive (Chrome DevTools):
#    - Mobile (375px)
#    - Tablet (768px)
#    - Desktop (1440px)

# 5. Build and preview
npm run build
npm run preview

# 6. Deploy
vercel
```

## File Structure

```
kushal-co-portfolio/
│
├── public/
│   └── favicon.svg              # Site favicon
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation component
│   │   ├── Hero.jsx            # Hero section
│   │   ├── Services.jsx        # Services section
│   │   ├── Projects.jsx        # Projects showcase
│   │   ├── Contact.jsx         # Contact form (EmailJS)
│   │   └── Footer.jsx          # Footer component
│   │
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles + Tailwind
│
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── vercel.json                 # Vercel settings
├── .gitignore                  # Git ignore rules
│
├── README.md                   # Full documentation
├── SETUP.md                    # Quick setup guide
├── FEATURES.md                 # Design & features
└── COMMANDS.md                 # This file
```

## Component Props & Customization

### Updating Content

**Brand Name:**
- `src/components/Navbar.jsx` - Line ~25
- `src/components/Footer.jsx` - Line ~50
- `index.html` - `<title>` tag

**Services:**
- `src/components/Services.jsx` - `services` array (Line ~7)

**Projects:**
- `src/components/Projects.jsx` - `projects` array (Line ~6)

**Contact Info:**
- `src/components/Contact.jsx` - Info section (Line ~95-125)
- `src/components/Contact.jsx` - EmailJS (Line ~31-35)

**Social Links:**
- `src/components/Footer.jsx` - `socialLinks` array (Line ~10)

**Colors:**
- `tailwind.config.js` - `theme.extend.colors` (Line ~10)

## Troubleshooting

### Common Issues

**Problem**: Port 5173 in use
```bash
npx kill-port 5173
npm run dev
```

**Problem**: Module not found
```bash
npm install
```

**Problem**: Build fails
```bash
rm -rf node_modules dist
npm install
npm run build
```

**Problem**: Contact form not working
- Check EmailJS credentials in `Contact.jsx`
- Check browser console for errors
- Verify template variables match

**Problem**: Animations not smooth
- Check browser hardware acceleration
- Reduce motion complexity if needed
- Test on different browsers

## Browser DevTools Shortcuts

### Chrome DevTools
- Open DevTools: `F12` or `Ctrl+Shift+I`
- Mobile View: `Ctrl+Shift+M`
- Inspect Element: `Ctrl+Shift+C`

### Testing Responsive
- `Ctrl+Shift+M` - Toggle device toolbar
- Test on: Mobile S, Mobile L, Tablet, Desktop

## Performance Tips

### Before Deployment
1. Compress images (use TinyPNG)
2. Convert images to WebP
3. Remove console.logs
4. Test build: `npm run build`
5. Check bundle size
6. Test performance (Lighthouse)

### Lighthouse Score Goals
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

Run Lighthouse:
1. Open Chrome DevTools
2. Click "Lighthouse" tab
3. Click "Generate report"

## Version Control

### First Commit
```bash
git init
git add .
git commit -m "feat: initial portfolio setup with React, Tailwind, and Framer Motion"
```

### Subsequent Commits
```bash
git add .
git commit -m "feat: add new project to portfolio"
git push
```

## Resources

- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev
- **Tailwind Docs**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion
- **EmailJS**: https://www.emailjs.com
- **Vercel Docs**: https://vercel.com/docs
- **React Icons**: https://react-icons.github.io/react-icons

## Support

### Getting Help
1. Check console for errors
2. Review documentation files
3. Search issue on Stack Overflow
4. Check library documentation

### Useful Search Terms
- "React Vite deployment"
- "TailwindCSS responsive design"
- "Framer Motion scroll animations"
- "EmailJS React integration"

---

**Quick Start**: `npm install && npm run dev` 🚀

**Deploy**: `vercel` ☁️

**Questions?** Check README.md for detailed info! 📚

