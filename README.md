# Kushal & Co. - Portfolio Website

A modern, responsive React website for freelancers built with React, TailwindCSS, and Framer Motion. Features a sleek dark theme with neon cyan accents and smooth animations.

![Kushal & Co.](https://img.shields.io/badge/Status-Ready-00ffe0?style=for-the-badge)

## ✨ Features

- **Modern Tech Stack**: React 18, Vite, TailwindCSS, Framer Motion
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Beautiful entrance and hover animations
- **Dark Theme**: Cyberpunk-inspired dark theme with neon accents
- **Contact Form**: EmailJS integration for contact functionality
- **Smooth Scrolling**: Seamless navigation between sections
- **Professional UI**: Clean, modern interface perfect for showcasing work

## 📦 Sections

1. **Navbar** - Sticky navigation with smooth scroll
2. **Hero** - Eye-catching introduction with CTA buttons
3. **Services** - Three service cards (Web Dev, UI/UX, Branding)
4. **Projects** - Portfolio showcase with 4 project cards
5. **Contact** - Contact form with EmailJS integration
6. **Footer** - Social links and copyright info

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download this project**

2. **Install dependencies**
```bash
npm install
```

3. **Set up EmailJS (for contact form)**
   - Go to [EmailJS](https://www.emailjs.com/)
   - Create a free account
   - Create an email service
   - Create an email template
   - Get your Service ID, Template ID, and Public Key
   - Update `src/components/Contact.jsx` with your credentials:

```javascript
await emailjs.sendForm(
  'YOUR_SERVICE_ID',    // Replace with your service ID
  'YOUR_TEMPLATE_ID',   // Replace with your template ID
  formRef.current,
  'YOUR_PUBLIC_KEY'     // Replace with your public key
);
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
   - Navigate to `http://localhost:5173`

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: '#00ffe0',      // Neon cyan accent
  dark: '#0a0a0a',         // Main background
  'dark-light': '#1a1a1a', // Secondary background
}
```

### Content

1. **Update brand name**: Search for "Kushal & Co." and replace with your brand
2. **Modify services**: Edit `src/components/Services.jsx`
3. **Add real projects**: Update the projects array in `src/components/Projects.jsx`
4. **Change contact info**: Edit `src/components/Contact.jsx` and `src/components/Footer.jsx`

### Images

Replace project images in `src/components/Projects.jsx` with your own:
- Current images are from Unsplash
- Replace URLs with your own hosted images or import local images

## 📱 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🌐 Deploy to Vercel

### Option 1: Using Vercel CLI

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
vercel
```

3. **Follow the prompts** to link your project

### Option 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your Git repository
5. Vercel will auto-detect Vite and configure build settings
6. Click "Deploy"

### Build Settings (Auto-detected by Vercel)

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 📁 Project Structure

```
kushal-co-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **EmailJS** - Email service for contact form
- **React Icons** - Icon library

## 🎯 Performance

- ⚡ Fast page loads with Vite
- 🎨 Optimized animations with Framer Motion
- 📱 Mobile-first responsive design
- ♿ Accessible components

## 💡 Tips for Deployment

1. **Update EmailJS credentials** before deploying
2. **Replace placeholder images** with real project screenshots
3. **Update social media links** in the Footer component
4. **Test on multiple devices** before going live
5. **Add Google Analytics** if needed (in `index.html`)

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill the process using port 5173
npx kill-port 5173
# Then run dev server again
npm run dev
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📄 License

This project is free to use for personal and commercial projects.

## 🤝 Support

For questions or issues:
- Check the code comments
- Review the documentation above
- Search for solutions in the React/Vite/Tailwind docs

## 🎉 Credits

Built with ❤️ by Kushal & Co.

---

**Ready to deploy?** Just run `vercel` and your site will be live in minutes! 🚀

