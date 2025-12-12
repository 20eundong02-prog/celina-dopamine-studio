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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileResearchOpen, setMobileResearchOpen] = useState(false);

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

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileResearchOpen(false);
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
        {/* Desktop Navigation */}
        <nav
          className="desktop-nav"
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

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            position: "fixed",
            top: "1.5rem",
            right: "1.5rem",
            zIndex: 2000,
            background: "rgba(255, 255, 255, 0.95)",
            border: "2px solid #FFB6C1",
            borderRadius: "12px",
            width: "50px",
            height: "50px",
            display: "none",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
          }}
        >
          <span style={{
            width: "24px",
            height: "3px",
            background: "#FF6B9D",
            borderRadius: "2px",
            transition: "all 0.3s ease",
            transform: mobileMenuOpen ? "rotate(45deg) translateY(8px)" : "none",
          }} />
          <span style={{
            width: "24px",
            height: "3px",
            background: "#FF6B9D",
            borderRadius: "2px",
            transition: "all 0.3s ease",
            opacity: mobileMenuOpen ? 0 : 1,
          }} />
          <span style={{
            width: "24px",
            height: "3px",
            background: "#FF6B9D",
            borderRadius: "2px",
            transition: "all 0.3s ease",
            transform: mobileMenuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
          }} />
        </button>

        {/* Mobile Menu */}
        <div
          className="mobile-menu"
          style={{
            position: "fixed",
            top: 0,
            right: mobileMenuOpen ? 0 : "-100%",
            width: "80%",
            maxWidth: "300px",
            height: "100vh",
            background: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            zIndex: 1500,
            padding: "5rem 2rem 2rem",
            boxShadow: mobileMenuOpen ? "-4px 0 20px rgba(0, 0, 0, 0.1)" : "none",
            transition: "right 0.4s ease",
            overflowY: "auto",
            display: "none",
          }}
        >
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}>
            <Link
              href="/"
              onClick={closeMobileMenu}
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#FFB6C1",
                textDecoration: "none",
                padding: "1rem",
                borderRadius: "12px",
                transition: "all 0.2s ease",
              }}
            >
              Home
            </Link>
            
            <Link
              href="/about"
              onClick={closeMobileMenu}
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#FFD4A3",
                textDecoration: "none",
                padding: "1rem",
                borderRadius: "12px",
                transition: "all 0.2s ease",
              }}
            >
              About
            </Link>

            {/* Mobile Research Accordion */}
            <div>
              <button
                onClick={() => setMobileResearchOpen(!mobileResearchOpen)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#B4E7CE",
                  background: "none",
                  border: "none",
                  padding: "1rem",
                  borderRadius: "12px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Research
                <span style={{
                  transition: "transform 0.3s ease",
                  transform: mobileResearchOpen ? "rotate(180deg)" : "rotate(0)",
                }}>
                  ▼
                </span>
              </button>

              {mobileResearchOpen && (
                <div style={{
                  paddingLeft: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.3rem",
                  marginTop: "0.5rem",
                }}>
                  <Link href="/research/synthesis" onClick={closeMobileMenu} style={{ display: "block", padding: "0.7rem 1rem", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", fontWeight: 500, color: "#666", textDecoration: "none", borderRadius: "10px" }}>
                    Synthesis
                  </Link>
                  <Link href="/research/deposition" onClick={closeMobileMenu} style={{ display: "block", padding: "0.7rem 1rem", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", fontWeight: 500, color: "#666", textDecoration: "none", borderRadius: "10px" }}>
                    Deposition
                  </Link>
                  <Link href="/research/phosphor-perovskite" onClick={closeMobileMenu} style={{ display: "block", padding: "0.7rem 1rem", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", fontWeight: 500, color: "#666", textDecoration: "none", borderRadius: "10px" }}>
                    Phosphor & Perovskite
                  </Link>
                  <Link href="/research/thermal-management" onClick={closeMobileMenu} style={{ display: "block", padding: "0.7rem 1rem", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", fontWeight: 500, color: "#666", textDecoration: "none", borderRadius: "10px" }}>
                    Thermal Management
                  </Link>
                  <Link href="/research/programming" onClick={closeMobileMenu} style={{ display: "block", padding: "0.7rem 1rem", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", fontWeight: 500, color: "#666", textDecoration: "none", borderRadius: "10px" }}>
                    Programming
                  </Link>
                  <Link href="/research/education" onClick={closeMobileMenu} style={{ display: "block", padding: "0.7rem 1rem", fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", fontWeight: 500, color: "#666", textDecoration: "none", borderRadius: "10px" }}>
                    Others
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/life"
              onClick={closeMobileMenu}
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#C5A3FF",
                textDecoration: "none",
                padding: "1rem",
                borderRadius: "12px",
                transition: "all 0.2s ease",
              }}
            >
              Life
            </Link>

            <Link
              href="/contact"
              onClick={closeMobileMenu}
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#FFB3E6",
                textDecoration: "none",
                padding: "1rem",
                borderRadius: "12px",
                transition: "all 0.2s ease",
              }}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Overlay */}
        {mobileMenuOpen && (
          <div
            onClick={closeMobileMenu}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.3)",
              zIndex: 1400,
              display: "none",
            }}
            className="mobile-overlay"
          />
        )}

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

          /* Mobile Navigation Styles */
          @media (max-width: 768px) {
            .desktop-nav {
              display: none !important;
            }

            .mobile-menu-btn {
              display: flex !important;
            }

            .mobile-menu {
              display: block !important;
            }

            .mobile-overlay {
              display: block !important;
            }
          }

          /* Tablet and above - keep desktop nav */
          @media (min-width: 769px) {
            .mobile-menu-btn,
            .mobile-menu,
            .mobile-overlay {
              display: none !important;
            }
          }
        `}</style>
      </body>
    </html>
  );
}