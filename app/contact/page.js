'use client';

import { useState } from 'react';
import { PageShell } from '../components';

const FORM_ENDPOINT = 'https://formspree.io/f/mzedrkaq';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === 'sending') return;
    const form = event.currentTarget;
    setStatus('sending');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error('Submission failed');
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <PageShell>
      <main>
        <section className="page-hero">
          <p className="eyebrow">CONTACT</p>
          <h1>Let's Start a Conversation.</h1>
          <p>You don't have to have all the answers. Tell us what's going on, and we'll begin by listening.</p>
        </section>
        <section className="section contact-grid">
          <form onSubmit={handleSubmit}>
            {status === 'success' ? (
              <div role="status" aria-live="polite">
                <h2>Thank You for Reaching Out</h2>
                <p>Your message has been submitted successfully. Someone from Ezra Real Estate Solutions will be in touch soon.</p>
                <button className="btn primary" type="button" onClick={() => setStatus('idle')}>Send Another Message</button>
              </div>
            ) : (
              <>
                <label>Name<input name="name" autoComplete="name" required /></label>
                <label>Phone<input name="phone" type="tel" autoComplete="tel" /></label>
                <label>Email<input name="email" type="email" autoComplete="email" required /></label>
                <label>How can we help?<textarea name="message" rows="7" required /></label>
                {status === 'error' && (
                  <p role="alert">We couldn't send your message right now. Please try again, or email info@ezrarealestatesolutions.com directly.</p>
                )}
                <button className="btn primary" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </>
            )}
          </form>
          <aside>
            <h2>Get in Touch</h2>
            <p><b>Phone:</b><br />{process.env.NEXT_PUBLIC_PHONE || '520-399-6570'}</p>
            <p><b>Email:</b><br />{process.env.NEXT_PUBLIC_EMAIL || 'info@ezrarealestatesolutions.com'}</p>
            <p><b>Service Area:</b><br />Arizona</p>
            <p>We are here to listen, explain your options clearly, and help you determine the best path forward—without pressure or judgment.</p>
          </aside>
        </section>
      </main>
    </PageShell>
  );
}
