"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldRule } from "@/components/ui/GoldRule";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SITE_CONFIG } from "@/lib/constants";

type Status = "idle" | "sending" | "success";

function validate(data: Record<string, string>) {
  const e: Record<string, string> = {};
  if (!data.name.trim())    e.name    = "Name is required";
  if (!data.email.trim())   e.email   = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Enter a valid email";
  if (!data.message.trim()) e.message = "A brief message helps";
  return e;
}

export function ContactSection() {
  const [form,    setForm]    = useState({ name: "", org: "", email: "", message: "" });
  const [errors,  setErrors]  = useState<Record<string, string>>({});
  const [status,  setStatus]  = useState<Status>("idle");
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const change = (field: string, value: string) => {
    setForm(p => ({ ...p, [field]: value }));
    if (touched[field]) {
      const ne = validate({ ...form, [field]: value });
      setErrors(p => ({ ...p, [field]: ne[field] ?? "" }));
    }
  };

  const blur = (field: string) => {
    setTouched(p => ({ ...p, [field]: true }));
    setErrors(p => ({ ...p, [field]: validate(form)[field] ?? "" }));
  };

  const submit = () => {
    setTouched({ name: true, org: true, email: true, message: true });
    const ne = validate(form);
    setErrors(ne);
    if (Object.values(ne).some(Boolean)) return;
    setStatus("sending");
    const sub  = encodeURIComponent(`Executive Inquiry — ${form.org || "Direct"}`);
    const body = encodeURIComponent(`From: ${form.name}\nOrg: ${form.org}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${sub}&body=${body}`;
    setTimeout(() => { setStatus("success"); setForm({ name: "", org: "", email: "", message: "" }); setTouched({}); }, 900);
  };

  return (
    <section
      id="contact"
      className="relative py-32 max-lg:py-20 overflow-hidden"
      style={{ background: "var(--void-2)" }}
      aria-label="Contact"
    >
      {/* Decorative vertical accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px pointer-events-none"
        style={{ background: "linear-gradient(180deg,transparent,var(--gold-rule) 25%,var(--gold-rule) 75%,transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-16 max-xl:px-10 max-md:px-6">
        <div className="grid grid-cols-2 gap-24 max-lg:grid-cols-1 max-lg:gap-16">

          {/* Left — positioning + channels */}
          <div>
            <RevealOnScroll>
              <SectionLabel>Executive Conversations</SectionLabel>
              <GoldRule className="mb-7" />
              <h2
                className="font-serif font-light mb-7"
                style={{ fontSize: "clamp(36px,4.2vw,58px)", lineHeight: 1.05, letterSpacing: "-0.022em", color: "var(--parch)" }}
              >
                The conversation<br />worth having{" "}
                <em className="italic" style={{ color: "var(--gold)" }}>starts here.</em>
              </h2>
              <p style={{ fontSize: "16px", lineHeight: 1.84, color: "var(--muted)", maxWidth: "400px", marginBottom: "44px" }}>
                Open to VP, CIO-track, and PE-backed technology leadership opportunities where organizational complexity demands someone who has already built the operating model, governed the integration, and delivered the outcomes.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1} className="flex flex-col gap-2">
              {[
                { icon: <Mail size={13} />,     label: "Email",    value: SITE_CONFIG.email,         href: `mailto:${SITE_CONFIG.email}` },
                { icon: <Linkedin size={13} />, label: "LinkedIn", value: "linkedin.com/in/imanzamani", href: SITE_CONFIG.linkedin },
              ].map(ch => (
                <a
                  key={ch.label}
                  href={ch.href}
                  target={ch.href.startsWith("http") ? "_blank" : undefined}
                  rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-5 border transition-all duration-200 cursor-large group"
                  style={{ borderColor: "var(--line)", background: "var(--void-3)" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold-rule)"; e.currentTarget.style.background = "var(--void-4)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--line)";      e.currentTarget.style.background = "var(--void-3)"; }}
                  aria-label={`${ch.label}: ${ch.value}`}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center border flex-shrink-0 transition-colors duration-200"
                    style={{ borderColor: "var(--gold-rule)", color: "var(--gold)" }}
                  >
                    {ch.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-0.5" style={{ color: "var(--muted)" }}>
                      {ch.label}
                    </p>
                    <p
                      className="text-[14px] font-medium transition-colors duration-200 group-hover:text-[var(--gold)]"
                      style={{ color: "var(--parch)" }}
                    >
                      {ch.value}
                    </p>
                  </div>
                </a>
              ))}
              <div
                className="flex items-center gap-4 p-5 border"
                style={{ borderColor: "var(--line)", background: "var(--void-3)" }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center border flex-shrink-0"
                  style={{ borderColor: "var(--gold-rule)", color: "var(--gold)" }}
                >
                  <MapPin size={13} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-0.5" style={{ color: "var(--muted)" }}>Location</p>
                  <p className="text-[14px] font-medium" style={{ color: "var(--parch)" }}>{SITE_CONFIG.location}</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right — form */}
          <RevealOnScroll delay={0.15}>
            <SectionLabel>Send a Message</SectionLabel>
            <GoldRule className="mb-8" />
            <form
              onSubmit={e => { e.preventDefault(); submit(); }}
              className="flex flex-col gap-6"
              noValidate
              aria-label="Contact form"
            >
              {(["name", "org", "email"] as const).map(field => {
                const meta: Record<string, { label: string; type: string; placeholder: string; required?: boolean }> = {
                  name:  { label: "Your Name",     type: "text",  placeholder: "Full name",       required: true  },
                  org:   { label: "Organization",  type: "text",  placeholder: "Company or firm", required: false },
                  email: { label: "Email Address", type: "email", placeholder: "your@email.com",  required: true  },
                };
                const m = meta[field];
                return (
                  <div key={field}>
                    <label
                      htmlFor={field}
                      className="block text-[10px] font-semibold tracking-[0.2em] uppercase mb-2.5"
                      style={{ color: "var(--muted)" }}
                    >
                      {m.label}{m.required && <span style={{ color: "var(--gold)", marginLeft: 2 }}>*</span>}
                    </label>
                    <input
                      id={field}
                      type={m.type}
                      value={form[field]}
                      onChange={e => change(field, e.target.value)}
                      onBlur={() => blur(field)}
                      placeholder={m.placeholder}
                      required={m.required}
                      className="w-full text-[14px] outline-none transition-colors duration-200"
                      style={{
                        background: "var(--void-3)",
                        border: `1px solid ${errors[field] ? "rgba(220,80,80,0.45)" : "var(--line-md)"}`,
                        color: "var(--parch)",
                        padding: "13px 16px",
                        fontFamily: "var(--font-serif)",
                        fontStyle: "italic",
                      }}
                      onFocus={e  => { e.target.style.borderColor = "var(--gold)"; }}
                      
                      aria-required={m.required}
                      aria-invalid={!!errors[field]}
                      aria-describedby={errors[field] ? `${field}-err` : undefined}
                    />
                    {errors[field] && (
                      <p id={`${field}-err`} className="flex items-center gap-1.5 mt-1.5 text-[12px]" style={{ color: "rgba(220,80,80,0.9)" }} role="alert">
                        <AlertCircle size={11} aria-hidden="true" /> {errors[field]}
                      </p>
                    )}
                  </div>
                );
              })}

              <div>
                <label htmlFor="message" className="block text-[10px] font-semibold tracking-[0.2em] uppercase mb-2.5" style={{ color: "var(--muted)" }}>
                  Message <span style={{ color: "var(--gold)" }}>*</span>
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={e => change("message", e.target.value)}
                  onBlur={() => blur("message")}
                  placeholder="What would you like to discuss?"
                  rows={5}
                  required
                  className="w-full text-[14px] outline-none transition-colors duration-200 resize-none"
                  style={{
                    background: "var(--void-3)",
                    border: `1px solid ${errors.message ? "rgba(220,80,80,0.45)" : "var(--line-md)"}`,
                    color: "var(--parch)",
                    padding: "13px 16px",
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    lineHeight: 1.65,
                  }}
                  onFocus={e  => { e.target.style.borderColor = "var(--gold)"; }}
                  onBlurCapture={e => { e.target.style.borderColor = errors.message ? "rgba(220,80,80,0.45)" : "var(--line-md)"; }}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-err" : undefined}
                />
                {errors.message && (
                  <p id="message-err" className="flex items-center gap-1.5 mt-1.5 text-[12px]" style={{ color: "rgba(220,80,80,0.9)" }} role="alert">
                    <AlertCircle size={11} aria-hidden="true" /> {errors.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={status !== "idle"}
                className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase px-8 py-[15px] cursor-large transition-opacity duration-200 self-start"
                style={{
                  background: status === "success" ? "rgba(52,211,153,0.1)" : "var(--gold)",
                  color:      status === "success" ? "rgba(52,211,153,1)"   : "var(--void)",
                  opacity:    status === "sending"  ? 0.68                   : 1,
                  border:     status === "success" ? "1px solid rgba(52,211,153,0.3)" : "none",
                }}
                whileTap={{ scale: 0.98 }}
                aria-label={status === "success" ? "Message sent" : "Submit contact form"}
              >
                {status === "success" ? (
                  <><CheckCircle size={13} aria-hidden="true" /> Message Sent</>
                ) : status === "sending" ? (
                  <><Send size={13} className="animate-spin" aria-hidden="true" /> Sending…</>
                ) : (
                  <><Send size={13} aria-hidden="true" /> Send Message</>
                )}
              </motion.button>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

