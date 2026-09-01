"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const inputClasses =
  "w-full rounded-xl border border-edge bg-surface-2 px-4 py-3 text-sm text-fg placeholder:text-faint transition-colors focus:border-brand-500 focus:outline-none";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const nextErrors: FormErrors = {};
    if (!name) nextErrors.name = "Please add your name.";
    if (!email) nextErrors.email = "Please add your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = "That email doesn't look right.";
    if (!message) nextErrors.message = "Please write a short message.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 900);
    form.reset();
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-start justify-center rounded-2xl border border-brand-500/30 bg-brand-500/[0.06] p-10"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-500">
          <CheckCircle2 className="h-6 w-6" aria-hidden />
        </span>
        <h2 className="mt-5 text-xl font-semibold tracking-tight text-fg">
          Message ready to send
        </h2>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
          This demo form doesn&apos;t send anywhere yet. Hook it up to a route
          handler or email service, then it&apos;s ready for real. For now,{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-brand-600 underline-offset-2 hover:underline dark:text-brand-400"
          >
            email me directly
          </a>{" "}
          — I&apos;ll get back to you.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-fg">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            className={cn(inputClasses, errors.name && "border-red-500/60")}
          />
          {errors.name ? (
            <p role="alert" className="mt-1.5 text-xs text-red-500">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-fg">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            className={cn(inputClasses, errors.email && "border-red-500/60")}
          />
          {errors.email ? (
            <p role="alert" className="mt-1.5 text-xs text-red-500">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-fg">
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder="What is this about?"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-fg">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          placeholder="Tell me about the role, the project, or just say hi…"
          aria-invalid={Boolean(errors.message)}
          className={cn(inputClasses, "resize-y", errors.message && "border-red-500/60")}
        />
        {errors.message ? (
          <p role="alert" className="mt-1.5 text-xs text-red-500">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
          ) : (
            <Send className="h-4 w-4" aria-hidden />
          )}
          {status === "submitting" ? "Sending…" : "Send message"}
        </Button>
        <p className="flex items-center gap-1.5 text-xs text-faint">
          <Mail className="h-3.5 w-3.5" aria-hidden />
          Prefer email?{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-muted underline-offset-2 hover:text-fg hover:underline"
          >
            write to me
          </a>
        </p>
      </div>
    </form>
  );
}