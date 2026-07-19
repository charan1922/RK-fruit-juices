"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      message: data.get("message"),
    };

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="contact-form-success">
        Thanks — we&apos;ll get back to you shortly.
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <input name="name" type="text" placeholder="Your name" required maxLength={200} />
        <input name="phone" type="tel" placeholder="Phone number" required maxLength={40} />
      </div>
      <textarea
        name="message"
        placeholder="Anything we should know? (optional)"
        rows={3}
        maxLength={2000}
      />
      <button type="submit" className="btn-primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Request a callback"}
      </button>
      {status === "error" && (
        <p className="contact-form-error">Something went wrong — please try again.</p>
      )}
    </form>
  );
}
