// ─────────────────────────────────────────────
//  Contact
//  Split layout: big CTA headline + contact options list.
//  The first item opens the ContactForm modal.
// ─────────────────────────────────────────────

import { useState } from 'react';
import { SOCIAL_LINKS } from '../../data/portfolioData';
import { useInView } from '../../hooks/useInView';
import GitHubIcon from '../icons/GitHubIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import MailIcon from '../icons/MailIcon';
import ContactForm from '../ContactForm';
import './Contact.css';

const ICON_MAP = {
  github:   GitHubIcon,
  linkedin: LinkedinIcon,
  mail:     MailIcon,
} as const;

export default function Contact() {
  const [ref, inView]             = useInView<HTMLElement>();
  const [isFormOpen, setFormOpen] = useState(false);

  return (
    <>
      <section
        id="contact"
        ref={ref}
        className={`contact section ${inView ? 'contact--visible' : ''}`}
        aria-label="Contacto"
      >
        <div className="contact__inner">

          {/* ── Left: headline ── */}
          <div className="contact__headline-col">
            <p className="section__label">// Contacto</p>
            <h2 className="contact__headline">
              ¿Trabajamos<br />
              <span className="contact__headline-accent">juntos?</span>
            </h2>
            <p className="contact__subtext">
              Estoy disponible para proyectos freelance,<br />
              colaboraciones y oportunidades laborales.
            </p>
          </div>

          {/* ── Right: contact options ── */}
          <div className="contact__links" aria-label="Formas de contacto">

            {/* Primary CTA: opens form modal */}
            <button
              type="button"
              className="contact__link contact__link--primary"
              onClick={() => setFormOpen(true)}
              style={{ animationDelay: '0.1s' }}
              aria-label="Abrir formulario de contacto"
            >
              <span className="contact__link-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M3 5v14h18V5H3zm16 12H5V7l7 5 7-5v10zM5 5l7 5 7-5H5z"/>
                </svg>
              </span>
              <span className="contact__link-label">Enviar mensaje</span>
              <span className="contact__link-arrow" aria-hidden="true">→</span>
            </button>

            {/* Divider */}
            <div className="contact__divider" role="separator">
              <span>o contacta directamente</span>
            </div>

            {/* Social links */}
            {SOCIAL_LINKS.map(({ label, href, icon }, i) => {
              const Icon = ICON_MAP[icon];
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__link"
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                  aria-label={`Contactar por ${label}`}
                >
                  <span className="contact__link-icon">
                    <Icon />
                  </span>
                  <span className="contact__link-label">{label}</span>
                  <span className="contact__link-arrow" aria-hidden="true">↗</span>
                </a>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Contact form modal ── */}
      <ContactForm
        isOpen={isFormOpen}
        onClose={() => setFormOpen(false)}
      />
    </>
  );
}
