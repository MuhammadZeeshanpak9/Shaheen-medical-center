"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";

type FormState = {
  name: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = { name: "", phone: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof FormState, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function validate(): FormErrors {
    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = "Name is required.";
    if (!values.phone.trim()) nextErrors.phone = "Phone number is required.";
    if (!values.message.trim()) nextErrors.message = "Message is required.";
    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5 rounded-2xl border border-line bg-white p-6 shadow-sm"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="font-body text-sm font-semibold text-navy">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={(e) => handleChange("name", e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="rounded-lg border border-line px-4 py-2.5 font-body text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
        />
        {errors.name && (
          <p id="name-error" className="font-body text-xs text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="font-body text-sm font-semibold text-navy">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          value={values.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className="rounded-lg border border-line px-4 py-2.5 font-body text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
        />
        {errors.phone && (
          <p id="phone-error" className="font-body text-xs text-red-600">
            {errors.phone}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="font-body text-sm font-semibold text-navy"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="rounded-lg border border-line px-4 py-2.5 font-body text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
        />
        {errors.message && (
          <p id="message-error" className="font-body text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" className="self-start">
        Send Message
      </Button>

      {submitted && (
        <p role="status" className="font-body text-sm text-teal">
          Thanks. This form is UI-only for now, no message was actually sent.
        </p>
      )}
    </form>
  );
}
