"use client";

import React, { useState } from "react";

export default function PhosphorPerovskitePage() {
  const [activeProject, setActiveProject] = useState<string>("");

  const scrollToSection = (id: string) => {
    setActiveProject(id);
    document.getElementById(`project-${id}`)?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  };

  return (
    <div
      style={{
        fontFamily: "'Baloo 2', 'Pretendard', sans-serif",
        background: "#FFE8F1",
        minHeight: "100vh",
        padding: "100px 20px 60px",
        color: "#444",
      }}
    >
      {/* Header Section */}
      <header style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1
          style={{
            fontSize: "3rem",
            color: "#FF6B9D",
            fontWeight: 800,
            marginBottom: "15px",
            fontFamily: "'Montserrat', 'Fredoka One', sans-serif",
            letterSpacing: "1px",
            textShadow: "2px 2px 0px #FFF",
          }}
        >
          Phosphor & Perovskite
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#7A7A7A",
            fontWeight: 600,
            maxWidth: "650px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Designing <b>Light</b> & <b>Stability</b>.<br />
          발광 파장 제어부터 차세대 소재의 내구성 강화까지.
        </p>
      </header>

      {/* Timeline Section - Cleaner Design */}
      <div style={{ maxWidth: "900px", margin: "0 auto 60px" }}>
        <div style={{ position: "relative", padding: "0 20px" }}>
          {/* Timeline Line */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              right: "20px",
              height: "3px",
              background: "linear-gradient(to right, rgba(255, 107, 157, 0.3), #FF6B9D, rgba(255, 107, 157, 0.3))",
              borderRadius: "2px",
            }}
          />
         
          {/* Timeline Points */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* 2020-2021 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: 1,
              }}
            >
              <div
                style={{
                  width: activeProject === 'ldh' ? "16px" : "12px",
                  height: activeProject === 'ldh' ? "16px" : "12px",
                  borderRadius: "50%",
                  background: activeProject === 'ldh' ? "#FF6B9D" : "white",
                  border: "3px solid #FF6B9D",
                  transition: "all 0.3s ease",
                  boxShadow: activeProject === 'ldh'
                    ? "0 0 0 4px rgba(255, 107, 157, 0.15)"
                    : "0 2px 4px rgba(0,0,0,0.1)",
                }}
              />
              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: activeProject === 'ldh' ? "#FF6B9D" : "#999",
                  transition: "color 0.3s ease",
                  marginTop: "15px",
                  marginBottom: "20px",
                }}
              >
                2020 - 2021
              </div>
              
              <div
                onClick={() => scrollToSection('ldh')}
                style={{
                  fontSize: "0.9rem",
                  color: activeProject === 'ldh' ? "#FF6B9D" : "#666",
                  textAlign: "center",
                  cursor: "pointer",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  background: activeProject === 'ldh' 
                    ? "rgba(255, 107, 157, 0.1)" 
                    : "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: `2px solid ${activeProject === 'ldh' ? "#FF6B9D" : "rgba(255, 255, 255, 0.5)"}`,
                  fontWeight: 600,
                  transition: "all 0.2s ease",
                  boxShadow: activeProject === 'ldh' 
                    ? "0 4px 12px rgba(255, 107, 157, 0.15)" 
                    : "0 2px 8px rgba(0,0,0,0.05)",
                  minWidth: "140px",
                }}
              >
                2D Layered LDH
              </div>
            </div>

            {/* 2022-2023 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: 1,
              }}
            >
              <div
                style={{
                  width: activeProject === 'phosphor' ? "16px" : "12px",
                  height: activeProject === 'phosphor' ? "16px" : "12px",
                  borderRadius: "50%",
                  background: activeProject === 'phosphor' ? "#FF6B9D" : "white",
                  border: "3px solid #FF6B9D",
                  transition: "all 0.3s ease",
                  boxShadow: activeProject === 'phosphor'
                    ? "0 0 0 4px rgba(255, 107, 157, 0.15)"
                    : "0 2px 4px rgba(0,0,0,0.1)",
                }}
              />
              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: activeProject === 'phosphor' ? "#FF6B9D" : "#999",
                  transition: "color 0.3s ease",
                  marginTop: "15px",
                  marginBottom: "20px",
                }}
              >
                2022 - 2023
              </div>
              
              <div
                onClick={() => scrollToSection('phosphor')}
                style={{
                  fontSize: "0.9rem",
                  color: activeProject === 'phosphor' ? "#FF6B9D" : "#666",
                  textAlign: "center",
                  cursor: "pointer",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  background: activeProject === 'phosphor' 
                    ? "rgba(255, 107, 157, 0.1)" 
                    : "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: `2px solid ${activeProject === 'phosphor' ? "#FF6B9D" : "rgba(255, 255, 255, 0.5)"}`,
                  fontWeight: 600,
                  transition: "all 0.2s ease",
                  boxShadow: activeProject === 'phosphor' 
                    ? "0 4px 12px rgba(255, 107, 157, 0.15)" 
                    : "0 2px 8px rgba(0,0,0,0.05)",
                  minWidth: "160px",
                }}
              >
                Oxide Phosphor
              </div>
            </div>

            {/* 2024-2025 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: 1,
              }}
            >
              <div
                style={{
                  width: activeProject === 'perovskite' ? "16px" : "12px",
                  height: activeProject === 'perovskite' ? "16px" : "12px",
                  borderRadius: "50%",
                  background: activeProject === 'perovskite' ? "#FF6B9D" : "white",
                  border: "3px solid #FF6B9D",
                  transition: "all 0.3s ease",
                  boxShadow: activeProject === 'perovskite'
                    ? "0 0 0 4px rgba(255, 107, 157, 0.15)"
                    : "0 2px 4px rgba(0,0,0,0.1)",
                }}
              />
              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: activeProject === 'perovskite' ? "#FF6B9D" : "#999",
                  transition: "color 0.3s ease",
                  marginTop: "15px",
                  marginBottom: "20px",
                }}
              >
                2024 - 2025
              </div>
              
              <div
                onClick={() => scrollToSection('perovskite')}
                style={{
                  fontSize: "0.9rem",
                  color: activeProject === 'perovskite' ? "#FF6B9D" : "#666",
                  textAlign: "center",
                  cursor: "pointer",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  background: activeProject === 'perovskite' 
                    ? "rgba(255, 107, 157, 0.1)" 
                    : "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: `2px solid ${activeProject === 'perovskite' ? "#FF6B9D" : "rgba(255, 255, 255, 0.5)"}`,
                  fontWeight: 600,
                  transition: "all 0.2s ease",
                  boxShadow: activeProject === 'perovskite' 
                    ? "0 4px 12px rgba(255, 107, 157, 0.15)" 
                    : "0 2px 8px rgba(0,0,0,0.05)",
                  minWidth: "140px",
                }}
              >
                Perovskite Stability
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Overview Section - Semi-transparent Cards */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto 60px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {/* Card 1: Perovskite */}
        <div
          onClick={() => scrollToSection('perovskite')}
          style={{
            ...overviewCardStyle,
            background: "rgba(255, 255, 255, 0.6)",
            backdropFilter: "blur(10px)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(108, 92, 231, 0.25)";
            e.currentTarget.style.borderColor = "#6C5CE7";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.6)";
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>💎</div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#333", marginBottom: "8px" }}>
            Perovskite Stability
          </h3>
          <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: "1.5", margin: 0 }}>
            PLQY 85%+ Deep Green<br />Moisture Resistance
          </p>
        </div>

        {/* Card 2: Oxide Phosphor */}
        <div
          onClick={() => scrollToSection('phosphor')}
          style={{
            ...overviewCardStyle,
            background: "rgba(255, 255, 255, 0.6)",
            backdropFilter: "blur(10px)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(255, 107, 157, 0.25)";
            e.currentTarget.style.borderColor = "#FF6B9D";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.6)";
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>🌈</div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#333", marginBottom: "8px" }}>
            Oxide Phosphor
          </h3>
          <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: "1.5", margin: 0 }}>
            Multi-color Emission<br />Quantum Efficiency
          </p>
        </div>

        {/* Card 3: 2D LDH */}
        <div
          onClick={() => scrollToSection('ldh')}
          style={{
            ...overviewCardStyle,
            background: "rgba(255, 255, 255, 0.6)",
            backdropFilter: "blur(10px)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 184, 148, 0.25)";
            e.currentTarget.style.borderColor = "#00B894";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.6)";
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>🧪</div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#333", marginBottom: "8px" }}>
            2D Layered LDH
          </h3>
          <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: "1.5", margin: 0 }}>
            Red/Green Emission<br />Chemical Stability
          </p>
        </div>
      </div>

      {/* Main Content: Research Projects */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "60px",
        }}
      >
        {/* 1. PEROVSKITE SECTION */}
        <section id="project-perovskite" style={projectSectionStyle}>
          <div style={projectHeaderStyle}>
            <span style={{ fontSize: "2.5rem" }}>💎</span>
            <div style={{ flex: 1 }}>
              <h2 style={titleStyle}>Perovskite Photoluminescence Stability</h2>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <p style={{ ...subTitleStyle, margin: 0 }}>
                  2024 - 2025 | KICET
                </p>
                <span style={publicationBadgeStyle}>
                  📄 Under Review in Advanced Optical Materials
                </span>
              </div>
            </div>
          </div>

          <div style={contentBoxStyle}>
            <div style={{ flex: 1 }}>
              <h3 style={headingStyle}>Optical Performance & Stability</h3>
              <p style={paragraphStyle}>
                Cs₄PbBr₆ 페로브스카이트는 우수한 발광 특성(PLQY 90%+)을 보유하지만, 
                <b> 수분 및 산소에 극도로 민감</b>하여 상용화가 어려움. 
                본 연구에서는 <b>Al₂O₃ 원자층 코팅</b>과 <b>MOF 템플릿 기반 크기 제어</b>를 통해 
                대기 안정성을 3배 향상시키면서도 높은 발광 효율을 유지.
              </p>

              <h3 style={headingStyle}>Photoluminescence Properties</h3>
              <ul style={listStyle}>
                <li>
                  <strong style={{ color: "#FF6B9D" }}>Emission Wavelength:</strong> 
                  {" "}520nm (Deep Green) - ZIF-8 템플릿 효과로 552nm → 520nm 청색편이(Blue shift).
                  입자 크기 감소에 따른 양자 구속 효과(Quantum Confinement) 확인.
                </li>
                <li>
                  <strong style={{ color: "#FF6B9D" }}>PLQY Enhancement:</strong> 
                  {" "}Powder ALD 코팅 전 69% → 코팅 후 85% 달성. 
                  표면 결함 패시베이션(Surface Passivation)으로 비복사 재결합 억제.
                </li>
                <li>
                  <strong style={{ color: "#FF6B9D" }}>Photostability:</strong> 
                  {" "}365nm UV 조사 500시간 후에도 발광 강도 90% 이상 보존. 
                  대기 노출 30일 후 PLQY 저하율 15% 이하 (코팅 전 대비 60% 개선).
                </li>
                <li>
                  <strong style={{ color: "#FF6B9D" }}>Moisture Resistance:</strong> 
                  {" "}수분 접촉각 30° → 85° 증가. Al₂O₃ 배리어막의 소수성 표면 특성으로 
                  수분 침투 경로 차단 및 분해 반응 억제.
                </li>
              </ul>

              <div style={{ marginTop: "30px", background: "#F3E5F5", padding: "15px 20px", borderRadius: "10px", borderLeft: "4px solid #6C5CE7" }}>
                <h4 style={{ margin: "0 0 5px", fontSize: "1rem", color: "#6C5CE7" }}>🚀 Impact</h4>
                <p style={{ ...paragraphStyle, marginBottom: "0", fontSize: "0.95rem" }}>
                  ✓ 고효율 녹색 발광 (PLQY 85%+) 및 색순도 향상<br />
                  ✓ UV 안정성 및 내수분성 획기적 개선 (3배 향상)<br />
                  ✓ 디스플레이, 조명, 광학 센서 응용 가능한 실용 소재 확보
                </p>
              </div>

              <div style={{marginTop: "20px"}}>
                <a href="/research/synthesis" style={linkButtonStyle}>
                  → Go to Synthesis
                </a>
              </div>
            </div>

            <div style={imageGalleryContainerStyle}>
              <div style={flexColumnImageGridStyle}>
                {/* 세로 이미지들 (2열) */}
                <div style={twoColumnGridStyle}>
                  <img src="/research/phosphor-perovskite/pho1/pho1-1.jpg" alt="Perovskite PL 1" style={galleryImageStyle} />
                  <img src="/research/phosphor-perovskite/pho1/pho1-2.jpg" alt="Perovskite PL 2" style={galleryImageStyle} />
                </div>
                {/* 가로 이미지들 (1열) */}
                <img src="/research/phosphor-perovskite/pho1/pho1-3.jpg" alt="Perovskite PL 3" style={galleryImageStyle} />
                <img src="/research/phosphor-perovskite/pho1/pho1-4.jpg" alt="Perovskite PL 4" style={galleryImageStyle} />
              </div>
            </div>
          </div>
        </section>

        {/* 2. OXIDE PHOSPHOR SECTION */}
        <section id="project-phosphor" style={projectSectionStyle}>
          <div style={projectHeaderStyle}>
            <span style={{ fontSize: "2.5rem" }}>🌈</span>
            <div style={{ flex: 1 }}>
              <h2 style={titleStyle}>Multi-color Oxide Phosphor Engineering</h2>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <p style={{ ...subTitleStyle, margin: 0 }}>
                  2022 - 2023 | Silla Univ
                </p>
                <span style={publicationBadgeStyle}>
                  📌 Poster at GCIM 2023
                </span>
                <span style={publicationBadgeStyle}>
                  📄 Published in 한국재료학회
                </span>
              </div>
            </div>
          </div>

          <div style={contentBoxStyle}>
            <div style={{ flex: 1 }}>
              <h3 style={headingStyle}>Luminescence Mechanism & Color Control</h3>
              <p style={paragraphStyle}>
                CaNb₂O₆ 모체에 <b>희토류 이온(Rare Earth Ions)</b>을 도핑하여 
                발광 파장을 정밀 제어하고, <b>에너지 전달 메커니즘</b>을 통한 백색광 구현 연구. 
                UV 여기(254nm, 365nm)에서 높은 발광 효율과 색순도를 확보.
              </p>

              <h3 style={headingStyle}>Emission Characteristics</h3>
              <ul style={listStyle}>
                <li>
                  <strong style={{ color: "#FF6B9D" }}>Tb³⁺ Doping (Green):</strong> 
                  {" "}545nm 주발광 (<sup>5</sup>D<sub>4</sub> → <sup>7</sup>F<sub>5</sub> transition). 
                  최적 도핑 농도 5 mol%에서 발광 강도 최대화. CIE 좌표 (0.32, 0.59).
                </li>
                <li>
                  <strong style={{ color: "#FF6B9D" }}>Eu³⁺ Doping (Red):</strong> 
                  {" "}615nm 주발광 (<sup>5</sup>D<sub>0</sub> → <sup>7</sup>F<sub>2</sub> electric dipole transition). 
                  비대칭 결정장 환경에서 강한 적색 발광. CIE 좌표 (0.65, 0.35).
                </li>
                <li>
                  <strong style={{ color: "#FF6B9D" }}>Sm³⁺ Doping (Orange):</strong> 
                  {" "}600nm 주발광 (<sup>4</sup>G<sub>5/2</sub> → <sup>6</sup>H<sub>7/2</sub> transition). 
                  Reddish-orange 발광으로 색온도 조절에 활용.
                </li>
                <li>
                  <strong style={{ color: "#FF6B9D" }}>Co-doping Strategy:</strong> 
                  {" "}Tb³⁺/Eu³⁺ 공동 도핑으로 Tb → Eu 에너지 전달 확인. 
                  도핑 비율 조절(1:1 ~ 5:1)로 백색광 영역(CIE 0.33, 0.33 근접) 도달 가능.
                </li>
              </ul>

              <div style={{ marginTop: "30px", background: "#FFF0F5", padding: "15px 20px", borderRadius: "10px", borderLeft: "4px solid #FF6B9D" }}>
                <h4 style={{ margin: "0 0 5px", fontSize: "1rem", color: "#FF6B9D" }}>🚀 Impact</h4>
                <p style={{ ...paragraphStyle, marginBottom: "0", fontSize: "0.95rem" }}>
                  ✓ Red/Green/Orange 다색 발광 소재 라이브러리 구축<br />
                  ✓ 에너지 전달 기반 백색광 구현 가능성 검증<br />
                  ✓ 디스플레이 및 조명용 형광체 응용 기반 마련
                </p>
              </div>

              <div style={{marginTop: "20px", display: "flex", gap: "15px"}}>
                <a href="/research/synthesis" style={linkButtonStyle}>
                  → Go to Synthesis
                </a>
                <a href="/research/deposition" style={linkButtonStyle}>
                  → Go to Deposition
                </a>
              </div>
            </div>

            <div style={imageGalleryContainerStyle}>
              <div style={flexColumnImageGridStyle}>
                {/* 단일 가로 이미지 */}
                <img src="/research/phosphor-perovskite/pho2/pho2-1.jpg" alt="Oxide Phosphor PL" style={galleryImageStyle} />
              </div>
            </div>
          </div>
        </section>

        {/* 3. 2D LAYERED LDH SECTION */}
        <section id="project-ldh" style={projectSectionStyle}>
          <div style={projectHeaderStyle}>
            <span style={{ fontSize: "2.5rem" }}>🧪</span>
            <div style={{ flex: 1 }}>
              <h2 style={titleStyle}>2D Layered Phosphor with RE Doping</h2>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <p style={{ ...subTitleStyle, margin: 0 }}>
                  2020 - 2021 | Silla Univ
                </p>
                <span style={publicationBadgeStyle}>
                  📌 Poster at 제129회 대한화학회
                </span>
              </div>
            </div>
          </div>

          <div style={contentBoxStyle}>
            <div style={{ flex: 1 }}>
              <h3 style={headingStyle}>2D Nanostructure Photoluminescence</h3>
              <p style={paragraphStyle}>
                층상 이중 수산화물(LDH)의 <b>2D 나노구조</b>를 활용하여 
                <b>희토류 발광 이온을 층간에 삽입</b>하고, 
                양자 구속 효과(Quantum Confinement)와 층간 전하 이동(Interlayer Charge Transfer)을 통해 
                발광 특성을 향상. 표면 코팅으로 화학적 안정성 확보.
              </p>

              <h3 style={headingStyle}>Photoluminescence of 2D LDH</h3>
              <ul style={listStyle}>
                <li>
                  <strong style={{ color: "#FF6B9D" }}>Eu³⁺-doped LDH (Red):</strong> 
                  {" "}615nm 적색 발광 (<sup>5</sup>D<sub>0</sub> → <sup>7</sup>F<sub>2</sub>). 
                  2D 육각형 나노시트(두께 10-50nm) 구조에서 발광 효율 향상. 
                  층간 음이온(CO₃²⁻, NO₃⁻)의 안테나 효과(Antenna Effect)로 여기 효율 증가.
                </li>
                <li>
                  <strong style={{ color: "#FF6B9D" }}>Tb³⁺-doped LDH (Green):</strong> 
                  {" "}545nm 녹색 발광 (<sup>5</sup>D<sub>4</sub> → <sup>7</sup>F<sub>5</sub>). 
                  2D 평면 구조의 균일한 발광 분포 및 높은 색순도 (CIE 0.30, 0.60).
                </li>
                <li>
                  <strong style={{ color: "#FF6B9D" }}>Surface Passivation:</strong> 
                  {" "}SiO₂ 코팅으로 표면 -OH 기 제거 및 발광 소광(Quenching) 억제. 
                  pH 3-11 범위에서 안정적인 발광 유지 (PL 강도 변화율 10% 이하).
                </li>
                <li>
                  <strong style={{ color: "#FF6B9D" }}>Thermal Stability:</strong> 
                  {" "}900°C 소성 후 Spinel(MgAl₂O₄) 구조로 전환. 
                  열적 안정성 향상 및 UV 여기 하 지속적인 발광 특성 확보.
                </li>
              </ul>

              <div style={{ marginTop: "30px", background: "#E0F2F1", padding: "15px 20px", borderRadius: "10px", borderLeft: "4px solid #009688" }}>
                <h4 style={{ margin: "0 0 5px", fontSize: "1rem", color: "#009688" }}>🚀 Impact</h4>
                <p style={{ ...paragraphStyle, marginBottom: "0", fontSize: "0.95rem" }}>
                  ✓ 2D 나노구조 기반 발광 소재 플랫폼 구축<br />
                  ✓ 층간 도핑을 통한 발광 특성 제어 기술 확립<br />
                  ✓ 표면 개질로 화학적·열적 안정성 확보
                </p>
              </div>

              <div style={{marginTop: "20px"}}>
                <a href="/research/synthesis" style={linkButtonStyle}>
                  → Go to Synthesis
                </a>
              </div>
            </div>

            <div style={imageGalleryContainerStyle}>
              <div style={flexColumnImageGridStyle}>
                {/* 가로 이미지들 (1열씩) */}
                <img src="/research/phosphor-perovskite/pho3/pho3-1.jpg" alt="LDH PL 1" style={galleryImageStyle} />
                <img src="/research/phosphor-perovskite/pho3/pho3-2.jpg" alt="LDH PL 2" style={galleryImageStyle} />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Navigation */}
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <a href="/research" style={primaryBtnStyle}>
            Back to Research
          </a>
          <a href="/research/deposition" style={secondaryBtnStyle}>
            Next: Deposition →
          </a>
        </div>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const overviewCardStyle: React.CSSProperties = {
  padding: "25px",
  borderRadius: "20px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  textAlign: "center",
  border: "2px solid rgba(255, 255, 255, 0.3)",
  cursor: "pointer",
  transition: "all 0.2s ease",
};

