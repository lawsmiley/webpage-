# 📝 Content Management

All website content is stored here for easy updates. **No need to dig through component files!**

## 📁 Files

- **`content.js`** - All text, headings, descriptions, links, and data

## ✏️ How to Update Content

### 1. Update Brand Name

```javascript
// In content.js
export const NAVBAR = {
  brand: {
    nameAccent: "YourName",  // ← Change this
    nameRest: " & Co."        // ← And this
  }
}

export const FOOTER = {
  brand: {
    name: "theguild",   // ← Change this too
  }
}
```

### 2. Update Hero Section

```javascript
export const HERO = {
  title: {
    start: "We Build ",
    accent: "Digital Experiences",  // ← The highlighted text
    end: " That Matter"
  },
  subtitle: "Your new subtitle here...",
  cta: {
    primary: "Hire Us",
    secondary: "View Our Work"
  }
}
```

### 3. Update Services

```javascript
export const SERVICES = {
  items: [
    {
      id: "web-dev",
      icon: "FaCode",  // Icon name (don't change unless adding new icons)
      title: "Your Service",
      description: "Service description...",
      features: [
        "Feature 1",
        "Feature 2",
        // Add more...
      ]
    }
  ]
}
```

### 4. Update Projects

```javascript
export const PROJECTS = {
  items: [
    {
      id: "project1",
      title: "Your Project",
      description: "Project description...",
      image: "https://your-image-url.jpg",  // ← Replace with your image
      tags: ["React", "Node.js"],
      link: "https://yourproject.com",      // ← Your live site
      github: "https://github.com/you/repo" // ← Your repo
    }
  ]
}
```

### 5. Update Contact Info

```javascript
export const CONTACT = {
  info: {
    details: [
      {
        icon: "email",
        label: "Email",
        value: "your@email.com"  // ← Change this
      },
      {
        icon: "location",
        label: "Location",
        value: "Your City"       // ← Change this
      }
    ]
  }
}
```

### 6. Update Social Links

```javascript
export const FOOTER = {
  social: {
    items: [
      { 
        icon: "FaGithub", 
        url: "https://github.com/yourusername",  // ← Your GitHub
        label: "GitHub" 
      },
      { 
        icon: "FaLinkedin", 
        url: "https://linkedin.com/in/you",      // ← Your LinkedIn
        label: "LinkedIn" 
      }
      // Add more or remove...
    ]
  }
}
```

## 🎨 Available Icons

The following icons are available (defined in components):

- **Services**: `FaCode`, `FaPaintBrush`, `FaBullhorn`
- **Social**: `FaGithub`, `FaLinkedin`, `FaTwitter`, `FaDribbble`
- **Contact**: `email`, `time`, `location` (SVG icons)

To add new icons:
1. Import from `react-icons/fa` in the component
2. Add to the `iconMap` object
3. Use the icon name in content.js

## ✅ After Making Changes

1. Save `content.js`
2. The site auto-refreshes (if dev server is running)
3. Check the site to see your changes!

## 🚀 Quick Update Checklist

- [ ] Brand name (NAVBAR, FOOTER)
- [ ] Hero title and subtitle
- [ ] Services (update all 3)
- [ ] Projects (replace with your real projects)
- [ ] Contact email address
- [ ] Social media links
- [ ] Footer links

## 💡 Tips

- **Keep descriptions short** - 1-2 sentences max
- **Use real project images** - High quality screenshots
- **Update stats** in HERO.stats (50+ Projects, etc.)
- **Test all links** after updating

## 🔄 Reverting Changes

If you make a mistake, just undo in your editor (Ctrl+Z) or restore from Git:
```bash
git checkout src/constants/content.js
```

---

**That's it! Content management is now super easy! 🎉**

