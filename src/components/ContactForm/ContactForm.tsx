import React, { useState, useEffect, useRef } from "react";
import type { ChangeEvent } from "react";
import "./ContactForm.css";

// ── Tipos ─────────────────────────────────────
interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type SubmitStatus = "idle" | "sending" | "success" | "error";

// ── Estado inicial del formulario ─────────────
const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

// ── Regex simple de validación de email ───────
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const modalRef = useRef<HTMLDivElement>(null);

  // ── Cerrar con tecla Escape ─────────────────
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  //  Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  //  Validación de campos
  const validate = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
    } else if (data.name.trim().length < 2) {
      newErrors.name = "Mínimo 2 caracteres";
    }

    if (!data.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!EMAIL_REGEX.test(data.email)) {
      newErrors.email = "Formato de email inválido";
    }

    if (!data.subject.trim()) {
      newErrors.subject = "El asunto es obligatorio";
    }

    if (!data.message.trim()) {
      newErrors.message = "El mensaje es obligatorio";
    } else if (data.message.trim().length < 10) {
      newErrors.message = "Mínimo 10 caracteres";
    }

    return newErrors;
  };

  // Manejo de cambio en inputs
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Limpiar el error del campo al escribir
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  //Envío del formulario
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validar antes de enviar
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");

    try {
      // ─────────────────────────────────────────
      //  TODO: Conectar aquí el backend real.

      //  API propia:
      //    await fetch('/api/contact', {
      //      method: 'POST',
      //      headers: { 'Content-Type': 'application/json' },
      //      body: JSON.stringify(formData),
      //    });
      // ─────────────────────────────────────────

      // Simulación temporal

      setStatus("success");

      // Reset del formulario tras 2s y cierre del modal
      setTimeout(() => {
        setFormData(INITIAL_FORM);
        setStatus("idle");
        onClose();
      }, 2000);
    } catch (err) {
      console.error("Error enviando formulario:", err);
      setStatus("error");
    }
  };

  // Click en backdrop: cerrar solo si es fuera del modal
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="contact-form__backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-form-title"
    >
      <div className="contact-form__modal" ref={modalRef}>
        {/* ── Header ── */}
        <div className="contact-form__header">
          <div>
            <p className="contact-form__label">// Formulario</p>
            <h2 id="contact-form-title" className="contact-form__title">
              Envíame un{" "}
              <span className="contact-form__title-accent">mensaje</span>
            </h2>
          </div>
          <button
            type="button"
            className="contact-form__close"
            onClick={onClose}
            aria-label="Cerrar formulario"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>

        {/* ── Formulario ── */}
        <form onSubmit={handleSubmit} noValidate className="contact-form__form">
          {/* Nombre */}
          <div className="contact-form__field">
            <label htmlFor="name" className="contact-form__field-label">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`contact-form__input ${errors.name ? "contact-form__input--error" : ""}`}
              placeholder="Tu nombre"
              disabled={status === "sending"}
              autoComplete="name"
            />
            {errors.name && (
              <span className="contact-form__error">{errors.name}</span>
            )}
          </div>

          {/* Email */}
          <div className="contact-form__field">
            <label htmlFor="email" className="contact-form__field-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`contact-form__input ${errors.email ? "contact-form__input--error" : ""}`}
              placeholder="tu@email.com"
              disabled={status === "sending"}
              autoComplete="email"
            />
            {errors.email && (
              <span className="contact-form__error">{errors.email}</span>
            )}
          </div>

          {/* Asunto */}
          <div className="contact-form__field">
            <label htmlFor="subject" className="contact-form__field-label">
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`contact-form__input ${errors.subject ? "contact-form__input--error" : ""}`}
              placeholder="¿Sobre qué quieres hablar?"
              disabled={status === "sending"}
            />
            {errors.subject && (
              <span className="contact-form__error">{errors.subject}</span>
            )}
          </div>

          {/* Mensaje */}
          <div className="contact-form__field">
            <label htmlFor="message" className="contact-form__field-label">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`contact-form__textarea ${errors.message ? "contact-form__input--error" : ""}`}
              placeholder="Cuéntame tu proyecto o idea..."
              rows={5}
              disabled={status === "sending"}
            />
            {errors.message && (
              <span className="contact-form__error">{errors.message}</span>
            )}
          </div>

          {/* Mensaje de éxito / error */}
          {status === "success" && (
            <div className="contact-form__status contact-form__status--success">
              ✓ Mensaje enviado correctamente. Te responderé pronto.
            </div>
          )}
          {status === "error" && (
            <div className="contact-form__status contact-form__status--error">
              ✕ Error al enviar. Inténtalo de nuevo o escríbeme directamente por
              email.
            </div>
          )}

          {/* Botón submit */}
          <button
            type="submit"
            className="contact-form__submit"
            disabled={status === "sending" || status === "success"}
          >
            {status === "sending" && "Enviando..."}
            {status === "success" && "Enviado ✓"}
            {(status === "idle" || status === "error") && "Enviar mensaje →"}
          </button>
        </form>
      </div>
    </div>
  );
}