const projectSectionStyle: React.CSSProperties = {
  background: "white",
  borderRadius: "25px",
  padding: "40px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
  border: "1px solid #FFF0F5",
};

const projectHeaderStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  marginBottom: "30px",
  borderBottom: "2px solid #FFF0F5",
  paddingBottom: "20px",
};

const titleStyle: React.CSSProperties = {
  fontSize: "1.8rem",
  fontWeight: 800,
  color: "#333",
  marginBottom: "5px",
};

const subTitleStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "#888",
  fontWeight: 600,
};

const publicationBadgeStyle: React.CSSProperties = {
  background: "#FFF9C4",
  border: "1.5px solid #F9A825",
  borderRadius: "6px",
  padding: "5px 14px",
  fontSize: "0.85rem",
  fontWeight: 700,
  color: "#F57F17",
  whiteSpace: "nowrap",
  display: "inline-block",
};

const contentBoxStyle: React.CSSProperties = {
  display: "flex",
  gap: "40px",
  flexWrap: "wrap",
  alignItems: "flex-start", // ** Added Shrink-to-fit logic **
};

const headingStyle: React.CSSProperties = {
  fontSize: "1.1rem",
  fontWeight: 700,
  color: "#FF6B9D",
  marginTop: "0px",
  marginBottom: "10px",
  letterSpacing: "0.5px",
};

