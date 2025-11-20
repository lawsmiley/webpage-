# 🚀 Next.js Setup Instructions for The Guild

## ⚠️ Important: Migration from Vite to Next.js

You currently have a **Vite + React** setup. To use Next.js, you need to migrate.

---

## 📋 Option 1: Fresh Next.js Setup (Recommended)

### Step 1: Create New Next.js Project

```bash
# In a new directory
npx create-next-app@latest the-guild --typescript --tailwind --app --no-src-dir
cd the-guild
```

### Step 2: Install Dependencies

```bash
npm install framer-motion @tabler/icons-react @emailjs/browser
```

### Step 3: Copy Files

Copy these files from your current project:
- `app/` folder (all pages)
- `components/` folder (all components)
- `constants/` folder (content.js)
- `public/` folder (assets)
- `tailwind.config.js`
- `next.config.js`
- `jsconfig.json`

### Step 4: Update Tailwind Config

Make sure `tailwind.config.js` includes:
```javascript
content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
]
```

### Step 5: Run Development Server

```bash
npm run dev
```

Visit: http://localhost:3000

---

## 📋 Option 2: Keep Current Setup, Add Pages

If you want to keep Vite, we can:
1. Add React Router for multi-page routing
2. Create the 5 pages you want
3. Keep all current styling

**This is faster but less SEO-friendly.**

---

## 🎯 What I've Created

I've created the **Next.js structure** for you:

### ✅ Files Created:
- `next.config.js` - Next.js configuration
- `next-package.json` - Dependencies for Next.js
- `app/layout.js` - Root layout
- `app/globals.css` - Global styles (guild-themed)
- `app/page.js` - Home page
- `app/services/page.js` - Services page
- `app/about/page.js` - About page
- `app/portfolio/page.js` - Portfolio page
- `app/contact/page.js` - Contact page
- `jsconfig.json` - Path aliases

### 📁 Structure:
```
app/
├── layout.js          ✅ Root layout
├── page.js            ✅ Home
├── services/page.js    ✅ Services
├── about/page.js      ✅ About
├── portfolio/page.js  ✅ Portfolio
└── contact/page.js   ✅ Contact
```

---

## 🔄 Next Steps

### 1. Choose Your Path:
- **A)** Migrate to Next.js (better SEO, production-ready)
- **B)** Enhance current Vite setup (faster, keep current)

### 2. If Choosing Next.js:
```bash
# Create new project
npx create-next-app@latest the-guild --typescript --tailwind --app

# Copy the files I created
# Install dependencies
npm install framer-motion @tabler/icons-react

# Run
npm run dev
```

### 3. Components Needed:
I'll create these components next:
- `components/ServicesPreview.jsx` (for home)
- `components/PortfolioPreview.jsx` (for home)
- `components/ServicesGrid.jsx` (for services page)
- `components/GuildStory.jsx` (for about)
- `components/TeamSection.jsx` (for about)
- `components/ValuesSection.jsx` (for about)
- `components/ProjectGrid.jsx` (for portfolio)
- `components/ContactForm.jsx` (for contact)
- `components/ContactInfo.jsx` (for contact)
- `components/Stats.jsx` (for home)

---

## 🎨 Style Updates

The new `globals.css` includes:
- ✅ Guild gradient text utility
- ✅ Guild glow effects
- ✅ Animated grid background
- ✅ Glass effect utility
- ✅ Deep navy base colors

---

## 💡 Recommendation

**I recommend Option 1 (Next.js)** because:
- ✅ Better SEO (server-side rendering)
- ✅ Faster page loads
- ✅ Image optimization
- ✅ Production-ready
- ✅ Better for agencies

**But if you want to keep Vite**, I can enhance the current setup with React Router and create the 5 pages you want!

---

## ❓ What Would You Like?

1. **"Migrate to Next.js"** - I'll help you set it up completely
2. **"Keep Vite, add pages"** - I'll add React Router and create the 5 pages
3. **"Just create components"** - I'll build all the components you need

**Let me know and I'll proceed!** 🚀

