import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollToTop } from '../utils/smoothScroll';

/* ---------- Small helper components inside the same file ---------- */

const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full backdrop-blur-md bg-black/40 fixed top-0 z-40 transition-all duration-500 ease-out ${
        scrolled ? 'bg-black/60 shadow-2xl' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/emblem.png" 
            alt="The Guild" 
            className="w-10 h-10 rounded-md"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <span className="text-white text-lg md:text-xl tracking-wide">THE GUILD</span>
        </Link>
        <div className="hidden md:flex gap-6 text-gray-300">
          <Link to="/services" className="hover:text-white transition-colors duration-300 text-lg">SERVICES</Link>
          <Link to="/portfolio" className="hover:text-white transition-colors duration-300 text-lg">PORTFOLIO</Link>
          <Link to="/about" className="hover:text-white transition-colors duration-300 text-lg">ABOUT</Link>
          <Link to="/contact" className="hover:text-white transition-colors duration-300 text-lg">CONTACT</Link>
        </div>
        <Link 
          to="/contact" 
          className="hidden md:inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary text-white transition-all duration-300 hover:scale-105 hover:shadow-neon"
        >
          <span className="text-base">WORK WITH US</span>
        </Link>
      </div>
    </motion.nav>
  );
};

const Hero = () => (
  <section className="min-h-[72vh] flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-dark -z-10" />
    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>

    <div className="max-w-6xl mx-auto px-6 py-28 text-center">
      <motion.img
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
        src="/emblem.png"
        alt="The Guild Emblem"
        className="mx-auto w-28 h-28 mb-6"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />

      <motion.h1
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight"
      >
        <span className="text-white">THE GUILD</span>
        <br />
        <span className="text-primary drop-shadow-[0_0_25px_rgba(239,68,68,0.6)]">CRAFTING</span>{' '}
        <span className="text-secondary drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]">DIGITAL</span>
        <br />
        <span className="text-white">PRODUCTS</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
      >
        WE BUILD PERFORMANT WEB & MOBILE EXPERIENCES, BEAUTIFUL BRAND SYSTEMS, AND IMMERSIVE 3D INTERFACES — WITH PRECISION AND CRAFT.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="mt-8 flex items-center justify-center gap-4"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link 
            to="/contact" 
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary text-white transition-all duration-500 ease-out hover:shadow-neon text-base md:text-lg cursor-pointer"
            style={{ pointerEvents: 'auto', zIndex: 20, position: 'relative', cursor: 'pointer' }}
          >
            START PROJECT
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link 
            to="/portfolio" 
            className="px-6 py-3 rounded-xl border-2 border-secondary/50 text-secondary hover:border-secondary hover:bg-secondary/10 transition-all duration-500 ease-out hover:shadow-blue-glow text-base md:text-lg cursor-pointer"
            style={{ pointerEvents: 'auto', zIndex: 20, position: 'relative', cursor: 'pointer' }}
          >
            VIEW PORTFOLIO
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-left text-gray-300"
      >
        <Stat label="Years" value="4+" index={0} />
        <Stat label="Projects" value="30+" index={1} />
        <Stat label="Clients" value="20+" index={2} />
        <Stat label="Expertise" value="Web · Mobile · AI" index={3} />
      </motion.div>
    </div>
  </section>
);

const Stat = ({ label, value, index }) => {
  const isRed = index % 2 === 0;
  const colorClass = isRed ? 'text-primary' : 'text-secondary';
  const borderClass = isRed ? 'border-primary/20 hover:border-primary/50' : 'border-secondary/20 hover:border-secondary/50';
  const glowClass = isRed ? 'hover:shadow-neon' : 'hover:shadow-blue-glow';
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`bg-white/3 p-4 rounded-xl backdrop-blur-sm transition-all duration-300 border ${borderClass} ${glowClass}`}
    >
      <div className={`text-2xl md:text-3xl ${colorClass}`}>{value}</div>
      <div className="text-sm md:text-base text-gray-300 uppercase">{label.toUpperCase()}</div>
    </motion.div>
  );
};

const services = [
  { title: 'Web Development', desc: 'Fast, accessible, SEO-friendly websites using Next.js and modern tooling.' },
  { title: 'App Development', desc: 'React Native & cross-platform apps with clean architecture.' },
  { title: 'AI & Automation', desc: 'Integrations, pipelines, intelligent features and automation.' },
  { title: 'Brand & Design', desc: 'Brand systems, logos, motion and UI/UX.' },
];