const paragraphStyle: React.CSSProperties = {
  fontSize: "1rem",
  lineHeight: "1.7",
  color: "#555",
  marginBottom: "25px",
};

const listStyle: React.CSSProperties = {
  paddingLeft: "20px",
  lineHeight: "1.8",
  color: "#555",
};

const linkButtonStyle: React.CSSProperties = {
  display: "inline-block",
  background: "white",
  color: "#FF6B9D",
  padding: "10px 20px",
  borderRadius: "25px",
  fontSize: "0.9rem",
  fontWeight: 700,
  textDecoration: "none",
  border: "2px solid #FF6B9D",
  transition: "all 0.3s ease",
  boxShadow: "0 3px 8px rgba(255, 107, 157, 0.2)",
};

const primaryBtnStyle: React.CSSProperties = {
  background: "#FF6B9D",
  color: "white",
  padding: "15px 30px",
  borderRadius: "50px",
  fontWeight: 700,
  textDecoration: "none",
  boxShadow: "0 4px 15px rgba(255, 107, 157, 0.4)",
  display: "inline-block",
};

const secondaryBtnStyle: React.CSSProperties = {
  background: "white",
  color: "#FF6B9D",
  padding: "15px 30px",
  borderRadius: "50px",
  fontWeight: 700,
  textDecoration: "none",
  border: "2px solid #FF6B9D",
  display: "inline-block",
};

const imageGalleryContainerStyle: React.CSSProperties = {
  flex: "0 0 360px",
  background: "#F8F9FA",
  borderRadius: "15px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  border: "1px solid #E0E0E0",
  width: "100%",
  height: "auto", // ** Added Shrink-to-fit logic **
};

// 새로운 레이아웃: 세로로 쌓이는 구조
const flexColumnImageGridStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  width: "100%",
};

// 세로 이미지 2개를 나란히 배치
const twoColumnGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "15px",
  width: "100%",
};

const galleryImageStyle: React.CSSProperties = {
  width: "100%",
  height: "auto",
  objectFit: "cover",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  transition: "transform 0.2s ease",
  cursor: "pointer",
};