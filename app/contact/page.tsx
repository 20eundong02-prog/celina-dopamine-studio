"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [showKakaoQR, setShowKakaoQR] = useState(false);

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "sueksk@naver.com / 20eundong02@gmail.com",
      link: "mailto:sueksk@naver.com",
      color: "#FFB6C1"
    },
    {
      icon: "💬",
      label: "KakaoTalk",
      value: "sueksk",
      isKakao: true,
      color: "#FFE082"
    },
    {
      icon: "📝",
      label: "Blog",
      value: "blog.naver.com/sueksk",
      link: "https://blog.naver.com/sueksk",
      color: "#B4E7CE"
    },
    {
      icon: "📷",
      label: "Instagram",
      value: "@ks_9ye5",
      link: "https://www.instagram.com/ks_9ye5",
      color: "#FFAEC9"
    },
    {
      icon: "💭",
      label: "Threads",
      value: "@ks_9ye5",
      link: "https://www.threads.net/@ks_9ye5",
      color: "#E0BBE4"
    }
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#FFE5EC", paddingTop: "100px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "calc(100vh - 100px)", padding: "2rem" }}>
        {/* Title Section */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h1 
            className="contact-title"
            style={{ 
              fontFamily: "Poppins, sans-serif", 
              fontSize: "4rem", 
              fontWeight: 700, 
              color: "#FF6B9D", 
              marginBottom: "1rem", 
              textShadow: "2px 2px 8px rgba(255, 107, 157, 0.3)" 
            }}
          >
            Let&apos;s Connect! 💌
          </h1>
          <p 
            className="contact-subtitle"
            style={{ 
              fontFamily: "Montserrat, sans-serif", 
              fontSize: "1.3rem", 
              color: "#666", 
              fontWeight: 300 
            }}
          >
            Feel free to reach out anytime
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div 
          className="contact-grid"
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
            gap: "2rem", 
            maxWidth: "1200px", 
            width: "100%" 
          }}
        >
          {contactInfo.map((contact) => (
            contact.isKakao ? (
              <div 
                key={contact.label} 
                onClick={() => setShowKakaoQR(true)} 
                className="contact-card"
                style={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.8)", 
                  backdropFilter: "blur(10px)", 
                  borderRadius: "25px", 
                  padding: "2rem", 
                  border: `3px solid ${contact.color}40`, 
                  transition: "all 0.3s ease", 
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center", 
                  gap: "1rem", 
                  cursor: "pointer" 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = `0 10px 30px ${contact.color}60`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: "2.5rem" }}>{contact.icon}</div>
                <h3 
                  className="contact-card-title"
                  style={{ 
                    fontFamily: "Poppins, sans-serif", 
                    fontSize: "1.3rem", 
                    fontWeight: 600, 
                    color: contact.color, 
                    margin: 0 
                  }}
                >
                  {contact.label}
                </h3>
                <p 
                  className="contact-card-value"
                  style={{ 
                    fontFamily: "Montserrat, sans-serif", 
                    fontSize: "0.95rem", 
                    color: "#666", 
                    margin: 0, 
                    textAlign: "center",
                    wordBreak: "break-word"
                  }}
                >
                  {contact.value}
                </p>
              </div>
            ) : (
              <a 
                key={contact.label} 
                href={contact.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-card"
                style={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.8)", 
                  backdropFilter: "blur(10px)", 
                  borderRadius: "25px", 
                  padding: "2rem", 
                  textDecoration: "none", 
                  border: `3px solid ${contact.color}40`, 
                  transition: "all 0.3s ease", 
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center", 
                  gap: "1rem", 
                  cursor: "pointer" 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = `0 10px 30px ${contact.color}60`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: "2.5rem" }}>{contact.icon}</div>
                <h3 
                  className="contact-card-title"
                  style={{ 
                    fontFamily: "Poppins, sans-serif", 
                    fontSize: "1.3rem", 
                    fontWeight: 600, 
                    color: contact.color, 
                    margin: 0 
                  }}
                >
                  {contact.label}
                </h3>
                <p 
                  className="contact-card-value"
                  style={{ 
                    fontFamily: "Montserrat, sans-serif", 
                    fontSize: "0.95rem", 
                    color: "#666", 
                    margin: 0, 
                    textAlign: "center", 
                    wordBreak: "break-word" 
                  }}
                >
                  {contact.value}
                </p>
              </a>
            )
          ))}
        </div>

        {/* Footer Message */}
        <div style={{ marginTop: "4rem", textAlign: "center" }}>
          <p 
            className="contact-footer"
            style={{ 
              fontFamily: "Poppins, sans-serif", 
              fontSize: "1.2rem", 
              color: "#FF6B9D", 
              fontWeight: 500 
            }}
          >
            ✨ Looking forward to hearing from you! ✨
          </p>
        </div>
      </div>

      {/* Kakao QR Modal */}
      {showKakaoQR && (
        <div 
          onClick={() => setShowKakaoQR(false)} 
          style={{ 
            position: "fixed", 
            top: 0, 
            left: 0, 
            width: "100vw", 
            height: "100vh", 
            backgroundColor: "rgba(0, 0, 0, 0.8)", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            zIndex: 1000, 
            cursor: "pointer",
            padding: "1rem"
          }}
        >
          <div 
            className="kakao-modal"
            style={{ 
              backgroundColor: "white", 
              borderRadius: "30px", 
              padding: "2rem", 
              maxWidth: "90%", 
              maxHeight: "90%", 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center", 
              gap: "1rem",
              overflow: "auto"
            }}
          >
            <div style={{ width: "100%", maxWidth: "500px", position: "relative" }}>
              <Image 
                src="/kakao-qr.png" 
                alt="KakaoTalk QR Code" 
                width={500} 
                height={700} 
                style={{ 
                  borderRadius: "20px", 
                  objectFit: "contain",
                  width: "100%",
                  height: "auto"
                }} 
              />
            </div>
            <p 
              className="kakao-modal-text"
              style={{ 
                fontFamily: "Poppins, sans-serif", 
                fontSize: "1.2rem", 
                color: "#666", 
                marginTop: "1rem",
                textAlign: "center"
              }}
            >
              Scan to add on KakaoTalk 💛
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .contact-title {
            font-size: 2.5rem !important;
          }

          .contact-subtitle {
            font-size: 1.1rem !important;
          }

          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          .contact-card {
            padding: 1.5rem !important;
          }

          .contact-card-title {
            font-size: 1.2rem !important;
          }

          .contact-card-value {
            font-size: 0.9rem !important;
          }

          .contact-footer {
            font-size: 1rem !important;
          }

          .kakao-modal {
            padding: 1.5rem !important;
          }

          .kakao-modal-text {
            font-size: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          .contact-title {
            font-size: 2rem !important;
          }

          .contact-subtitle {
            font-size: 1rem !important;
          }

          .contact-card {
            padding: 1.2rem !important;
          }

          .kakao-modal {
            padding: 1rem !important;
            border-radius: 20px !important;
          }
        }
      `}</style>
    </div>
  );
}