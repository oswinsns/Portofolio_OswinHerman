import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Mail, Phone, User, MessageSquare } from 'lucide-react';
import { initializeApp, getApps } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB7Y8c_TYffdaZ2ZrHBNwDnQPe0EQ7zkmM",
  authDomain: "tugasbncc-owin.firebaseapp.com",
  databaseURL: "https://tugasbncc-owin-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tugasbncc-owin",
  storageBucket: "tugasbncc-owin.appspot.com",
  messagingSenderId: "162744102388",
  appId: "1:162744102388:web:90227b01b9d33cf0c59da1"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getDatabase(app);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: ''
  });
  const [status, setStatus] = useState({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, comment } = formData;

    if (!name.trim() || !email.trim() || !phone.trim() || !comment.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    const phoneRegex = /^08[0-9]{8,}$/;
    if (!phoneRegex.test(phone)) {
      setStatus({ type: 'error', message: 'Please enter a valid Indonesian phone number (e.g. 08xxxxxxxx).' });
      return;
    }

    const wordsCount = comment.trim().split(/\s+/).length;
    if (wordsCount < 5) {
      setStatus({ type: 'error', message: 'Please enter at least 5 words in your comment.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const sanitizedName = name.replace(/[^a-zA-Z0-9_-]/g, '_');
      await set(ref(db, 'user/' + sanitizedName), {
        USERNAME: name,
        EMAIL: email,
        PHONENUMBER: phone,
        COMMENT: comment,
        TIMESTAMP: new Date().toISOString()
      });

      setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
      setFormData({ name: '', email: '', phone: '', comment: '' });
    } catch (err) {
      console.error('Firebase error:', err);
      setStatus({ type: 'error', message: 'Could not send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="bd-container">
        <h2 className="section-title">
          Get In <span className="serif-italic text-accent">Touch</span>
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--text-color-light)', marginTop: '-1.5rem', marginBottom: '3rem' }}>
          Have a project in mind or want to collaborate? Send me a message!
        </p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: '560px',
            margin: '0 auto',
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid var(--glass-border)',
            borderRadius: '28px',
            padding: '2.5rem',
            boxShadow: '0 20px 50px rgba(140, 122, 107, 0.14)',
          }}
        >
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Name input */}
            <div>
              <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: 'var(--second-color)', marginBottom: '0.4rem' }}>
                Full Name
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem 0.8rem 2.8rem',
                    borderRadius: '14px',
                    border: '1px solid rgba(140, 122, 107, 0.25)',
                    background: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    color: 'var(--second-color)',
                  }}
                />
                <User size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--first-color)' }} />
              </div>
            </div>

            {/* Email input */}
            <div>
              <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: 'var(--second-color)', marginBottom: '0.4rem' }}>
                Email Address
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem 0.8rem 2.8rem',
                    borderRadius: '14px',
                    border: '1px solid rgba(140, 122, 107, 0.25)',
                    background: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    color: 'var(--second-color)',
                  }}
                />
                <Mail size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--first-color)' }} />
              </div>
            </div>

            {/* Phone input */}
            <div>
              <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: 'var(--second-color)', marginBottom: '0.4rem' }}>
                Phone Number (Indonesia)
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="tel"
                  placeholder="08xxxxxxxxxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem 0.8rem 2.8rem',
                    borderRadius: '14px',
                    border: '1px solid rgba(140, 122, 107, 0.25)',
                    background: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    color: 'var(--second-color)',
                  }}
                />
                <Phone size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--first-color)' }} />
              </div>
            </div>

            {/* Comment / Message input */}
            <div>
              <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: 'var(--second-color)', marginBottom: '0.4rem' }}>
                Message
              </label>
              <div style={{ position: 'relative' }}>
                <textarea
                  rows="4"
                  placeholder="Write your message or inquiry here..."
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem 0.8rem 2.8rem',
                    borderRadius: '14px',
                    border: '1px solid rgba(140, 122, 107, 0.25)',
                    background: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    color: 'var(--second-color)',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                  }}
                />
                <MessageSquare size={18} style={{ position: 'absolute', left: '1rem', top: '1.1rem', color: 'var(--first-color)' }} />
              </div>
            </div>

            {/* Status Alert */}
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  background: status.type === 'success' ? 'rgba(74, 222, 128, 0.15)' : 'rgba(248, 113, 113, 0.15)',
                  color: status.type === 'success' ? '#166534' : '#991b1b',
                  border: `1px solid ${status.type === 'success' ? 'rgba(74, 222, 128, 0.3)' : 'rgba(248, 113, 113, 0.3)'}`,
                }}
              >
                {status.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                <span>{status.message}</span>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
              style={{
                justifyContent: 'center',
                width: '100%',
                marginTop: '0.5rem',
                opacity: isSubmitting ? 0.7 : 1,
              }}
            >
              <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
              <Send size={16} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
