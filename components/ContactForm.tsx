"use client";

import { useState } from "react";
import { useTranslations } from "./I18nContext";

export default function ContactForm() {
  const dict = useTranslations();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | string>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("Message sent!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <input
        type="text"
        placeholder={dict("name")}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full bg-white dark:bg-neutral-900 p-2 rounded"
      />
      <input
        type="email"
        placeholder={dict("email")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full bg-white dark:bg-neutral-900 p-2 rounded"
      />
      <textarea
        placeholder={dict("message")}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="w-full bg-white dark:bg-neutral-900 p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-700 dark:bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {dict("send")}
      </button>
      {status && <p className="text-sm text-gray-500">{status}</p>}
    </form>
  );
}
