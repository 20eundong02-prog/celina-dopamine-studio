"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

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

  useEffect(() => {
    const randomRotations = Array.from({ length: 32 }, (_, i) => {
      const base = (i % 2 === 0 ? 1 : -1);
      const tilt = Math.random() * 4 + 2;
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
        {/* 상단 (비디오 + 텍스트) */}
        <section
          className="video-text-section"
          style={{
            padding: "6rem 2rem 4rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="video-text-container"
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
              className="video-wrapper"
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
                    className="play-button"
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
                className="mute-button"
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
                className="text-box-title"
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

              <p className="text-box-paragraph" style={{ fontSize: "1.35rem", color: "#666", fontWeight: 600 }}>
                Walking through life with fierce resilience<br />and an ever-burning passion 🔥
              </p>

              <p className="text-box-paragraph" style={{ fontSize: "1.35rem", color: "#666", fontWeight: 600 }}>
                Always reaching for the next spark,<br />guided by relentless curiosity ⚡️
              </p>

              <p
                className="text-box-highlight"
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

        {/* 로프 사진 갤러리 */}
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
              <div className="photos-container" style={{ display: "flex", justifyContent: "space-around", width: "90%", zIndex: 2 }}>
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
                      style={{
                        width: "260px",
                        height: "200px",
                        position: "relative",
                        background: "transparent",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={getImagePath(photo.id)}
                        alt={`Memory ${photo.id}`}
                        width={260}
                        height={200}
                        style={{
                          objectFit: "contain",
                          width: "100%",
                          height: "100%",
                          backgroundColor: "transparent",
                        }}
                        loading="lazy"
                        quality={85}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* 하단 메시지 */}
        <footer
          className="footer-message"
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
            <div style={{ fontSize: "4rem", animation: "bounce 2s ease-in-out infinite" }}>
              🏃‍♀️
            </div>
          </div>

          <p className="footer-title" style={{ fontFamily: "'Fredoka One', cursive", fontSize: "2.2rem" }}>
            And the journey continues... 🚀
          </p>

          <p className="footer-subtitle" style={{ fontSize: "1.25rem", color: "#888", fontWeight: 600 }}>
            Still searching for new dopamine,<br />growing every single day 💕
          </p>
        </footer>

        {/* 애니메이션 & 모바일 스타일 */}
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

          /* 모바일 반응형 */
          @media (max-width: 768px) {
            .video-text-section {
              padding: 5rem 1rem 2rem !important;
            }

            .video-text-container {
              flex-direction: column !important;
              height: auto !important;
              gap: 20px !important;
            }

            .video-wrapper {
              flex: 0 0 auto !important;
              width: 100% !important;
              height: 400px !important;
              border-radius: 20px !important;
            }

            .play-button {
              width: 60px !important;
              height: 60px !important;
              font-size: 2rem !important;
            }

            .mute-button {
              width: 40px !important;
              height: 40px !important;
              font-size: 1.1rem !important;
              top: 15px !important;
              right: 15px !important;
            }

            .text-box {
              padding: 2rem 1.5rem !important;
              height: auto !important;
              border-radius: 20px !important;
            }

            .text-box-title {
              font-size: 1.8rem !important;
              margin-bottom: 1.5rem !important;
            }

            .text-box-paragraph {
              font-size: 1rem !important;
              margin-bottom: 1rem;
            }

            .text-box-highlight {
              font-size: 1rem !important;
            }

            .gallery-section {
              padding: 1rem 0.5rem !important;
            }

            .gallery-row {
              height: 200px !important;
              margin-bottom: -20px !important;
              padding-top: 20px !important;
            }

            .rope-svg {
              top: 30px !important;
              height: 60px !important;
            }

            .photos-container {
              flex-wrap: wrap !important;
              gap: 15px !important;
              width: 95% !important;
            }

            .photo-item {
              transform: rotate(0deg) !important;
            }

            .photo-item > div {
              width: 160px !important;
              height: 120px !important;
            }

            .footer-message {
              padding: 2rem 1rem !important;
              margin-top: 2rem !important;
            }

            .footer-title {
              font-size: 1.6rem !important;
            }

            .footer-subtitle {
              font-size: 1rem !important;
            }

            /* 라이트박스 모바일 스타일 */
            .lightbox-close {
              font-size: 1.5rem !important;
              top: 10px !important;
              right: 10px !important;
            }

            .lightbox-counter {
              font-size: 1rem !important;
            }

            .lightbox-prev,
            .lightbox-next {
              font-size: 2rem !important;
              width: 50px !important;
              height: 50px !important;
              background: rgba(0,0,0,0.5) !important;
              border-radius: 50% !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
            }

            .lightbox-prev {
              left: 10px !important;
            }

            .lightbox-next {
              right: 10px !important;
            }
          }

          @media (max-width: 480px) {
            .video-wrapper {
              height: 300px !important;
            }

            .text-box-title {
              font-size: 1.5rem !important;
            }

            .text-box-paragraph,
            .text-box-highlight {
              font-size: 0.9rem !important;
            }

            .gallery-row {
              height: 150px !important;
            }

            .photo-item > div {
              width: 140px !important;
              height: 100px !important;
            }

            .footer-title {
              font-size: 1.4rem !important;
            }

            .footer-subtitle {
              font-size: 0.9rem !important;
            }
          }
        `}</style>

        {/* 라이트박스 */}
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