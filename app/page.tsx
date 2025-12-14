"use client";

import { useEffect, useRef, useState } from "react";
// import "./intro.css"; // 필요시 주석 해제

interface Particle {
  radius: number;
  color: string;
  angle: number;      // 현재 각도
  distance: number;   // 중심으로부터의 거리
  speed: number;      // 회전 속도
}

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showText, setShowText] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // [설정] 솜사탕 같은 파스텔 톤 색상 팔레트
    const pastelColors = [
      "#FF9AA2", // Soft Red
      "#FFB7B2", // Salmon
      "#FFDAC1", // Peach
      "#E2F0CB", // Lime
      "#B5EAD7", // Mint
      "#C7CEEA", // Periwinkle
      "#F8C8DC", // Pink
      "#AEC6CF", // Pastel Blue
      "#D4F0F0", // Light Cyan
      "#E6E6FA", // Lavender
    ];

    const particles: Particle[] = [];
    // [설정] 입자 개수: 모바일은 적게, PC는 많게 (풍성하게 섞이도록)
    const particleCount = window.innerWidth <= 768 ? 10 : 18;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount;
      // 화면 밖에서 시작하도록 거리 설정
      const maxDistance = Math.max(canvas.width, canvas.height) * 0.6; 
      
      particles.push({
        // [중요] 반지름을 아주 크게 설정하여 솜사탕 덩어리처럼 보이게 함
        radius: window.innerWidth <= 768 ? 50 + Math.random() * 40 : 80 + Math.random() * 60,
        color: pastelColors[i % pastelColors.length],
        angle: angle,
        distance: maxDistance,
        // 회전 속도를 랜덤하게 주어 자연스럽게 섞이도록 함
        speed: 0.02 + Math.random() * 0.02, 
      });
    }

    let startTime = Date.now();
    let animationPhase: "gathering" | "flash" | "complete" = "gathering";
    const gatherDuration = 2200; // 뭉치는 시간 (천천히)
    const flashDuration = 400;

    const animate = () => {
      const elapsed = Date.now() - startTime;

      // 캔버스 초기화
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // [핵심 효과 1] 캔버스 전체 블러 처리 -> 공 느낌을 없애고 안개처럼 만듦
      // 모바일 성능 고려하여 블러 양 조절
      ctx.filter = window.innerWidth <= 768 ? "blur(25px)" : "blur(50px)";
      
      // [핵심 효과 2] 색상 혼합 모드 -> 색이 겹치면 빛처럼 밝아짐 (수채화 느낌)
      ctx.globalCompositeOperation = "screen"; // 또는 "lighter"

      if (animationPhase === "gathering") {
        const progress = Math.min(elapsed / gatherDuration, 1);
        // easeOutCubic: 끝으로 갈수록 천천히 도착
        const ease = 1 - Math.pow(1 - progress, 3); 

        particles.forEach((p) => {
          // 1. 거리 줄이기 (밖 -> 안으로 빨려들어옴)
          // 150px 정도까지만 모이고 너무 작게 뭉치지 않게 함 (배경 원형 느낌 유지)
          const minDistance = 50;
          const currentDist = p.distance - (p.distance - minDistance) * ease;
          
          // 2. 회전 시키기 (소용돌이)
          // 시간이 지날수록 더 빨리 돎 (빨려들어가는 느낌)
          p.angle += p.speed * (1 + progress * 1.5); 

          const x = centerX + Math.cos(p.angle) * currentDist;
          const y = centerY + Math.sin(p.angle) * currentDist;

          // 그리기
          ctx.beginPath();
          ctx.arc(x, y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        });

        // 애니메이션 종료 조건
        if (progress >= 1) {
          animationPhase = "flash";
          startTime = Date.now();
        }

      } else if (animationPhase === "flash") {
        // 플래시 단계에서는 블러를 끄고 하얗게 덮음
        ctx.filter = "none";
        ctx.globalCompositeOperation = "source-over"; // 기본 모드로 복귀

        const flashProgress = elapsed / flashDuration;
        
        if (flashProgress < 0.5) {
            // 밝아짐 (White Flash)
            const opacity = flashProgress * 2;
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else {
            // 화이트아웃 -> 배경색으로 전환
            const fadeOut = (flashProgress - 0.5) * 2;
            ctx.fillStyle = `rgba(255, 255, 255, ${1 - fadeOut})`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            if(fadeOut > 0.6 && !showText) {
                 setBgColor("#FFE5EC");
                 setShowText(true);
            }
        }

        if (elapsed >= flashDuration) {
          animationPhase = "complete";
          setBgColor("#FFE5EC");
          setShowText(true);
        }
      }

      if (animationPhase !== "complete") {
        requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div
      className="intro-page"
      style={{
        position: "relative",
        width: "100vw",
        height: "100dvh",
        overflow: "hidden",
        backgroundColor: bgColor,
        transition: "background-color 0.5s ease",
      }}
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Poppins:wght@700&family=Shrikhand&display=swap');
      `}</style>

      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          pointerEvents: "none",
          touchAction: "none",
        }}
      />

      <div
        className="intro-text-container"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 10%",
          zIndex: 10,
          opacity: showText ? 1 : 0,
          transition: "opacity 1s ease",
          pointerEvents: "none",
          boxSizing: "border-box",
        }}
      >
        <div
          className="intro-content"
          style={{ textAlign: "center", width: "100%", position: "relative" }}
        >
          {/* 타이틀 뒤 배경 (애니메이션 끝난 후 나타나는 정적인 배경) */}
          <div className="title-bg-blob"></div>

          <h1
            className="intro-title"
            style={{
              fontFamily: "'Shrikhand', cursive", // layout.tsx에 import 되어있다면 var(--font-shrikhand) 사용 가능
              fontSize: "5rem",
              fontWeight: 400,
              color: "#ff4785",
              marginBottom: "1.5rem",
              lineHeight: 1.1,
              position: "relative",
              zIndex: 2,
            }}
          >
            Celina&apos;s
            <br />
            Dopamine
            <br />
            Studio
          </h1>
          <p
            className="intro-subtitle"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1.4rem",
              color: "#666",
              fontWeight: 300,
              lineHeight: 1.5,
              padding: "0",
              marginBottom: "0.8rem",
              position: "relative",
              zIndex: 2,
            }}
          >
            Where Diversity Reacts Into Warm Technology
          </p>
          <p
            className="intro-author"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1.1rem",
              color: "#999",
              fontWeight: 300,
              marginTop: 0,
              position: "relative",
              zIndex: 2,
            }}
          >
            – Powered by Seon Kyeong
          </p>
        </div>
      </div>

      <style jsx>{`
        /* 배경 Blob 스타일 (애니메이션 끝난 뒤 고정 배경) */
        .title-bg-blob {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 800px;
          background-color: #CCDEED;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.9;
          z-index: 1;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .intro-text-container {
            padding: 0 5% 12vh 5% !important;
          }
          .title-bg-blob {
            width: 500px;
            height: 500px;
            filter: blur(40px);
            opacity: 0.85;
          }
          .intro-title {
            font-size: 4rem !important;
            line-height: 1.1 !important;
            padding: 0 10px;
            margin-bottom: 1rem !important;
          }
          .intro-subtitle {
            font-size: 1rem !important;
            padding: 0 20px !important;
            margin-bottom: 0.5rem !important;
          }
          .intro-author {
            font-size: 0.9rem !important;
          }
        }

        @media (max-width: 480px) {
          .title-bg-blob {
            width: 350px;
            height: 350px;
          }
          .intro-title {
            font-size: 3.2rem !important;
          }
          .intro-subtitle {
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </div>
  );
}