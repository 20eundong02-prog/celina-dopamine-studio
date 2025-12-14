"use client";

import { useEffect, useRef, useState } from "react";
import "./intro.css";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  targetX: number;
  targetY: number;
  angle: number;
  rotationSpeed: number;
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

    const pastelColors = [
      "#FFB3BA",
      "#FFDFBA",
      "#FFFFBA",
      "#BAFFC9",
      "#BAE1FF",
      "#E0BBE4",
      "#FFDFD3",
    ];

    const particles: Particle[] = [];
    const particleCount = window.innerWidth <= 768 ? 6 : 8;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount;
      const distance = Math.min(canvas.width, canvas.height) * 0.35;
      
      const baseRadius = window.innerWidth <= 768 ? 30 : 40;
      const randomRadius = window.innerWidth <= 768 ? 40 : 60;
      
      particles.push({
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        vx: 0,
        vy: 0,
        radius: baseRadius + Math.random() * randomRadius,
        color: pastelColors[i % pastelColors.length],
        targetX: centerX,
        targetY: centerY,
        angle: angle,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    let startTime = Date.now();
    let animationPhase: "gathering" | "flash" | "complete" = "gathering";
    const gatherDuration = 1200;
    const flashDuration = 200;

    const drawFluffyParticle = (
      particle: Particle,
      opacity: number = 1
    ) => {
      const { x, y, radius, color } = particle;

      ctx.save();

      for (let i = 3; i > 0; i--) {
        const r = radius * (0.6 + i * 0.2);
        const alpha = (0.15 * i * opacity);
        
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `${color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      }

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, color);
      gradient.addColorStop(0.5, `${color}AA`);
      gradient.addColorStop(1, `${color}00`);

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.restore();
    };

    const animate = () => {
      const elapsed = Date.now() - startTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (animationPhase === "gathering") {
        const progress = Math.min(elapsed / gatherDuration, 1);
        const easeProgress = progress * progress * progress;

        particles.forEach((particle) => {
          const currentDistance = Math.sqrt(
            Math.pow(particle.x - centerX, 2) + 
            Math.pow(particle.y - centerY, 2)
          );
          
          particle.angle += particle.rotationSpeed * (1 + easeProgress * 3);
          
          const spiralRadius = currentDistance * (1 - easeProgress);
          const targetX = centerX + Math.cos(particle.angle) * spiralRadius;
          const targetY = centerY + Math.sin(particle.angle) * spiralRadius;
          
          particle.x += (targetX - particle.x) * 0.15;
          particle.y += (targetY - particle.y) * 0.15;

          drawFluffyParticle(particle);
        });

        const allNearCenter = particles.every((p) => {
          const dx = p.x - centerX;
          const dy = p.y - centerY;
          const r = Math.sqrt(dx * dx + dy * dy);
          return r < 80;
        });

        if (allNearCenter || progress >= 1) {
          animationPhase = "flash";
          startTime = Date.now();
        }
      } else if (animationPhase === "flash") {
        const flashProgress = elapsed / flashDuration;

        if (flashProgress < 0.5) {
          const brightness = flashProgress * 2;
          ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else {
          const fadeProgress = (flashProgress - 0.5) * 2;
          ctx.fillStyle = `rgba(255, 255, 255, ${1 - fadeProgress})`;
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          if (fadeProgress > 0.8) {
            animationPhase = "complete";
            setBgColor("#FFE5EC");
            setShowText(true);
          }
        }

        particles.forEach((particle) => {
          drawFluffyParticle(particle, 1 - flashProgress);
        });

        if (elapsed >= flashDuration) {
          animationPhase = "complete";
          setBgColor("#FFE5EC");
          setShowText(true);
        }
      } else {
        return;
      }

      requestAnimationFrame(animate);
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
        height: "100dvh", // 모바일 주소창 대응
        overflow: "hidden",
        backgroundColor: bgColor,
        transition: "background-color 0.3s ease",
      }}
    >
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

      {/* 타이틀 컨테이너 */}
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
          transition: "opacity 0.5s ease",
          pointerEvents: "none",
          boxSizing: "border-box", // 패딩이 레이아웃 깨뜨리지 않도록 설정
        }}
      >
        <div className="intro-content" style={{ textAlign: "center", width: "100%" }}>
          <h1
            className="intro-title"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "5rem",
              fontWeight: 700,
              color: "#FF6B9D",
              marginBottom: "1.5rem",
              textShadow: "2px 2px 8px rgba(255, 107, 157, 0.3)",
              lineHeight: 1.2,
            }}
          >
            Celina&apos;s Dopamine Studio
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
            }}
          >
            – Powered by Seon Kyeong
          </p>
        </div>
      </div>

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .intro-text-container {
            /* 하단에 20vh만큼의 공간을 강제로 비워, 중심점을 위로 끌어올림 */
            padding: 0 5% 20vh 5% !important;
          }

          .intro-title {
            font-size: 2.5rem !important;
            padding: 0 20px;
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
          .intro-title {
            font-size: 2rem !important;
            padding: 0 15px;
            margin-bottom: 0.8rem !important;
          }

          .intro-subtitle {
            font-size: 0.9rem !important;
            padding: 0 15px !important;
            margin-bottom: 0.4rem !important;
          }

          .intro-author {
            font-size: 0.8rem !important;
          }
        }

        @media (orientation: landscape) and (max-height: 500px) {
          .intro-text-container {
             padding-bottom: 5vh !important; /* 가로 모드에서는 여백 줄임 */
          }
          .intro-title {
            font-size: 1.8rem !important;
            margin-bottom: 0.6rem !important;
          }

          .intro-subtitle {
            font-size: 0.85rem !important;
            margin-bottom: 0.3rem !important;
          }

          .intro-author {
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </div>
  );
}