# 🏰 THE GUILD - Website Blueprint

## 🎯 Vision
A clean, modular, anime-inspired tech agency website with cyber-tech aesthetics.

---

## 🎨 Design System

### Colors
- **Base**: Black (#0a0a0a) / Deep Navy (#0a0f1a)
- **Accent**: Neon Blue (#3b82f6) or Purple (#8b5cf6)
- **Text**: White (#ffffff)
- **Secondary**: Gray (#9ca3af)

### Typography
- **Headings**: Poppins (Bold/Extrabold)
- **Body**: Inter (Regular/Medium)
- **Code**: Monospace

### Aesthetic
- Minimalistic
- Subtle anime/guild symbolism
- Futuristic tech feel
- Clean, powerful
- Not cartoonish - symbolic

---

## 📄 Pages Structure

### 1. Home Page (`/`)
- Hero with Guild emblem
- Tagline: "We build futuristic web & mobile experiences"
- CTA: "Build With The Guild"
- 3 key services preview
- Small portfolio preview (3 projects)
- Stats section

### 2. Services Page (`/services`)
- Full service cards:
  - Web Development
  - App Development
  - Branding & Creative
  - AI & Automation
  - Game Dev / 3D Experiences (optional)

### 3. About Page (`/about`)
- The Guild story
- Team section (guild-style)
- Values: Craftsmanship, Precision, Innovation
- Mission statement

### 4. Portfolio Page (`/portfolio`)
- Projects grid
- Each card:
  - Thumbnail
  - Title
  - Short description
  - Tools used
  - Link to project

### 5. Contact Page (`/contact`)
- Contact form (name, email, message)
- Social links
- WhatsApp CTA
- Location info

---

## 🧱 Component Structure

### Shared Components
- `Navbar.jsx` - Navigation with guild logo
- `Footer.jsx` - Footer with links
- `Hero.jsx` - Hero section
- `ServiceCard.jsx` - Reusable service card
- `ProjectCard.jsx` - Reusable project card
- `SectionWrapper.jsx` - Section container
- `Button.jsx` - CTA button

### Page-Specific
- Home: Hero, ServicesPreview, PortfolioPreview
- Services: ServiceGrid
- About: Story, Team, Values
- Portfolio: ProjectGrid
- Contact: ContactForm, SocialLinks

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: @tabler/icons-react
- **Images**: Next.js Image
- **Forms**: React Hook Form (optional)

---

## 📋 Development Rules

1. ✅ Keep everything modular (small components)
2. ✅ No messy code — comment important parts
3. ✅ Use Tailwind everywhere
4. ✅ Use Framer Motion for smooth animations
5. ✅ Minimal text, focus on strong visuals
6. ✅ Use Next.js Image for all images
7. ✅ Keep pages under 300 lines
8. ✅ Reuse components for cards/sections
9. ✅ Follow dark theme by default
10. ✅ Design like a futuristic guild

---

## 🎯 Content Strategy

### Home Page
- **Hero**: "The Guild" + emblem + tagline
- **Services**: 3 key services (preview)
- **Portfolio**: 3 featured projects
- **CTA**: "Build With The Guild"

### Services Page
- Detailed service cards
- Each with icon, title, description, features
- Clear CTAs

### About Page
- Guild origin story
- Team members (even if solo, present as guild)
- Core values
- Mission

### Portfolio Page
- Grid of all projects
- Filter by service type (optional)
- Project details on hover/click

### Contact Page
- Simple form
- Social media links
- WhatsApp button
- Response time info

---

## 🚀 Implementation Priority

1. **Phase 1**: Home page + Navbar + Footer
2. **Phase 2**: Services page
3. **Phase 3**: About page
4. **Phase 4**: Portfolio page
5. **Phase 5**: Contact page + form
6. **Phase 6**: Polish + animations

---

## 📦 Assets Needed

- Guild emblem/logo (PNG/SVG)
- Project thumbnails
- Team photos (optional)
- Background patterns/textures (optional)

---

## ✨ Special Features

- Smooth page transitions
- Scroll animations
- Hover effects on cards
- Loading states
- Form validation
- Mobile-responsive
- Dark mode (default)

---

**Ready to build! 🏰⚔️**

