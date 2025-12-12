"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

// --- 타입 ---
interface Photo {
  id: number;
}

export default function Life() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const [rotations, setRotations] = useState<number[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 서버에서 랜덤 사용 금지 → 클라이언트에서 회전값 생성
  useEffect(() => {
    const randomRotations = Array.from({ length: 32 }, (_, i) => {
      const base = (i % 2 === 0 ? 1 : -1);
      const tilt = Math.random() * 4 + 2; // 2~6도
      return base * tilt;
    });
    setRotations(randomRotations);
  }, []);

  const photos: Photo[] = Array.from({ length: 32 }, (_, i) => ({
    id: i + 1,
  }));

  const getImagePath = (num: number) => `/image/${num}.jpg`;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const openLightbox = (index: number) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Baloo+2:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#FFE5EC",
          fontFamily: "'Baloo 2', cursive",
          overflowX: "hidden",
          paddingBottom: "80px",
        }}
      >
        {/* ---------------- 상단 (비디오 + 텍스트) ---------------- */}
        <section
          style={{
            padding: "6rem 2rem 4rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="top-section-container"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch",
              gap: "40px",
              justifyContent: "center",
              maxWidth: "1000px",
              width: "100%",
              height: "600px",
            }}
          >
            {/* 비디오 */}
            <div
              className="video-container"
              style={{
                position: "relative",
                flex: "0 0 360px",
                height: "100%",
                borderRadius: "30px",
                border: "4px solid #FFB6C1",
                overflow: "hidden",
                background: "#000",
                cursor: "pointer",
              }}
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                src="/image/0.mp4"
                loop
                playsInline
                muted={isMuted}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />

              {!isPlaying && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,0,0,0.2)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "3rem",
                      color: "white",
                      background: "#FF6B9D",
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingLeft: "8px",
                      boxShadow: "0 4px 15px rgba(255,107,157,0.5)",
                    }}
                  >
                    ▶
                  </div>
                </div>
              )}

              <button
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "rgba(255,255,255,0.8)",
                  border: "none",
                  borderRadius: "50%",
                  width: "45px",
                  height: "45px",
                  fontSize: "1.3rem",
                  zIndex: 10,
                  cursor: "pointer",
                }}
                onClick={toggleMute}
              >
                {isMuted ? "🔇" : "🔊"}
              </button>
            </div>

            {/* 텍스트 박스 */}
            <div
              className="text-box"
              style={{
                flex: 1,
                height: "100%",
                padding: "3rem",
                borderRadius: "30px",
                border: "4px solid #FFB6C1",
                textAlign: "center",
                background: "#FFF3F7",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h1
                className="main-title"
                style={{
                  fontFamily: "'Fredoka One', cursive",
                  color: "#FF6B9D",
                  fontSize: "2.8rem",
                  marginBottom: "2rem",
                  lineHeight: 1.4,
                }}
              >
                All the Sparkling Moments<br />That Made Me 💕
              </h1>

              <p className="text-content" style={{ fontSize: "1.35rem", color: "#666", fontWeight: 600 }}>
                Walking through life with fierce resilience<br />and an ever-burning passion 🔥
              </p>

              <p className="text-content" style={{ fontSize: "1.35rem", color: "#666", fontWeight: 600 }}>
                Always reaching for the next spark,<br />guided by relentless curiosity ⚡️
              </p>

              <p
                className="text-content text-highlight"
                style={{
                  fontSize: "1.35rem",
                  color: "#FF6B9D",
                  fontWeight: 700,
                }}
              >
                Gathering vibrant moments to craft a story<br />that's uniquely my own 🎬
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- 로프 사진 갤러리 ---------------- */}
        <section className="gallery-section" style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem 0" }}>
          {chunkArray(photos, 4).map((rowPhotos, rowIndex) => (
            <div
              key={rowIndex}
              className="gallery-row"
              style={{
                position: "relative",
                height: "340px",
                marginBottom: "-40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                paddingTop: "40px",
              }}
            >
              {/* Rope (SVG) */}
              <svg
                className="rope-svg"
                style={{
                  position: "absolute",
                  top: "60px",
                  left: 0,
                  width: "100%",
                  height: "90px",
                }}
                viewBox="0 0 1200 90"
              >
                <path
                  d="M0,40 Q600,10 1200,40"
                  fill="none"
                  stroke="#FFD6E8"
                  strokeWidth="10"
                  strokeLinecap="round"
                  opacity="0.95"
                />
              </svg>

              {/* 사진들 */}
              <div className="photos-container" style={{ display: "flex", justifyContent: "space-around", width: "90%", zIndex: 2, flexWrap: "wrap" }}>
                {rowPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    className="photo-hover photo-item"
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      transform: `rotate(${rotations[photo.id - 1] || 0}deg)`,
                      cursor: "pointer",
                    }}
                    onClick={() => openLightbox(photo.id - 1)}
                  >
                    <div
                      className="photo-wrapper"
                      style={{
                        width: "260px",
                        height: "200px",
                        position: "relative",
                        background: "transparent",
                      }}
                    >
                      <Image
                        src={getImagePath(photo.id)}
                        alt={`Memory ${photo.id}`}
                        width={260}
                        height={200}
                        loading="lazy"
                        quality={85}
                        style={{
                          objectFit: "contain",
                          backgroundColor: "transparent",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* ---------------- 하단 메시지 ---------------- */}
        <footer
          className="footer-section"
          style={{
            textAlign: "center",
            marginTop: "4rem",
            padding: "3rem",
            color: "#FF6B9D",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "80px",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="footer-emoji" style={{ fontSize: "4rem", animation: "bounce 2s ease-in-out infinite" }}>
              🏃‍♀️
            </div>
          </div>

          <p className="footer-title" style={{ fontFamily: "'Fredoka One', cursive", fontSize: "2.2rem" }}>
            And the journey continues... 🚀
          </p>

          <p className="footer-text" style={{ fontSize: "1.25rem", color: "#888", fontWeight: 600 }}>
            Still searching for new dopamine,<br />growing every single day 💕
          </p>
        </footer>

        {/* 애니메이션 및 전체 반응형 스타일 */}
        <style jsx global>{`
          @keyframes bounce {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          .photo-hover {
            transition: transform 0.3s ease;
          }

          .photo-hover:hover {
            transform: scale(1.08) rotate(0deg) !important;
            z-index: 10;
          }

          /* Mobile Responsive Styles */
          @media (max-width: 768px) {
            .top-section-container {
              flex-direction: column !important;
              height: auto !important;
              gap: 20px !important;
            }

            .video-container {
              flex: 0 0 auto !important;
              width: 100% !important;
              height: 400px !important;
            }

            .text-box {
              height: auto !important;
              padding: 2rem !important;
            }

            .main-title {
              font-size: 2rem !important;
              margin-bottom: 1.5rem !important;
            }

            .text-content {
              font-size: 1.1rem !important;
            }

            .text-highlight {
              font-size: 1.15rem !important;
            }

            /* Gallery */
            .gallery-row {
              height: auto !important;
              margin-bottom: 20px !important;
              padding-top: 20px !important;
            }

            .rope-svg {
              top: 30px !important;
              height: 60px !important;
            }

            .photos-container {
              width: 100% !important;
              padding: 0 10px !important;
              justify-content: center !important;
            }

            .photo-item {
              margin: 10px 5px !important;
            }

            .photo-wrapper {
              width: 180px !important;
              height: 140px !important;
            }

            /* Footer */
            .footer-section {
              padding: 2rem 1rem !important;
              margin-top: 2rem !important;
            }

            .footer-emoji {
              font-size: 3rem !important;
            }

            .footer-title {
              font-size: 1.8rem !important;
            }

            .footer-text {
              font-size: 1.1rem !important;
            }

            /* Lightbox */
            .lightbox-close {
              font-size: 1.5rem !important;
              top: 10px !important;
              right: 10px !important;
            }

            .lightbox-prev, .lightbox-next {
              font-size: 2rem !important;
            }

            .lightbox-prev {
              left: 10px !important;
            }

            .lightbox-next {
              right: 10px !important;
            }

            .lightbox-counter {
              font-size: 1rem !important;
            }
          }

          @media (max-width: 480px) {
            .main-title {
              font-size: 1.6rem !important;
            }

            .text-content {
              font-size: 1rem !important;
            }

            .video-container {
              height: 300px !important;
            }

            .photo-wrapper {
              width: 150px !important;
              height: 120px !important;
            }

            .footer-title {
              font-size: 1.5rem !important;
            }

            .footer-text {
              font-size: 1rem !important;
            }
          }
        `}</style>

        {/* ---------------- 라이트박스 ---------------- */}
        {lightboxOpen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.9)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
            onClick={closeLightbox}
          >
            <button
              className="lightbox-close"
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "none",
                border: "none",
                color: "white",
                fontSize: "2rem",
                cursor: "pointer",
                zIndex: 10000,
              }}
            >
              ✕
            </button>

            <div
              style={{
                position: "relative",
                maxWidth: "90vw",
                maxHeight: "85vh",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={getImagePath(photos[currentPhotoIndex].id)}
                alt="Lightbox Photo"
                width={1200}
                height={800}
                style={{
                  objectFit: "contain",
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  backgroundColor: "transparent",
                }}
              />

              <div
                className="lightbox-counter"
                style={{
                  color: "white",
                  textAlign: "center",
                  marginTop: "10px",
                  fontSize: "1.2rem",
                }}
              >
                {currentPhotoIndex + 1} / {photos.length}
              </div>
            </div>

            <button
              className="lightbox-prev"
              style={{
                position: "absolute",
                left: "20px",
                background: "none",
                border: "none",
                color: "white",
                fontSize: "3rem",
                cursor: "pointer",
              }}
              onClick={prevPhoto}
            >
              ‹
            </button>

            <button
              className="lightbox-next"
              style={{
                position: "absolute",
                right: "20px",
                background: "none",
                border: "none",
                color: "white",
                fontSize: "3rem",
                cursor: "pointer",
              }}
              onClick={nextPhoto}
            >
              ›
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function chunkArray<T>(array: T[], size: number): T[][] {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}