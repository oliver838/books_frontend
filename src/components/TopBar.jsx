import { Text } from "@mantine/core";
import { useEffect, useState } from "react";

export default function TopBar() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 80,
        padding: "0 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background:
          dark
            ? "rgba(10,10,20,0.7)"
            : "rgba(245,245,255,0.7)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: `1px solid ${
          dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
        }`,
        boxShadow: `0 0 10px var(--color-accent), 0 0 20px var(--color-accent)`,
        zIndex: 9999,
      }}
    >
      <Text
        weight={700}
        size="xl"
        style={{
          color: "var(--color-accent)",
          textShadow: "0 0 5px var(--color-accent), 0 0 10px var(--color-accent)",
        }}
      >
        Tech Neon App
      </Text>

      <button
        onClick={() => setDark(!dark)}
        style={{
          fontSize: 22,
          padding: "0.25rem 0.5rem",
          border: "none",
          borderRadius: "8px",
          background: "transparent",
          color: "var(--color-accent)",
          cursor: "pointer",
          textShadow:
            "0 0 5px var(--color-accent), 0 0 10px var(--color-accent), 0 0 20px var(--color-accent)",
          transition: "all 0.3s ease",
        }}
      >
        {dark ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}
