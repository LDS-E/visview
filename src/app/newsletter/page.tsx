"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { data, error } = await supabase.from("newsletter").insert([
      {
        name,
        email,
      },
    ]);

    if (error) {
      if (
        error.code === "23505" || // code violation UNIQUE PostgreSQL
        error.message.toLowerCase().includes("duplicate")
      ) {
        setError("This email is already registered.");
      } else {
        setError("Error registering. Please try again.");
      }
      return;
    }

    setSubmitted(true);
    setName("");
    setEmail("");
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif font-bold text-secondary mb-4">
        Join Our Newsletter
      </h1>
      <p className="text-gray-700 mb-8 text-lg">
        Subscribe to receive updates on motherhood, lifestyle tips, and
        inspiration — straight to your inbox.
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-sm text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

          <button
            type="submit"
            className="bg-secondary text-white px-6 py-2 rounded-xl hover:bg-opacity-90 transition"
          >
            Subscribe
          </button>
        </form>
      ) : (
        <p className="text-green-700 text-lg mt-6">
          Thank you for subscribing! 💌
        </p>
      )}
    </div>
  );
}