const Services = () => (
  <section id="services" className="py-20">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
        <h2 className="text-3xl md:text-4xl mb-6">
          <span className="text-primary drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">SERVICES</span>
        </h2>
        <p className="text-base md:text-lg text-gray-300 max-w-2xl mb-8 leading-relaxed">WE FOCUS ON A SMALL SET OF HIGH-IMPACT SERVICES SO EVERY PROJECT RECEIVES CRAFTSMANSHIP AND DEPTH.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s, index) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
            whileHover={{ 
              y: -6,
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className={`p-6 rounded-2xl bg-white/3 backdrop-blur-sm transition-all duration-500 ease-out border ${
              index % 2 === 0 
                ? 'border-primary/20 hover:border-primary/50 hover:shadow-neon' 
                : 'border-secondary/20 hover:border-secondary/50 hover:shadow-blue-glow'
            }`}
          >
            <h3 className={`text-lg md:text-xl mb-2 ${index % 2 === 0 ? 'text-primary' : 'text-secondary'}`}>
              {s.title.toUpperCase()}
            </h3>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">{s.desc.toUpperCase()}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const projects = [
  { title: 'Nebula UI', img: '/projects/nebula.png', desc: 'Design system and marketing site for a crypto dashboard.' },
  { title: 'Aurora Shop', img: '/projects/aurora.png', desc: 'E-commerce front end with headless CMS and fast checkout.' },
  { title: 'Voyager App', img: '/projects/voyager.png', desc: 'Cross-platform travel app with offline sync.' },
];

const Portfolio = () => (
  <section id="portfolio" className="py-20 bg-gradient-to-b from-transparent to-black/40">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
        <h2 className="text-3xl md:text-4xl mb-6">
          <span className="text-primary drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">SELECTED</span>{' '}
          <span className="text-secondary drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">WORK</span>
        </h2>
        <p className="text-base md:text-lg text-gray-300 mb-8">RECENT PROJECTS ACROSS WEB, MOBILE & BRAND.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, index) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
            whileHover={{ 
              scale: 1.02,
              y: -10,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className={`block rounded-2xl overflow-hidden bg-white/4 backdrop-blur-sm transition-all duration-500 ease-out border ${
              index % 2 === 0 
                ? 'border-primary/20 hover:border-primary/50 hover:shadow-neon' 
                : 'border-secondary/20 hover:border-secondary/50 hover:shadow-blue-glow'
            }`}
          >
            <div 
              className={`h-40 bg-[length:cover] bg-center transition-transform duration-700 ease-out hover:scale-110 ${
                index % 2 === 0 
                  ? 'bg-gradient-to-br from-primary/20 to-transparent' 
                  : 'bg-gradient-to-br from-secondary/20 to-transparent'
              }`} 
              style={{ 
                backgroundImage: `url(${p.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              onError={(e) => {
                e.target.style.backgroundImage = 'none';
              }}
            />
            <div className="p-4">
              <h3 className="text-lg md:text-xl text-white">{p.title.toUpperCase()}</h3>
              <p className="text-sm md:text-base text-gray-300 mt-2 leading-relaxed">{p.desc.toUpperCase()}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
        <h2 className="text-3xl md:text-4xl mb-4">
          <span className="text-primary drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">ABOUT</span>{' '}
          <span className="text-white">THE</span>{' '}
          <span className="text-secondary drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">GUILD</span>
        </h2>
        <p className="text-base md:text-lg text-gray-300 mb-4 leading-relaxed">WE'RE A SMALL COLLECTIVE OF ENGINEERS, DESIGNERS AND CREATORS WHO SHIP THOUGHTFUL, LONG-LASTING PRODUCT EXPERIENCES. WE TREAT CODE AS CRAFT AND DESIGN AS A DISCIPLINE — EVERY DETAIL MATTERS.</p>

        <ul className="text-base md:text-lg text-gray-300 space-y-2 leading-relaxed">
          <li><span className="text-primary">•</span> CRAFT-FIRST ENGINEERING</li>
          <li><span className="text-secondary">•</span> FAST & ACCESSIBLE PRODUCTS</li>
          <li><span className="text-primary">•</span> SIMPLE PRICING, CLEAR PROCESS</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
        whileHover={{ scale: 1.02, y: -5 }}
        className="bg-white/4 p-6 rounded-2xl backdrop-blur-sm transition-all duration-500 ease-out border border-secondary/20 hover:border-secondary/50 hover:shadow-blue-glow"
      >
        <h4 className="text-secondary text-lg md:text-xl mb-3">OUR PROCESS</h4>
        <ol className="text-base md:text-lg text-gray-300 list-decimal list-inside space-y-2 leading-relaxed">
          <li>DISCOVERY & ROADMAP</li>
          <li>DESIGN & PROTOTYPES</li>
          <li>SHIP & ITERATE</li>
        </ol>
      </motion.div>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo - integrate with EmailJS or your backend)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-black/30 to-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <h2 className="text-3xl md:text-4xl mb-6">
            <span className="text-primary drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">LET'S BUILD</span>{' '}
            <span className="text-secondary drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">SOMETHING</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-12 leading-relaxed">TELL US ABOUT YOUR PROJECT — OR JUST SAY HI. WE REPLY FAST.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl md:text-3xl mb-6 text-white">GET IN TOUCH</h3>
              <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
                READY TO START YOUR PROJECT? REACH OUT TO US THROUGH ANY OF THESE CHANNELS.
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href="mailto:contact@theguild.com"
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/4 border border-primary/20 hover:border-primary/50 hover:bg-white/6 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <span className="text-primary text-xl">@</span>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">EMAIL</div>
                  <div className="text-base md:text-lg text-white">CONTACT@THEGUILD.COM</div>
                </div>
              </motion.a>

              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/4 border border-secondary/20 hover:border-secondary/50 hover:bg-white/6 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                  <span className="text-secondary text-xl">📞</span>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">PHONE</div>
                  <div className="text-base md:text-lg text-white">+1 (234) 567-890</div>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/4 border border-green-500/20 hover:border-green-500/50 hover:bg-white/6 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <span className="text-green-400 text-xl">💬</span>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">WHATSAPP</div>
                  <div className="text-base md:text-lg text-white">CHAT WITH US</div>
                </div>
              </motion.a>

              <motion.div
                className="p-4 rounded-xl bg-white/4 border border-white/10"
              >
                <div className="text-xs text-gray-400 mb-3">SOCIAL MEDIA</div>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary/20 border border-primary/20 hover:border-primary/50 transition-all"
                  >
                    <span className="text-primary text-lg">G</span>
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-secondary/20 border border-secondary/20 hover:border-secondary/50 transition-all"
                  >
                    <span className="text-secondary text-lg">L</span>
                  </motion.a>
                  <motion.a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary/20 border border-primary/20 hover:border-primary/50 transition-all"
                  >
                    <span className="text-primary text-lg">T</span>
                  </motion.a>
                  <motion.a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-secondary/20 border border-secondary/20 hover:border-secondary/50 transition-all"
                  >
                    <span className="text-secondary text-lg">I</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4"
          >
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="NAME"
            className="p-3 rounded-xl bg-white/4 text-white placeholder:text-gray-400 col-span-1 md:col-span-1 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-primary border border-primary/20 focus:border-primary/50 text-base"
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="EMAIL"
            className="p-3 rounded-xl bg-white/4 text-white placeholder:text-gray-400 col-span-1 md:col-span-1 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-secondary border border-secondary/20 focus:border-secondary/50 text-base"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="MESSAGE"
            rows={4}
            className="p-3 rounded-xl bg-white/4 text-white placeholder:text-gray-400 md:col-span-2 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-primary border border-primary/20 focus:border-primary/50 resize-none text-base"
          />
          <div className="md:col-span-2 flex items-center gap-4">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary via-red-600 to-secondary text-white transition-all duration-500 ease-out hover:shadow-[0_0_40px_rgba(239,68,68,0.6)] relative overflow-hidden group"
            >
              <span className="relative z-10 text-base md:text-lg">SEND MESSAGE</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-blue-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.button>
            <motion.a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-3 rounded-xl border-2 border-secondary/50 text-secondary hover:border-secondary hover:bg-secondary/10 transition-all duration-500 ease-out hover:shadow-blue-glow"
            >
              <span className="text-base">CHAT ON WHATSAPP</span>
            </motion.a>
          </div>
        </motion.form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="py-8 border-t border-white/6 mt-12"
  >
    <div className="max-w-6xl mx-auto px-6 text-gray-400 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img 
          src="/emblem.png" 
          alt="emblem" 
          className="w-8 h-8"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div className="text-sm md:text-base">© {new Date().getFullYear()} THE GUILD</div>
      </div>

      <div className="text-sm md:text-base">BUILT WITH REACT · TAILWIND · FRAMER MOTION</div>
    </div>
  </motion.footer>
);

/* ---------- Main export ---------- */

export default function HomePage() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="bg-dark min-h-screen text-white font-arcade">
      <Nav />

      <main className="pt-20">
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />

        <div className="max-w-6xl mx-auto px-6">
          <Footer />
        </div>
      </main>
    </div>
  );
}
