"use client";

import Image from "next/image";

export default function About() {

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#FFE5EC", padding: "6rem 2rem 4rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Profile and Dopamine Studio Section */}
        <div
          style={{
            display: "flex",
            gap: "3rem",
            marginBottom: "5rem",
            alignItems: "flex-start",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(10px)",
            borderRadius: "25px",
            padding: "3rem",
            border: "3px solid #FFB6C140",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
            flexWrap: "wrap",
            opacity: 0,
            animation: "fadeIn 0.8s ease forwards",
          }}
        >
          {/* Profile Image */}
          <div style={{ flex: "0 0 250px" }}>
            <div
              style={{
                width: "250px",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(255, 107, 157, 0.3)",
                border: "4px solid #FFB6C1",
                backgroundColor: "#FFF5F7",
              }}
            >
              <Image
                src="/profile.png"
                alt="Seon Kyeong Kim Profile"
                width={250}
                height={375}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>

          {/* Name and Dopamine Studio Description */}
          <div style={{ flex: "1 1 500px" }}>
            <h2
              style={{
                fontFamily: "'Fredoka', 'Poppins', sans-serif",
                fontSize: "3rem",
                fontWeight: 700,
                color: "#FF6B9D",
                marginBottom: "0.5rem",
              }}
            >
              Kim Seon Kyeong
            </h2>
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "1.2rem",
                color: "#666",
                fontWeight: 500,
                marginBottom: "2rem",
              }}
            >
              Materials Science & Engineering Researcher
            </p>

            {/* Dopamine Studio Description - Right Aligned */}
            <div
              style={{
                textAlign: "right",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Fredoka', 'Comic Sans MS', cursive",
                  fontSize: "2.2rem",
                  fontWeight: 700,
                  color: "#FF6B9D",
                  marginBottom: "1rem",
                }}
              >
                Dopamine Studio
              </h3>
              <div
                style={{
                  fontFamily: "'Quicksand', 'Montserrat', sans-serif",
                  fontSize: "1rem",
                  lineHeight: "1.8",
                  color: "#555",
                }}
              >
                <p style={{ marginBottom: "0.8rem" }}>
                  Dopamine helps us move, learn, create, and pursue what excites us. ✨
                </p>
                <p style={{ marginBottom: "0.8rem" }}>
                  Dopamine Studio is a small universe where curiosity sparks ideas,
                  <br />
                  and ideas grow into warm technology. 💡
                </p>
                <p>
                  Different colors and shapes come together here,
                  <br />
                  fusing creativity with diversity – to build innovations that feel gentle and human. 🌸
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CV Timeline Section */}
        <div style={{ marginTop: "4rem" }}>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "#FF6B9D",
              marginBottom: "3rem",
              textAlign: "center",
            }}
          >
            My Journey ✨
          </h2>

          {/* Timeline */}
          <div style={{ position: "relative", paddingLeft: "2rem", maxWidth: "1100px", margin: "0 auto" }}>
            {/* Vertical Line */}
            <div
              style={{
                position: "absolute",
                left: "0.5rem",
                top: "1.5rem",
                bottom: 0,
                width: "3px",
                background: "linear-gradient(180deg, #FFB6C1, #FFD4A3, #B4E7CE)",
              }}
            />

            {/* 1. 한국세라믹기술원 */}
            <MainTimelineItem
              year="2024.02 - 2025.08"
              title="한국세라믹기술원 연수연구원"
              subtitle="Korea Institute of Ceramic Engineering and Technology"
              description="광학 시뮬레이션, 페로브스카이트 형광체, 복사냉각 연구"
              color="#FFB6C1"
              achievements={[
                "📄 Advanced Science 공동 1저자 게재",
                "📄 Advanced Optical Materials 공동 1저자 투고",
                "💻 RSoft 광학 simulation 및 프로그래밍 작업"
              ]}
            />

            {/* 2. 고려대학교 */}
            <MainTimelineItem
              year="2023.09 - 2025.02"
              title="고려대학교 대학원 신소재공학과"
              subtitle="Korea University, Materials Science & Engineering (M.S.)"
              description="대학원 우수 신입생 장학금 수여"
              color="#FFD4A3"
              achievements={[
                "🔬 Low-temperature GaN 연구",
                "🔬 TSV Step Coverage 연구"
              ]}
            />

            {/* 3. 신라대학교 */}
            <MainTimelineItem
              year="2020.03 - 2023.06"
              title="신라대학교 에너지응용화학과"
              subtitle="Silla University, Applied Chemistry (B.S.)"
              description="6학기 조기 졸업, 최우등 졸업"
              color="#B4E7CE"
              achievements={[
                "🧪 형광체 연구 (CaNb₂O₆:RE³⁺ 합성 및 스퍼터링)",
                "🧪 CVD Carbon Microcoil 성장 실험",
                "🧪 mRGO 합성 및 중금속 제거 연구",
                "🧪 LDH 공침법 합성 및 필터 응용"
              ]}
            />
          </div>
        </div>

        {/* Skills Section */}
        <div style={{ marginTop: "5rem" }}>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "2rem",
              fontWeight: 700,
              color: "#FF6B9D",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Research Keywords 🔬
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            {[
              { text: "재료합성", color: "#FFB6C1" },
              { text: "박막증착", color: "#FFD4A3" },
              { text: "광학분석", color: "#B4E7CE" },
              { text: "코딩 & 시뮬레이션", color: "#C5A3FF" },
              { text: "Perovskite", color: "#FFB3E6" },
              { text: "Radiative Cooling", color: "#FFAEC9" },
            ].map((skill, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  border: `3px solid ${skill.color}`,
                  borderRadius: "20px",
                  padding: "0.8rem 1.5rem",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  color: "#555",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = skill.color;
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
                  e.currentTarget.style.color = "#555";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {skill.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Quicksand:wght@400;500;600;700&display=swap');
      `}</style>
    </div>
  );
}

function MainTimelineItem({
  year,
  title,
  subtitle,
  description,
  color,
  achievements,
}: {
  year: string;
  title: string;
  subtitle?: string;
  description?: string;
  color: string;
  achievements?: string[];
}) {
  return (
    <div
      style={{
        position: "relative",
        marginBottom: "2.5rem",
      }}
    >
      {/* Circle on timeline */}
      <div
        style={{
          position: "absolute",
          left: "-1.55rem",
          top: "1.5rem",
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          backgroundColor: color,
          border: "3px solid white",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
          zIndex: 1,
        }}
      />

      {/* Main White Box */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "2rem",
          border: `3px solid ${color}40`,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          transition: "all 0.3s ease",
          marginLeft: "1rem",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateX(10px)";
          e.currentTarget.style.boxShadow = `0 8px 20px ${color}40`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateX(0)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
        }}
      >
        <p
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "0.95rem",
            fontWeight: 600,
            color: color,
            marginBottom: "0.8rem",
          }}
        >
          {year}
        </p>
        <h3
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "1.4rem",
            fontWeight: 700,
            color: "#333",
            marginBottom: "0.5rem",
          }}
        >
          {title}
        </h3>
        {subtitle && (
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1rem",
              color: "#666",
              marginBottom: "0.8rem",
            }}
          >
            {subtitle}
          </p>
        )}
        {description && (
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.95rem",
              color: "#777",
              marginBottom: achievements ? "1.5rem" : "0",
            }}
          >
            {description}
          </p>
        )}

        {/* Achievements */}
        {achievements && achievements.length > 0 && (
          <div
            style={{
              marginTop: "1.5rem",
              paddingTop: "1.5rem",
              borderTop: `2px solid ${color}20`,
            }}
          >
            {achievements.map((achievement, index) => (
              <div
                key={index}
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.95rem",
                  color: "#555",
                  marginBottom: index < achievements.length - 1 ? "0.8rem" : "0",
                  paddingLeft: "0.5rem",
                }}
              >
                {achievement}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
