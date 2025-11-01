# 🚀 Quick Setup Guide

## Step 1: Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This will install all required packages:
- React & React DOM
- Vite (build tool)
- TailwindCSS (styling)
- Framer Motion (animations)
- EmailJS (contact form)
- React Icons

## Step 2: Configure EmailJS

**Important**: The contact form requires EmailJS setup.

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Add an email service (Gmail, Outlook, etc.)
4. Create an email template
5. Copy your credentials:
   - Service ID
   - Template ID
   - Public Key

6. Open `src/components/Contact.jsx` and replace these lines (around line 31):

```javascript
await emailjs.sendForm(
  'YOUR_SERVICE_ID',    // ← Replace this
  'YOUR_TEMPLATE_ID',   // ← Replace this
  formRef.current,
  'YOUR_PUBLIC_KEY'     // ← Replace this
);
```

**EmailJS Template Variables:**
Your template should include these variables:
- `{{name}}` - Sender's name
- `{{email}}` - Sender's email
- `{{message}}` - Message content

## Step 3: Run Development Server

```bash
npm run dev
```

Open your browser and visit: `http://localhost:5173`

## Step 4: Customize Content

### Update Brand Name
Search and replace "Kushal & Co." with your brand name in:
- `src/components/Navbar.jsx`
- `src/components/Footer.jsx`
- `index.html` (page title)

### Add Your Projects
Edit `src/components/Projects.jsx`:
- Replace placeholder images with your project screenshots
- Update project titles and descriptions
- Add real GitHub/live demo links

### Update Services
Edit `src/components/Services.jsx`:
- Modify service descriptions
- Update feature lists
- Change icons if needed

### Update Contact Info
Edit `src/components/Contact.jsx` and `src/components/Footer.jsx`:
- Change email address
- Update social media links
- Modify location info

## Step 5: Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## Step 6: Deploy to Vercel

### Method 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel
```

Follow the prompts to:
- Link to your Vercel account
- Configure the project
- Deploy instantly

### Method 2: Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

Your site will be live in ~2 minutes! 🎉

## Troubleshooting

### Port 5173 already in use?
```bash
npx kill-port 5173
```

### Module not found errors?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Contact form not working?
- Check EmailJS credentials
- Verify template variables match
- Check browser console for errors

## Next Steps

1. ✅ Replace all placeholder content
2. ✅ Add your own project images
3. ✅ Configure EmailJS
4. ✅ Test on mobile devices
5. ✅ Deploy to Vercel
6. ✅ Share with clients!

---

Need help? Check the main README.md for detailed documentation.

**Happy coding! 🎨✨**

