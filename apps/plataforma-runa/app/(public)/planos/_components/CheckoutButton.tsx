"use client";

import { useState } from "react";

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    const res = await fetch("/api/checkout", { method: "POST" });
    if (res.redirected) {
      window.location.href = res.url;
      return;
    }
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="block w-full text-center bg-accent text-text py-3 px-6 rounded-lg hover:opacity-90 transition-opacity font-medium disabled:opacity-50"
    >
      {loading ? "Aguarde…" : "Comprar RUNA"}
    </button>
  );
}
