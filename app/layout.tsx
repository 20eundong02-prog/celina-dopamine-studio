"use client";

import { ReactNode, useState } from "react";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const [researchDropdown, setResearchDropdown] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
    setResearchDropdown(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setResearchDropdown(false);
    }, 300);
    setDropdownTimeout(timeout);
  };

  return (
    <html lang="ko" className={`${poppins.variable} ${montserrat.variable}`}>
      <head>
        <title>Celina's Dopamine Studio</title>
        <meta name="description" content="Research & Life Portfolio - Finding dopamine in every moment" />
        <meta name="theme-color" content="#FF6B9D" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Celina Studio" />
      </head>
      <body suppressHydrationWarning={true}>
        <nav
          style={{
            position: "fixed",
            top: "2rem",
            left: "3rem",
            display: "flex",
            gap: "1.5rem",
            zIndex: 1000,
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#FFB6C1",
              textDecoration: "none",
              transition: "all 0.3s ease",
              letterSpacing: "0.5px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.textShadow = "2px 2px 8px rgba(255, 182, 193, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.textShadow = "none";
            }}
          >
            Home
          </Link>
          
          <Link
            href="/about"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#FFD4A3",
              textDecoration: "none",
              transition: "all 0.3s ease",
              letterSpacing: "0.5px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.textShadow = "2px 2px 8px rgba(255, 212, 163, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.textShadow = "none";
            }}
          >
            About
          </Link>

          {/* Research with Dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/research"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#B4E7CE",
                textDecoration: "none",
                transition: "all 0.3s ease",
                letterSpacing: "0.5px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.textShadow = "2px 2px 8px rgba(180, 231, 206, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.textShadow = "none";
              }}
            >
              Research
            </Link>

            {researchDropdown && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  paddingTop: "1rem", 
                  zIndex: 1000,
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "15px",
                    padding: "1rem",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                    minWidth: "220px",
                    animation: "slideDown 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.3rem"
                  }}
                >
                  <Link href="/research/synthesis" style={{ display: "block", padding: "0.7rem 1rem", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", fontWeight: 500, color: "#666", textDecoration: "none", borderRadius: "10px", transition: "all 0.2s ease" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#B4E7CE20";
                      e.currentTarget.style.color = "#B4E7CE";
                      e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#666";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    Synthesis
                  </Link>

                  <Link href="/research/deposition" style={{ display: "block", padding: "0.7rem 1rem", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", fontWeight: 500, color: "#666", textDecoration: "none", borderRadius: "10px", transition: "all 0.2s ease" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#B4E7CE20";
                      e.currentTarget.style.color = "#B4E7CE";
                      e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#666";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    Deposition
                  </Link>

                  <Link href="/research/phosphor-perovskite" style={{ display: "block", padding: "0.7rem 1rem", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", fontWeight: 500, color: "#666", textDecoration: "none", borderRadius: "10px", transition: "all 0.2s ease" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#B4E7CE20";
                      e.currentTarget.style.color = "#B4E7CE";
                      e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#666";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    Phosphor & Perovskite
                  </Link>

                  <Link href="/research/thermal-management" style={{ display: "block", padding: "0.7rem 1rem", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", fontWeight: 500, color: "#666", textDecoration: "none", borderRadius: "10px", transition: "all 0.2s ease" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#B4E7CE20";
                      e.currentTarget.style.color = "#B4E7CE";
                      e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#666";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    Thermal Management
                  </Link>

                  <Link href="/research/programming" style={{ display: "block", padding: "0.7rem 1rem", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", fontWeight: 500, color: "#666", textDecoration: "none", borderRadius: "10px", transition: "all 0.2s ease" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#B4E7CE20";
                      e.currentTarget.style.color = "#B4E7CE";
                      e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#666";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    Programming
                  </Link>

                  <Link href="/research/education" style={{ display: "block", padding: "0.7rem 1rem", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", fontWeight: 500, color: "#666", textDecoration: "none", borderRadius: "10px", transition: "all 0.2s ease" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#B4E7CE20";
                      e.currentTarget.style.color = "#B4E7CE";
                      e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#666";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    Others
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/life"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#C5A3FF",
              textDecoration: "none",
              transition: "all 0.3s ease",
              letterSpacing: "0.5px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.textShadow = "2px 2px 8px rgba(197, 163, 255, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.textShadow = "none";
            }}
          >
            Life
          </Link>

          <Link
            href="/contact"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#FFB3E6",
              textDecoration: "none",
              transition: "all 0.3s ease",
              letterSpacing: "0.5px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.textShadow = "2px 2px 8px rgba(255, 179, 230, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.textShadow = "none";
            }}
          >
            Contact
          </Link>
        </nav>

        {children}

        <style jsx global>{`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </body>
    </html>
  );
}
