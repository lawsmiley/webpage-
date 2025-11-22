import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { CONTACT } from '../constants/content';

const ContactForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-dark-light via-dark-light to-dark border border-white/10 rounded-2xl p-8 space-y-6 backdrop-blur-sm shadow-2xl"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            {CONTACT.form.fields.name.label}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-dark border border-primary/30 rounded-lg focus:outline-none focus:border-primary transition-all duration-300 ease-out text-white"
            placeholder={CONTACT.form.fields.name.placeholder}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            {CONTACT.form.fields.email.label}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-dark border border-primary/30 rounded-lg focus:outline-none focus:border-primary transition-all duration-300 ease-out text-white"
            placeholder={CONTACT.form.fields.email.placeholder}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            {CONTACT.form.fields.message.label}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-3 bg-dark border border-primary/30 rounded-lg focus:outline-none focus:border-primary transition-all duration-300 ease-out text-white resize-none"
            placeholder={CONTACT.form.fields.message.placeholder}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-gradient-to-r from-primary via-red-600 to-secondary text-white font-arcade font-bold rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_rgba(239,68,68,0.6)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-blue-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {isSubmitting ? (
            <>
              <div className="relative z-10 w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span className="relative z-10">{CONTACT.form.button.sending}</span>
            </>
          ) : (
            <>
              <span className="relative z-10">{CONTACT.form.button.default}</span>
              <FaPaperPlane className="relative z-10" />
            </>
          )}
        </button>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/30 rounded-lg p-4"
          >
            <FaCheckCircle />
            <span>{CONTACT.form.messages.success}</span>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/30 rounded-lg p-4"
          >
            <span>⚠️</span>
            <span>{CONTACT.form.messages.error}</span>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;

