// ==============================================
// HERO SECTION
// ==============================================
export const HERO = {
  title: {
    start: "We Build ",
    accent: "Digital Experiences",
    end: " That Matter"
  },
  subtitle: "Web Development & UI/UX Design experts crafting stunning, high-performance applications for forward-thinking clients.",
  cta: {
    primary: "Hire Us",
    secondary: "View Our Work"
  },
  stats: [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "100%", label: "Satisfaction" },
    { number: "24/7", label: "Support" }
  ]
};

// ==============================================
// SERVICES SECTION
// ==============================================
export const SERVICES = {
  heading: {
    title: "Our Services",
    subtitle: "We offer comprehensive solutions to bring your ideas to life"
  },
  items: [
    {
      id: "web-dev",
      icon: "FaCode",
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Node.js, and more. Fast, scalable, and secure.",
      features: [
        "React & Next.js",
        "Responsive Design",
        "API Integration",
        "Performance Optimization"
      ]
    },
    {
      id: "ui-ux",
      icon: "FaPaintBrush",
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love. We create experiences that are both functional and delightful.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems"
      ]
    },
    {
      id: "branding",
      icon: "FaBullhorn",
      title: "Branding",
      description: "Stand out from the crowd with a unique brand identity. Logos, color schemes, and complete brand guidelines.",
      features: [
        "Logo Design",
        "Brand Strategy",
        "Visual Identity",
        "Style Guides"
      ]
    },
    {
      id: "mobile-dev",
      icon: "FaMobileAlt",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android. Built with React Native, Flutter, and modern mobile technologies.",
      features: [
        "iOS & Android Apps",
        "React Native",
        "Flutter Development",
        "App Store Optimization"
      ]
    }
  ]
};

// ==============================================
// PROJECTS SECTION
// ==============================================
export const PROJECTS = {
  heading: {
    title: "Our Projects",
    subtitle: "Check out some of our recent work"
  },
  items: [
    {
      id: "ecommerce",
      title: "E-Commerce Platform",
      description: "A full-featured online store with payment integration, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
      github: "#"
    },
    {
      id: "saas",
      title: "SaaS Dashboard",
      description: "Analytics dashboard with real-time data visualization and user management system.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      link: "#",
      github: "#"
    },
    {
      id: "portfolio",
      title: "Portfolio Website",
      description: "Modern portfolio site with smooth animations and responsive design for a creative agency.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      tags: ["React", "Framer Motion", "CSS"],
      link: "#",
      github: "#"
    },
    {
      id: "landing",
      title: "Mobile App Landing",
      description: "High-converting landing page for a mobile application with interactive elements.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      tags: ["React", "Tailwind", "Animation"],
      link: "#",
      github: "#"
    }
  ]
};

// ==============================================
// CONTACT SECTION
// ==============================================
export const CONTACT = {
  heading: {
    title: "Get In Touch",
    subtitle: "Have a project in mind? Let's work together to create something amazing"
  },
  info: {
    heading: "Let's talk about your project",
    description: "We're always excited to hear about new projects and opportunities. Whether you need a complete web application or just want to discuss an idea, we're here to help bring your vision to life.",
    details: [
      {
        icon: "email",
        label: "Email",
        value: "contact@theguild.com"
      },
      {
        icon: "time",
        label: "Response Time",
        value: "Within 24 hours"
      },
      {
        icon: "location",
        label: "Location",
        value: "Remote / Worldwide"
      }
    ]
  },
  form: {
    fields: {
      name: {
        label: "Your Name",
        placeholder: "John Doe"
      },
      email: {
        label: "Your Email",
        placeholder: "john@example.com"
      },
      message: {
        label: "Your Message",
        placeholder: "Tell us about your project..."
      }
    },
    button: {
      default: "Send Message",
      sending: "Sending..."
    },
    messages: {
      success: "Message sent successfully! We'll get back to you soon.",
      error: "Failed to send message. Please try again or email us directly."
    }
  }
};

// ==============================================
// FOOTER SECTION
// ==============================================
export const FOOTER = {
  brand: {
    name: "The Guild",
    description: "Creating digital experiences that matter. Web development and design services for modern businesses."
  },
  links: {
    title: "Quick Links",
    items: [
      { name: "Home", link: "#home" },
      { name: "Services", link: "#services" },
      { name: "Projects", link: "#projects" },
      { name: "Contact", link: "#contact" }
    ]
  },
  social: {
    title: "Connect With Us",
    items: [
      { icon: "FaGithub", url: "https://github.com", label: "GitHub" },
      { icon: "FaLinkedin", url: "https://linkedin.com", label: "LinkedIn" },
      { icon: "FaTwitter", url: "https://twitter.com", label: "Twitter" },
      { icon: "FaDribbble", url: "https://dribbble.com", label: "Dribbble" }
    ]
  },
  copyright: {
    year: new Date().getFullYear(),
    text: "The Guild. All rights reserved.",
    madeWith: "Made with"
  }
};

// ==============================================
// NAVBAR
// ==============================================
export const NAVBAR = {
  brand: {
    name: "The Guild",
    nameAccent: "The",
    nameRest: " Guild"
  },
  links: [
    { name: "Home", link: "#home" },
    { name: "Services", link: "#services" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" }
  ]
};

