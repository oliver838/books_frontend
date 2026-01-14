import { useState, useEffect } from "react";
import "./navbar.css";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo">Könyvtár</span>
      </div>


      <div className="navbar-right">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
}
