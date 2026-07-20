import React, { useState } from 'react';
import './Contact.css';
import { FiArrowUpRight, FiMail, FiSend } from 'react-icons/fi';

function Contact() {
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ text: '', type: '' });
  const [sending, setSending] = useState(false);

  const updateField = ({ target: { name, value } }) => setFields(current => ({ ...current, [name]: value }));
  const submit = async (event) => {
    event.preventDefault();
    if (!Object.values(fields).every(Boolean)) return setStatus({ text: 'Please complete all fields.', type: 'error' });
    if (!process.env.REACT_APP_FIREBASE_DATABASE_URL) return setStatus({ text: 'Email me directly at sarimwaseem84@gmail.com.', type: 'error' });
    setSending(true);
    try {
      const response = await fetch(process.env.REACT_APP_FIREBASE_DATABASE_URL, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(fields) });
      if (!response.ok) throw new Error('Request failed');
      setFields({ name: '', email: '', subject: '', message: '' });
      setStatus({ text: 'Thanks! Your message has been sent.', type: 'success' });
    } catch {
      setStatus({ text: 'Something went wrong. Please email me directly.', type: 'error' });
    } finally { setSending(false); }
  };

  return (
    <section className="contact-band" id="contact">
      <div className="section contact-layout">
        <div className="contact-copy">
          <p className="section-kicker">Get in touch</p>
          <h2>Have an idea worth building?</h2>
          <p>I’m open to freelance projects, collaborations, and software development opportunities. Tell me what you’re working on.</p>
          <a href="mailto:sarimwaseem84@gmail.com"><FiMail /> sarimwaseem84@gmail.com <FiArrowUpRight /></a>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <div className="form-row">
            <label>Name<input name="name" value={fields.name} onChange={updateField} placeholder="Your name" autoComplete="name" /></label>
            <label>Email<input type="email" name="email" value={fields.email} onChange={updateField} placeholder="you@example.com" autoComplete="email" /></label>
          </div>
          <label>Subject<input name="subject" value={fields.subject} onChange={updateField} placeholder="What can I help with?" /></label>
          <label>Message<textarea name="message" value={fields.message} onChange={updateField} rows="5" placeholder="A few details about your project..." /></label>
          <button className="button primary-button submit-button" type="submit" disabled={sending}>{sending ? 'Sending...' : 'Send message'} <FiSend /></button>
          {status.text && <p className={`form-status ${status.type}`} role="status">{status.text}</p>}
        </form>
      </div>
    </section>
  );
}
export default Contact;
