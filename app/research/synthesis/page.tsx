"use client";

import React, { useState } from "react";

export default function SynthesisPage() {
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
          className="page-title"
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
          Synthesis Research
        </h1>
        <p
          className="page-subtitle"
          style={{
            fontSize: "1.2rem",
            color: "#7A7A7A",
            fontWeight: 600,
            maxWidth: "650px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          From <b>Powder</b> to <b>Function</b>.<br />
          기초 무기 합성부터 차세대 발광·배터리 소재까지.
        </p>
      </header>

      {/* Timeline Section */}
      <div className="timeline-section" style={{ maxWidth: "900px", margin: "0 auto 60px" }}>
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
                  width: activeProject === 'phosphor-ldh' ? "16px" : "12px",
                  height: activeProject === 'phosphor-ldh' ? "16px" : "12px",
                  borderRadius: "50%",
                  background: activeProject === 'phosphor-ldh' ? "#FF6B9D" : "white",
                  border: "3px solid #FF6B9D",
                  transition: "all 0.3s ease",
                  boxShadow: activeProject === 'phosphor-ldh'
                    ? "0 0 0 4px rgba(255, 107, 157, 0.15)"
                    : "0 2px 4px rgba(0,0,0,0.1)",
                }}
              />
              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: activeProject === 'phosphor-ldh' ? "#FF6B9D" : "#999",
                  transition: "color 0.3s ease",
                  marginTop: "15px",
                  marginBottom: "20px",
                }}
              >
                2020 - 2021
              </div>
              
              <div
                onClick={() => scrollToSection('phosphor-ldh')}
                style={{
                  fontSize: "0.9rem",
                  color: activeProject === 'phosphor-ldh' ? "#FF6B9D" : "#666",
                  textAlign: "center",
                  cursor: "pointer",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  background: activeProject === 'phosphor-ldh' 
                    ? "rgba(255, 107, 157, 0.1)" 
                    : "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: `2px solid ${activeProject === 'phosphor-ldh' ? "#FF6B9D" : "rgba(255, 255, 255, 0.5)"}`,
                  fontWeight: 600,
                  transition: "all 0.2s ease",
                  boxShadow: activeProject === 'phosphor-ldh' 
                    ? "0 4px 12px rgba(255, 107, 157, 0.15)" 
                    : "0 2px 8px rgba(0,0,0,0.05)",
                  minWidth: "140px",
                }}
              >
                Phosphor & LDH
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
                  width: activeProject === 'target' || activeProject === 'battery' ? "16px" : "12px",
                  height: activeProject === 'target' || activeProject === 'battery' ? "16px" : "12px",
                  borderRadius: "50%",
                  background: activeProject === 'target' || activeProject === 'battery' ? "#FF6B9D" : "white",
                  border: "3px solid #FF6B9D",
                  transition: "all 0.3s ease",
                  boxShadow: activeProject === 'target' || activeProject === 'battery'
                    ? "0 0 0 4px rgba(255, 107, 157, 0.15)"
                    : "0 2px 4px rgba(0,0,0,0.1)",
                }}
              />
              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: activeProject === 'target' || activeProject === 'battery' ? "#FF6B9D" : "#999",
                  transition: "color 0.3s ease",
                  marginTop: "15px",
                  marginBottom: "20px",
                }}
              >
                2022 - 2023
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
                <div
                  onClick={() => scrollToSection('target')}
                  style={{
                    fontSize: "0.9rem",
                    color: activeProject === 'target' ? "#FF6B9D" : "#666",
                    textAlign: "center",
                    cursor: "pointer",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    background: activeProject === 'target' 
                      ? "rgba(255, 107, 157, 0.1)" 
                      : "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: `2px solid ${activeProject === 'target' ? "#FF6B9D" : "rgba(255, 255, 255, 0.5)"}`,
                    fontWeight: 600,
                    transition: "all 0.2s ease",
                    boxShadow: activeProject === 'target' 
                      ? "0 4px 12px rgba(255, 107, 157, 0.15)" 
                      : "0 2px 8px rgba(0,0,0,0.05)",
                    minWidth: "160px",
                  }}
                >
                  Solid-State Phosphor
                </div>
                <div
                  onClick={() => scrollToSection('battery')}
                  style={{
                    fontSize: "0.9rem",
                    color: activeProject === 'battery' ? "#FF6B9D" : "#666",
                    textAlign: "center",
                    cursor: "pointer",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    background: activeProject === 'battery' 
                      ? "rgba(255, 107, 157, 0.1)" 
                      : "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: `2px solid ${activeProject === 'battery' ? "#FF6B9D" : "rgba(255, 255, 255, 0.5)"}`,
                    fontWeight: 600,
                    transition: "all 0.2s ease",
                    boxShadow: activeProject === 'battery' 
                      ? "0 4px 12px rgba(255, 107, 157, 0.15)" 
                      : "0 2px 8px rgba(0,0,0,0.05)",
                    minWidth: "160px",
                  }}
                >
                  Battery NCM
                </div>
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
                Perovskite & ALD
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Overview Section */}
      <div
        className="overview-grid"
        style={{
          maxWidth: "1100px",
          margin: "0 auto 60px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <OverviewCard 
          icon="✨" title="Phosphor & LDH" 
          desc1="Red Phosphor Synthesis" desc2="Functional Nanomaterials"
          onClick={() => scrollToSection('phosphor-ldh')}
          color="rgba(255, 193, 7, 0.25)" borderColor="#FFC107"
        />
        <OverviewCard 
          icon="🧱" title="Solid-State Synthesis" 
          desc1="Sputtering Target Fabrication" desc2="CaNb₂O₆:Tb³⁺ Sintering"
          onClick={() => scrollToSection('target')}
          color="rgba(108, 92, 231, 0.25)" borderColor="#6C5CE7"
        />
        <OverviewCard 
          icon="🔋" title="NCM Cathode" 
          desc1="Solid-State Synthesis" desc2="Li-ion Battery Materials"
          onClick={() => scrollToSection('battery')}
          color="rgba(0, 184, 148, 0.25)" borderColor="#00B894"
        />
        <OverviewCard 
          icon="💎" title="Perovskite Engineering" 
          desc1="Powder ALD Coating" desc2="ZIF-8 Template Synthesis"
          onClick={() => scrollToSection('perovskite')}
          color="rgba(255, 94, 149, 0.25)" borderColor="#FF5E95"
        />
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
        <section id="project-perovskite" style={projectSectionStyle} className="project-section">
          <div style={projectHeaderStyle} className="project-header">
            <span style={{ fontSize: "2.5rem" }}>💎</span>
            <div style={{ flex: 1 }}>
              <h2 style={titleStyle} className="section-title">Novel Synthesis for Perovskite Stability</h2>
              <div className="publication-container" style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <p style={{ ...subTitleStyle, margin: 0 }} className="section-subtitle">
                  2024 - 2025 | KICET
                </p>
                <span style={publicationBadgeStyle} className="publication-badge">
                  📄 Under Review in Advanced Optical Materials (P-ALD)
                </span>
              </div>
            </div>
          </div>

          <div style={{ ...contentBoxStyle, alignItems: "flex-start" }} className="content-box">
            <div style={{ flex: 1 }}>
              <h3 style={headingStyle} className="content-heading">Objective</h3>
              <p style={paragraphStyle} className="content-paragraph">
                Cs₄PbBr₆ 페로브스카이트의 입자 크기를 제어하고 대기 안정성을 획기적으로 개선하기 위해
                <b> 새로운 합성법(Sonication-assisted ZIF-8 Templating)</b>과 <b>후처리 코팅(Powder ALD)</b> 기술 개발.
              </p>

              <h3 style={headingStyle} className="content-heading">Synthesis Techniques</h3>
              <ul style={listStyle} className="content-list">
                <li>
                  <strong style={{ color: "#FF6B9D" }}>ZIF-8 Templating:</strong>
                  {" "}MOF 소재인 ZIF-8을 템플릿으로 활용하고 Sonication 에너지를 가하여 입자 크기를 제어.
                  발광 파장을 552nm에서 520nm(Deep Green)로 이동시킴.
                </li>
                <li>
                  <strong style={{ color: "#FF6B9D" }}>Novel Powder ALD:</strong>
                  {" "}유동층 반응기(Fluidized-bed reactor)를 이용해 합성된 분말 표면에 Al₂O₃ 보호막을 원자 단위로 코팅.
                  용매를 사용하지 않는 건식 공정(Solvent-free)으로 페로브스카이트 손상 최소화.
                </li>
                <li>
                  <strong style={{ color: "#FF6B9D" }}>Dual Perovskite System:</strong>
                  {" "}Cs₄PbBr₆ (녹색)와 Cs₂Cu₃I₆ (청색)를 조합하여 UV 파장별 색상 구분 가능한 발광 필름 제작.
                </li>
              </ul>

              <div className="impact-box" style={{ marginTop: "30px", background: "#FFF0F5", padding: "15px 20px", borderRadius: "10px", borderLeft: "4px solid #FF5E95" }}>
                <h4 style={{ margin: "0 0 5px", fontSize: "1rem", color: "#FF5E95" }}>🚀 Impact</h4>
                <p style={{ ...paragraphStyle, marginBottom: "0", fontSize: "0.95rem" }}>
                  ✓ 수분 저항성 및 UV 안정성 획기적 개선 (수분 접촉각 85° 달성)<br />
                  ✓ 소광(Quenching) 억제를 통한 발광 효율(PLQY) <strong>23% 향상</strong><br />
                  ✓ 백색 파우더 형태의 고효율 녹색 발광체 구현
                </p>
              </div>

              <div style={{marginTop: "20px"}}>
                <a href="/research/phosphor-perovskite" style={linkButtonStyle} className="link-button">
                  → Go to Phosphor & Perovskite
                </a>
              </div>
            </div>

            <div style={imageGalleryContainerStyle} className="image-gallery">
              <div style={{width: "100%", display: "flex", flexDirection: "column", gap: "10px"}}>
                <div style={imageGridStyle}>
                  <img src="/research/synthesis/syn1/syn1-1.jpg" alt="Perovskite Synthesis 1" style={galleryImageStyle} />
                  <img src="/research/synthesis/syn1/syn1-2.jpg" alt="Perovskite Synthesis 2" style={galleryImageStyle} />
                </div>
                <div style={oneColGridStyle}>
                  <img src="/research/synthesis/syn1/syn1-3.jpg" alt="Perovskite Synthesis 3" style={galleryImageStyle} />
                  <img src="/research/synthesis/syn1/syn1-4.jpg" alt="Perovskite Synthesis 4" style={galleryImageStyle} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SOLID-STATE SECTION */}
        <section id="project-target" style={projectSectionStyle} className="project-section">
           <div style={projectHeaderStyle} className="project-header">
            <span style={{ fontSize: "2.5rem" }}>🧱</span>
            <div style={{ flex: 1 }}>
              <h2 style={titleStyle} className="section-title">Solid-State Synthesis for Targets</h2>
              <div className="publication-container" style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <p style={{ ...subTitleStyle, margin: 0 }} className="section-subtitle">
                  2022 - 2023 | Silla Univ
                </p>
                <span style={publicationBadgeStyle} className="publication-badge">
                  📌 Poster at GCIM 2023
                </span>
                <span style={publicationBadgeStyle} className="publication-badge">
                  📄 Published in 한국재료학회
                </span>
              </div>
            </div>
          </div>

          <div style={{ ...contentBoxStyle, alignItems: "flex-start" }} className="content-box">
             <div style={{ flex: 1 }}>
              <h3 style={headingStyle} className="content-heading">Target Fabrication</h3>
              <p style={paragraphStyle} className="content-paragraph">
                RF 마그네트론 스퍼터링 공정에 사용될 고밀도 세라믹 타겟을 제작하기 위해
                <b> 고상 반응법(Solid-State Reaction)</b>을 최적화.
              </p>

              <h3 style={headingStyle} className="content-heading">Synthesis Process</h3>
              <ul style={listStyle} className="content-list">
                <li>
                  <strong style={{ color: "#6C5CE7" }}>Ball Milling:</strong>
                  {" "}초기 물질 CaO, Nb₂O₅, Tb₄O₇을 정량 평량하여 균일하게 혼합 및 분쇄.
                </li>
                <li>
                  <strong style={{ color: "#6C5CE7" }}>Sintering:</strong>
                  {" "}1,100°C에서 5시간 동안 고온 소결하여 단일 상(Single Phase)의 CaNb₂O₆:Tb³⁺ 분말 합성.
                </li>
                <li>
                  <strong style={{ color: "#6C5CE7" }}>Pelletizing:</strong>
                  {" "}40 MPa 유압으로 성형하여 직경 2 인치의 스퍼터링 타겟 제조.
                </li>
              </ul>

              <div className="impact-box" style={{ marginTop: "30px", background: "#F3E5F5", padding: "15px 20px", borderRadius: "10px", borderLeft: "4px solid #6C5CE7" }}>
                  <h4 style={{ margin: "0 0 5px", fontSize: "1rem", color: "#6C5CE7" }}>🚀 Impact</h4>
                 <p style={{ ...paragraphStyle, marginBottom: "0", fontSize: "0.95rem" }}>
                    ✓ Crack 없는 고밀도 세라믹 타겟 확보<br />
                    ✓ 박막 증착을 위한 원천 소재 합성 기술 확립
                 </p>
              </div>

              <div className="link-buttons" style={{marginTop: "20px", display: "flex", gap: "15px", flexWrap: "wrap"}}>
                 <a href="/research/deposition" style={linkButtonStyle} className="link-button">
                   → Go to Deposition Research
                 </a>
                 <a href="/research/phosphor-perovskite" style={linkButtonStyle} className="link-button">
                   → Go to Phosphor & Perovskite
                 </a>
              </div>
            </div>

            <div style={imageGalleryContainerStyle} className="image-gallery">
              <div style={oneColGridStyle}>
                <img src="/research/synthesis/syn2/syn2-1.jpg" alt="Solid-State Target" style={galleryImageStyle} />
              </div>
            </div>
          </div>
        </section>

        {/* 3. BATTERY SECTION */}
        <section id="project-battery" style={projectSectionStyle} className="project-section">
          <div style={projectHeaderStyle} className="project-header">
            <span style={{ fontSize: "2.5rem" }}>🔋</span>
            <div>
              <h2 style={titleStyle} className="section-title">Li-ion Battery Cathode (NCM)</h2>
              <p style={subTitleStyle} className="section-subtitle">
                2022 - 2023 | Silla Univ | Tiger Meow Club
              </p>
            </div>
          </div>

          <div style={{ ...contentBoxStyle, alignItems: "flex-start" }} className="content-box">
            <div style={{ flex: 1 }}>
              <h3 style={headingStyle} className="content-heading">Project Overview</h3>
              <p style={paragraphStyle} className="content-paragraph">
                리튬 이온 배터리용 양극재(NCM523)를 <b>고상 반응법(Solid-State Synthesis)</b>을 통해 직접 합성하고,
                전구체(Precursor)와 리튬 소스(Li₂CO₃)의 혼합 및 소성 공정을 최적화.
              </p>
              
              <h3 style={headingStyle} className="content-heading">Synthesis Process</h3>
              <ul style={{...listStyle, marginBottom: "20px"}} className="content-list">
                <li>
                  <strong style={{ color: "#009688" }}>Mixing:</strong>
                  {" "}NCM 전구체와 Li₂CO₃를 1:2 비율로 혼합 후 볼밀링으로 균일하게 분쇄.
                </li>
                <li>
                  <strong style={{ color: "#009688" }}>Calcination:</strong>
                  {" "}800~1000°C에서 소결(Sintering)하여 NCM523 양극재 합성.
                </li>
                <li>
                  <strong style={{ color: "#009688" }}>Optimization:</strong>
                  {" "}소성 온도를 900°C(10h)에서 1000°C로 상향하여 입자 결정성 및 크기 증가 확인 (SEM 분석).
                </li>
                <li>
                  <strong style={{ color: "#009688" }}>Electrode Fabrication:</strong>
                  {" "}합성된 NCM 분말과 Super P, PVDF를 혼합하여 슬러리 제조 후 Al 집전체에 코팅.
                </li>
              </ul>

              <div className="impact-box" style={{ marginTop: "30px", background: "#E0F2F1", padding: "15px 20px", borderRadius: "10px", borderLeft: "4px solid #009688" }}>
                <h4 style={{ margin: "0 0 5px", fontSize: "1rem", color: "#009688" }}>🚀 Impact</h4>
                <p style={{ ...paragraphStyle, marginBottom: "0", fontSize: "0.95rem" }}>
                   ✓ 양극 활물질 전구체 합성부터 슬러리 코팅까지 전 공정 수행<br />
                   ✓ 소성 온도(Calcination Temp.)에 따른 결정 성장 메커니즘 규명<br />
                   ✓ 고상 반응법을 통한 NCM 양극재 합성 기술 확립
                </p>
              </div>
            </div>

            <div style={imageGalleryContainerStyle} className="image-gallery">
              <div style={{width: "100%", display: "flex", flexDirection: "column", gap: "10px"}}>
                <div style={oneColGridStyle}>
                  <img src="/research/synthesis/syn3/syn3-1.jpg" alt="NCM Battery 1" style={galleryImageStyle} />
                </div>
                <div style={imageGridStyle}>
                  <img src="/research/synthesis/syn3/syn3-2.jpg" alt="NCM Battery 2" style={galleryImageStyle} />
                  <img src="/research/synthesis/syn3/syn3-3.jpg" alt="NCM Battery 3" style={galleryImageStyle} />
                  <img src="/research/synthesis/syn3/syn3-4.jpg" alt="NCM Battery 4" style={galleryImageStyle} />
                  <img src="/research/synthesis/syn3/syn3-5.jpg" alt="NCM Battery 5" style={galleryImageStyle} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PHOSPHOR & LDH SECTION */}
        <section id="project-phosphor-ldh" style={projectSectionStyle} className="project-section">
          <div style={projectHeaderStyle} className="project-header">
            <span style={{ fontSize: "2.5rem" }}>✨</span>
            <div style={{ flex: 1 }}>
              <h2 style={titleStyle} className="section-title">Functional Phosphors & LDH Nanomaterials</h2>
              <div className="publication-container" style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <p style={{ ...subTitleStyle, margin: 0 }} className="section-subtitle">
                  2020 - 2021 | Silla Univ
                </p>
                <span style={publicationBadgeStyle} className="publication-badge">
                  📌 Poster at 제129회 대한화학회 (Project 2)
                </span>
              </div>
            </div>
          </div>

          <div style={contentBoxStyle} className="content-box">
            <div style={{ flex: 1 }}>
              <h3 style={headingStyle} className="content-heading">Project 1: Phosphor (MgAl-LDH:Eu/Tb)</h3>
              <p style={paragraphStyle} className="content-paragraph">
                <b>공침법/수열합성</b>을 통한 적색 형광체 제조 및 실리카 코팅을 통한 내구성 향상 연구.
              </p>
              <ul style={{...listStyle, marginBottom: "20px"}} className="content-list">
                <li>
                  <strong style={{ color: "#FFC107" }}>Phase Control:</strong>
                  {" "}Mg:Al 비율 최적화(1:3)로 안정한 LDH 단일상 확보.
                </li>
                <li>
                  <strong style={{ color: "#FFC107" }}>Doping Optimization:</strong>
                  {" "}Eu³⁺, Tb³⁺ 도핑을 통한 적색/녹색 발광 효율 극대화. Eu³⁺의 경우 <sup>5</sup>D<sub>0</sub> → <sup>7</sup>F<sub>2</sub> 전이를 통한 적색 발광 구현.
                </li>
                <li>
                  <strong style={{ color: "#FFC107" }}>Thermal Treatment:</strong>
                  {" "}900~1300°C 소성으로 Spinel(MgAl₂O₄) 구조 형성.
                </li>
                <li>
                  <strong style={{ color: "#FFC107" }}>Silica Coating:</strong>
                  {" "}역마이크로에멀젼법으로 SiO₂ 보호막 코팅, 화학적 안정성 확보.
                </li>
              </ul>

              <div style={{marginTop: "20px", marginBottom: "30px"}}>
                 <a href="/research/phosphor-perovskite" style={linkButtonStyle} className="link-button">
                   → Go to Phosphor & Perovskite
                 </a>
              </div>

              <h3 style={headingStyle} className="content-heading">Project 2: Functional LDH & mRGO</h3>
              <ul style={listStyle} className="content-list">
                <li>
                  <b>Hydrothermal Synthesis:</b> Mg-Al, Zn-Al, Ni-Fe LDH를 수열합성법으로 제조하여 육각형 나노시트 확보.
                </li>
                <li>
                  <b>Mercapto-reduced Graphene Oxide (mRGO) Synthesis:</b> Silica Monoliths로의 제작, Molybdenum 도핑 등의 활용. 수열 합성법을 통해 고비표면적 구조 확보.
                </li>
                <li>
                  <b>Heavy Metal Removal Application:</b> mRGO를 필터로 사용하여 중금속 제거 효율 검증.
                </li>
              </ul>

              <div className="impact-box" style={{ marginTop: "30px", background: "#FFF9C4", padding: "15px 20px", borderRadius: "10px", borderLeft: "4px solid #FFC107" }}>
                <h4 style={{ margin: "0 0 5px", fontSize: "1rem", color: "#F57F17" }}>🚀 Impact</h4>
                <p style={{ ...paragraphStyle, marginBottom: "0", fontSize: "0.95rem" }}>
                   ✓ 합성 조건(pH, 온도, 시간)에 따른 결정 형상 제어 메커니즘 규명<br />
                   ✓ 대량 합성(Scale-up) 공정 확립 및 재현성 확보<br />
                   ✓ 환경 정화 응용을 위한 기능성 나노소재 플랫폼 구축
                </p>
              </div>
            </div>

            <div style={imageGalleryContainerStyle} className="image-gallery">
              <div style={imageGridStyle}>
                <img src="/research/synthesis/syn4/syn4-1.jpg" alt="Phosphor LDH 1" style={galleryImageStyle} />
                <img src="/research/synthesis/syn4/syn4-2.jpg" alt="Phosphor LDH 2" style={galleryImageStyle} />
                <img src="/research/synthesis/syn4/syn4-3.png" alt="Phosphor LDH 3" style={galleryImageStyle} />
                <img src="/research/synthesis/syn4/syn4-4.jpg" alt="Phosphor LDH 4" style={galleryImageStyle} />
                <img src="/research/synthesis/syn4/syn4-5.jpg" alt="Phosphor LDH 5" style={galleryImageStyle} />
                <img src="/research/synthesis/syn4/syn4-6.jpg" alt="Phosphor LDH 6" style={galleryImageStyle} />
                <img src="/research/synthesis/syn4/syn4-7.jpg" alt="Phosphor LDH 7" style={galleryImageStyle} />
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Footer Navigation */}
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <div className="footer-buttons" style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <a href="/research" style={primaryBtnStyle} className="footer-btn">
            Back to Research
          </a>
          <a href="/research/deposition" style={secondaryBtnStyle} className="footer-btn">
            Next: Deposition →
          </a>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .page-title {
            font-size: 2rem !important;
          }

          .page-subtitle {
            font-size: 1rem !important;
            padding: 0 15px;
          }

          .timeline-section {
            display: none !important;
          }

          .overview-grid {
            grid-template-columns: 1fr !important;
            gap: 15px !important;
            padding: 0 10px;
          }

          .project-section {
            padding: 25px 20px !important;
            border-radius: 20px !important;
          }

          .project-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 15px !important;
            padding-bottom: 15px !important;
          }

          .project-header span {
            font-size: 2rem !important;
          }

          .section-title {
            font-size: 1.4rem !important;
          }

          .section-subtitle {
            font-size: 0.9rem !important;
          }

          .publication-container {
            flex-direction: column !important;
            align-items: flex-start !important;
          }

          .publication-badge,
          span.publication-badge,
          .project-header .publication-badge {
            font-size: 0.7rem !important;
            padding: 4px 8px !important;
            white-space: normal !important;
            line-height: 1.4 !important;
            word-break: keep-all !important;
            display: inline-block !important;
            max-width: 100% !important;
            margin-top: 5px !important;
          }

          .content-box {
            flex-direction: column !important;
            gap: 25px !important;
          }

          .content-heading {
            font-size: 1rem !important;
            margin-top: 20px !important;
          }

          .content-paragraph {
            font-size: 0.95rem !important;
            line-height: 1.6 !important;
          }

          .content-list {
            font-size: 0.9rem !important;
            padding-left: 15px !important;
          }

          .image-gallery {
            flex: 0 0 100% !important;
            max-width: 100% !important;
            padding: 12px !important;
          }

          .impact-box {
            padding: 12px 15px !important;
          }

          .impact-box p {
            font-size: 0.85rem !important;
          }

          .link-button {
            font-size: 0.85rem !important;
            padding: 8px 16px !important;
            display: inline-block !important;
          }

          .link-buttons {
            flex-direction: column !important;
          }

          .footer-buttons {
            flex-direction: column !important;
            gap: 15px !important;
            padding: 0 20px;
          }

          .footer-btn {
            width: 100% !important;
            text-align: center !important;
            padding: 12px 20px !important;
          }
        }

        @media (max-width: 480px) {
          .page-title {
            font-size: 1.6rem !important;
          }

          .page-subtitle {
            font-size: 0.9rem !important;
          }

          .project-section {
            padding: 20px 15px !important;
          }

          .section-title {
            font-size: 1.2rem !important;
          }

          .publication-badge,
          span.publication-badge,
          .project-header .publication-badge {
            font-size: 0.65rem !important;
            padding: 3px 6px !important;
          }

          .content-paragraph {
            font-size: 0.9rem !important;
          }

          .content-list {
            font-size: 0.85rem !important;
          }
        }
      `}</style>
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

interface OverviewCardProps {
  icon: string;
  title: string;
  desc1: string;
  desc2: string;
  onClick: () => void;
  color: string;
  borderColor: string;
}

function OverviewCard({ icon, title, desc1, desc2, onClick, color, borderColor }: OverviewCardProps) {
    return (
        <div
          onClick={onClick}
          style={{
            ...overviewCardStyle,
            background: "rgba(255, 255, 255, 0.6)",
            backdropFilter: "blur(10px)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = `0 8px 20px ${color}`;
            e.currentTarget.style.borderColor = borderColor;
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.6)";
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>{icon}</div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#333", marginBottom: "8px" }}>
            {title}
          </h3>
          <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: "1.5", margin: 0 }}>
            {desc1}<br />{desc2}
          </p>
        </div>
    );
}

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
  whiteSpace: "normal",
  display: "inline-block",
  lineHeight: "1.4",
  wordBreak: "keep-all",
};

const contentBoxStyle: React.CSSProperties = {
  display: "flex",
  gap: "40px",
  flexWrap: "wrap",
  alignItems: "flex-start",
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
  flex: "0 0 320px",
  background: "#F8F9FA",
  borderRadius: "15px",
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  border: "1px solid #E0E0E0",
  width: "100%",
  height: "auto",
};

const imageGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr", 
  gap: "10px",
  width: "100%",
};

const oneColGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "10px",
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
