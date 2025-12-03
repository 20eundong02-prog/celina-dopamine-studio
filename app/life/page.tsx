"use client";

import React, { useState, useRef, useEffect } from "react";

// --- [타입 정의] ---
interface Photo {
  id: number;
  rotation: number;
}

export default function Life() {
  // --- [상태 관리] ---
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  
  // 라이트박스 관련
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);

  // --- [설정 데이터] ---
  const photos: Photo[] = Array.from({ length: 32 }, (_, i) => ({
    id: i + 1,
    rotation: (i % 2 === 0 ? 1 : -1) * (Math.random() * 5 + 2), 
  }));

  const getImagePath = (photoNum: number) => {
    return `/image/${photoNum}.jpg`;
  };

  // --- [이벤트 핸들러] ---
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
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

  // 키보드 조작
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
      if (e.key === "ArrowLeft") setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, photos.length]);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Baloo+2:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      
      <div style={{ minHeight: "100vh", backgroundColor: "#FFE5EC", fontFamily: "'Baloo 2', cursive", overflowX: "hidden", paddingBottom: "100px" }}>
        
        {/* --- [1. 상단 섹션: 비디오 & 메시지] --- */}
        <section style={{ padding: "6rem 2rem 4rem", display: "flex", justifyContent: "center" }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "stretch", gap: "40px", justifyContent: "center", maxWidth: "1000px", width: "100%", height: "600px" }}>
            
            {/* 좌측: 비디오 플레이어 */}
            <div style={{ position: "relative", flex: "0 0 360px", height: "100%", borderRadius: "30px", border: "4px solid #FFB6C1", boxShadow: "0 10px 30px rgba(255, 107, 157, 0.3)", overflow: "hidden", background: "#000" }} onClick={togglePlay}>
              <video
                ref={videoRef}
                src="/image/0.mp4" 
                loop
                playsInline
                muted={isMuted}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              {!isPlaying && (
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.2)" }}>
                  <div style={{ fontSize: "3rem", color: "white", background: "#FF6B9D", width: "80px", height: "80px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: "8px", boxShadow: "0 4px 15px rgba(255, 107, 157, 0.5)" }}>▶</div>
                </div>
              )}
              <button style={{ position: "absolute", top: "20px", right: "20px", background: "rgba(255, 255, 255, 0.8)", border: "none", borderRadius: "50%", width: "45px", height: "45px", fontSize: "1.4rem", zIndex: 10 }} onClick={toggleMute}>
                {isMuted ? "🔇" : "🔊"}
              </button>
            </div>

            {/* 우측: 메시지 박스 */}
            <div style={{ flex: 1, height: "100%", background: "rgba(255, 255, 255, 0.7)", backdropFilter: "blur(10px)", padding: "3rem", borderRadius: "30px", border: "4px solid #FFB6C1", boxShadow: "0 8px 32px rgba(255, 107, 157, 0.2)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
              <h1 style={{ fontFamily: "'Fredoka One', cursive", color: "#FF6B9D", fontSize: "2.6rem", marginBottom: "2rem", lineHeight: 1.4, textShadow: "3px 3px 0px rgba(255, 255, 255, 0.9)", letterSpacing: "1px" }}>
                All the Sparkling Moments<br />That Made Me 💕
              </h1>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <p style={{ color: "#666", fontSize: "1.15rem", lineHeight: 1.9, margin: 0, fontWeight: 600, fontFamily: "'Baloo 2', cursive" }}>
                  Walking through life with fierce resilience<br />
                  and an ever-burning passion 🔥
                </p>
                <p style={{ color: "#666", fontSize: "1.15rem", lineHeight: 1.9, margin: 0, fontWeight: 600, fontFamily: "'Baloo 2', cursive" }}>
                  Always reaching for the next spark,<br />
                  guided by relentless curiosity ⚡️
                </p>
                <p style={{ color: "#FF6B9D", fontSize: "1.15rem", lineHeight: 1.9, margin: 0, fontWeight: 700, fontFamily: "'Baloo 2', cursive" }}>
                  Gathering vibrant moments to craft a story<br />
                  that&apos;s uniquely my own 🎬
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* --- [2. 빨랫줄 사진 갤러리 섹션] --- */}
        <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 0" }}>
          {chunkArray(photos, 4).map((rowPhotos, rowIndex) => (
            <div key={rowIndex} style={{ position: "relative", height: "380px", marginBottom: "-50px", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "40px" }}>
              <svg style={{ position: "absolute", top: "60px", left: 0, width: "100%", height: "100px", zIndex: 0, overflow: "visible" }} viewBox="0 0 1200 100" preserveAspectRatio="none">
                <path d="M0,10 Q600,80 1200,10" fill="none" stroke="white" strokeWidth="2" strokeDasharray="10,5" />
              </svg>

              <div style={{ display: "flex", justifyContent: "space-around", width: "90%", zIndex: 1 }}>
                {rowPhotos.map((photo) => (
                  <div 
                    key={photo.id} 
                    className="photo-hover"
                    style={{ 
                      position: "relative",
                      display: "flex", 
                      flexDirection: "column", 
                      alignItems: "center", 
                      transform: `rotate(${photo.rotation}deg)` 
                    }}
                    onClick={() => openLightbox(photo.id - 1)}
                  >
                    <div style={{ width: "8px", height: "20px", background: "#aaa", borderRadius: "4px", marginBottom: "-8px", zIndex: 2, boxShadow: "1px 1px 3px rgba(0,0,0,0.3)", position: "relative" }}></div>
                    <img 
                      src={getImagePath(photo.id)} 
                      alt={`Memory ${photo.id}`} 
                      style={{ height: "200px", width: "auto", maxWidth: "280px", objectFit: "contain", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", border: "2px solid white", backgroundColor: "white", borderRadius: "4px" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* --- [3. 하단 메시지] --- */}
        <footer style={{ textAlign: "center", marginTop: "2rem", padding: "3rem", color: "#FF6B9D" }}>
          <div style={{ width: "100%", height: "80px", marginBottom: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ fontSize: "4rem", animation: "bounce 2s ease-in-out infinite" }}>🏃‍♀️</div>
          </div>
          
          <p style={{ fontFamily: "'Fredoka One', cursive", fontSize: "2.2rem", marginBottom: "0.5rem" }}>And the journey continues... 🚀</p>
          <p style={{ fontFamily: "'Baloo 2', cursive", fontSize: "1.25rem", color: "#888", fontWeight: 600 }}>Still searching for new dopamine, growing every single day 💕</p>
        </footer>
        
        {/* CSS 애니메이션 */}
        <style jsx global>{`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          /* 사진 호버 효과 */
          .photo-hover {
            cursor: pointer;
            transition: transform 0.3s ease, z-index 0.3s;
          }
          
          .photo-hover:hover {
            transform: scale(1.1) rotate(0deg) !important;
            z-index: 10;
          }
          
          /* 클릭 가능한 요소들에 커서 */
          button {
            cursor: pointer;
          }
        `}</style>

        {/* --- [4. 라이트박스 모달] --- */}
        {lightboxOpen && (
          <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.9)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center" }} onClick={closeLightbox}>
            <button style={{ position: "absolute", top: "20px", right: "20px", background: "none", border: "none", color: "white", fontSize: "2rem", padding: "20px" }}>✕</button>
            <div style={{ position: "relative", maxWidth: "90vw", maxHeight: "85vh" }} onClick={(e) => e.stopPropagation()}>
              <img 
                src={getImagePath(photos[currentPhotoIndex].id)} 
                alt={`Photo ${photos[currentPhotoIndex].id}`}
                style={{ maxWidth: "100%", maxHeight: "80vh", borderRadius: "4px", boxShadow: "0 0 20px rgba(0,0,0,0.5)", background: "white" }}
              />
              <div style={{ color: "white", textAlign: "center", marginTop: "10px", fontSize: "1.2rem" }}>
                {currentPhotoIndex + 1} / {photos.length}
              </div>
            </div>
            <button style={{ position: "absolute", left: "20px", background: "none", border: "none", color: "white", fontSize: "3rem", padding: "20px" }} onClick={prevPhoto}>‹</button>
            <button style={{ position: "absolute", right: "20px", background: "none", border: "none", color: "white", fontSize: "3rem", padding: "20px" }} onClick={nextPhoto}>›</button>
          </div>
        )}
      </div>
    </>
  );
}

// 유틸리티 함수
function chunkArray<T>(array: T[], size: number): T[][] {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
}
