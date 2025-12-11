"use client";

import React, { useState } from "react";

export default function DepositionPage() {
  const [activeProject, setActiveProject] = useState<string>("cvd");

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
      {/* Header */}
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
          Deposition Research
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
          Mastering the <b>Interface</b>.<br />
          CVD, PVD(Sputter, E-beam) 공정을 통한 박막 제어 및 최적화.
        </p>
      </header>

      {/* Timeline Section */}
      <div style={{ maxWidth: "900px", margin: "0 auto 60px" }}>
        <div style={{ position: "relative", padding: "0 20px" }}>
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
          
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* 2022-2023 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
              <div
                style={{
                  width: activeProject === 'cvd' || activeProject === 'phosphor-sputtering' ? "16px" : "12px",
                  height: activeProject === 'cvd' || activeProject === 'phosphor-sputtering' ? "16px" : "12px",
                  borderRadius: "50%",
                  background: activeProject === 'cvd' || activeProject === 'phosphor-sputtering' ? "#FF6B9D" : "white",
                  border: "3px solid #FF6B9D",
                  transition: "all 0.3s ease",
                  boxShadow: activeProject === 'cvd' || activeProject === 'phosphor-sputtering'
                    ? "0 0 0 4px rgba(255, 107, 157, 0.15)"
                    : "0 2px 4px rgba(0,0,0,0.1)",
                }}
              />
              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: activeProject === 'cvd' || activeProject === 'phosphor-sputtering' ? "#FF6B9D" : "#999",
                  transition: "color 0.3s ease",
                  marginTop: "15px",
                  marginBottom: "20px",
                }}
              >
                2022 - 2023
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
                <TimelineButton label="CVD" id="cvd" active={activeProject === 'cvd'} onClick={scrollToSection} />
                <TimelineButton label="Phosphor Sputtering" id="phosphor-sputtering" active={activeProject === 'phosphor-sputtering'} onClick={scrollToSection} />
              </div>
            </div>

            {/* 2023-2024 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
              <div
                style={{
                  width: activeProject === 'semiconductor' ? "16px" : "12px",
                  height: activeProject === 'semiconductor' ? "16px" : "12px",
                  borderRadius: "50%",
                  background: activeProject === 'semiconductor' ? "#FF6B9D" : "white",
                  border: "3px solid #FF6B9D",
                  transition: "all 0.3s ease",
                  boxShadow: activeProject === 'semiconductor'
                    ? "0 0 0 4px rgba(255, 107, 157, 0.15)"
                    : "0 2px 4px rgba(0,0,0,0.1)",
                }}
              />
              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: activeProject === 'semiconductor' ? "#FF6B9D" : "#999",
                  transition: "color 0.3s ease",
                  marginTop: "15px",
                  marginBottom: "20px",
                }}
              >
                2023 - 2024
              </div>
              
              <div>
                <TimelineButton label="Semiconductor Sputtering" id="semiconductor" active={activeProject === 'semiconductor'} onClick={scrollToSection} />
              </div>
            </div>

            {/* 2024-2025 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
              <div
                style={{
                  width: activeProject === 'ebeam' || activeProject === 'pald' ? "16px" : "12px",
                  height: activeProject === 'ebeam' || activeProject === 'pald' ? "16px" : "12px",
                  borderRadius: "50%",
                  background: activeProject === 'ebeam' || activeProject === 'pald' ? "#FF6B9D" : "white",
                  border: "3px solid #FF6B9D",
                  transition: "all 0.3s ease",
                  boxShadow: activeProject === 'ebeam' || activeProject === 'pald'
                    ? "0 0 0 4px rgba(255, 107, 157, 0.15)"
                    : "0 2px 4px rgba(0,0,0,0.1)",
                }}
              />
              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: activeProject === 'ebeam' || activeProject === 'pald' ? "#FF6B9D" : "#999",
                  transition: "color 0.3s ease",
                  marginTop: "15px",
                  marginBottom: "20px",
                }}
              >
                2024 - 2025
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
                <TimelineButton label="E-beam Evaporator" id="ebeam" active={activeProject === 'ebeam'} onClick={scrollToSection} />
                <TimelineButton label="P-ALD" id="pald" active={activeProject === 'pald'} onClick={scrollToSection} dashed />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Overview - 4 Cards */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto 60px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
        }}
      >
        <OverviewCard 
          icon="🔥"
          title="CVD"
          desc1="Thermal Chemical Vapor Deposition"
          desc2="Carbon Microcoil Growth"
          onClick={() => scrollToSection('cvd')}
          color="rgba(0, 184, 148, 0.25)"
          borderColor="#00B894"
        />

        <OverviewCard 
          icon="⚙️"
          title="Sputtering"
          desc1="RF Magnetron Sputtering"
          desc2="Phosphor & Semiconductor Films"
          onClick={() => scrollToSection('phosphor-sputtering')}
          color="rgba(255, 193, 7, 0.25)"
          borderColor="#FFC107"
        />

        <OverviewCard 
          icon="✨"
          title="E-beam Evaporator"
          desc1="Multi-layer MIM Structures"
          desc2="Metal Thin Film Deposition"
          onClick={() => scrollToSection('ebeam')}
          color="rgba(255, 94, 149, 0.25)"
          borderColor="#FF5E95"
        />

        <OverviewCard 
          icon="⚛️"
          title="P-ALD"
          desc1="Powder Atomic Layer Deposition"
          desc2="Al₂O₃ Protective Coating"
          onClick={() => scrollToSection('pald')}
          color="rgba(158, 158, 158, 0.08)"
          borderColor="#9E9E9E"
          dashed
          transparent
        />
      </div>

      {/* Main Content - NEWEST TO OLDEST */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "60px",
        }}
      >
        {/* === 1. E-beam Evaporator (2024-2025) === */}
        <section id="project-ebeam" style={projectSectionStyle}>
          <div style={projectHeaderStyle}>
            <span style={{ fontSize: "2.5rem" }}>✨</span>
            <div style={{ flex: 1 }}>
              <h2 style={titleStyle}>E-beam Evaporator</h2>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <p style={{ ...subTitleStyle, margin: 0 }}>
                  2024 - 2025 | KICET
                </p>
                <span style={publicationBadgeStyle}>
                  📄 Published in Advanced Science (Ag–TiO₂–Ag Stacked Layers)
                </span>
              </div>
            </div>
          </div>

          <div style={{ ...contentBoxStyle, alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              <h3 style={headingStyle}>Objective</h3>
              <p style={paragraphStyle}>
                전자빔 증착(E-beam Evaporation)을 통해 <b>Metal-Insulator-Metal (MIM) 다층 구조</b>를 정밀 제어하고,
                색 조절 가능한 열관리 유리 제작을 위한 초기 박막 설계 및 증착 공정 최적화.
              </p>

              <h3 style={headingStyle}>Multi-layer Thin Film Deposition (MIM Structure)</h3>
              
              <p style={{...paragraphStyle, fontWeight: 600, color: "#333", marginBottom: "10px"}}>
                Ag–TiO₂–Ag Cavity Structure
              </p>
              <ul style={listStyle}>
                <li>
                  <strong style={{ color: "#555" }}>Layer Configuration:</strong>
                  {" "}Glass / 하부 Ag (3~20 nm) / TiO₂ (50~150 nm) / 상부 Ag (3~20 nm) 순차 증착
                </li>
                <li>
                  <strong style={{ color: "#555" }}>Thickness Control:</strong>
                  {" "}QCM 센서를 통한 실시간 모니터링, 3~20 nm 범위 정밀 제어
                </li>
                <li>
                  <strong style={{ color: "#555" }}>Deposition Rate:</strong>
                  {" "}Ag 0.1~0.3 Å/s, TiO₂ 0.5~1.0 Å/s로 속도 제어하여 균일한 박막 형성
                </li>
                <li>
                  <strong style={{ color: "#555" }}>Vacuum Management:</strong>
                  {" "}Base pressure 1×10⁻⁶ Torr 이하 유지, 금속 박막 순도 확보
                </li>
              </ul>

              <p style={{...paragraphStyle, fontWeight: 600, color: "#333", marginTop: "18px", marginBottom: "10px"}}>
                Large-area Uniformity & Reproducibility
              </p>
              <ul style={listStyle}>
                <li>
                  Substrate Temperature RT~150°C 제어, 2-inch 이상 기판에서 두께 편차 &lt;5% 달성
                </li>
                <li>
                  반복 실험을 통한 증착 재현성 확보
                </li>
              </ul>

              <p style={{...paragraphStyle, fontWeight: 600, color: "#333", marginTop: "18px", marginBottom: "10px"}}>
                Annealing for Nanostructure Formation
              </p>
              <ul style={listStyle}>
                <li>
                  400~1000°C 어닐링을 통한 Ag 나노입자 형성, 초기 필름 품질이 후속 나노구조에 직접 영향
                </li>
              </ul>

              <div style={{marginTop: "22px", marginBottom: "25px"}}>
                <a href="/research/thermal-management" style={linkButtonStyle}>
                  → Go to Thermal Management Research
                </a>
              </div>

              <h3 style={headingStyle}>Complex Metal Structure & Troubleshooting</h3>
              
              <p style={{...paragraphStyle, fontWeight: 600, color: "#333", marginBottom: "10px"}}>
                Ti–Ag–Cu Multi-layer System
              </p>
              <ul style={listStyle}>
                <li>
                  Ti (접합층) / Ag / Cu 복합 구조 증착, 600~900°C 어닐링 후 Ag-Cu 계면 확산 분석
                </li>
              </ul>

              <p style={{...paragraphStyle, fontWeight: 600, color: "#333", marginTop: "18px", marginBottom: "10px"}}>
                Equipment Troubleshooting
              </p>
              <ul style={listStyle}>
                <li>
                  <strong style={{ color: "#555" }}>Problem:</strong>
                  {" "}Emission current 인가 시 고전압 drop (7.6 kV → 6.x kV) 발생
                </li>
                <li>
                  <strong style={{ color: "#555" }}>Solution:</strong>
                  {" "}Beam deflection 진단 후 에미터 어셈블리 교체, 제조사 협업으로 정상화
                </li>
              </ul>

              <div style={{ ...impactBoxStyle, background: "#FFF0F5", borderLeft: "4px solid #FF6B9D", marginTop: "20px" }}>
                <h4 style={{ margin: "0 0 5px", fontSize: "1rem", color: "#FF6B9D" }}>🚀 Impact</h4>
                <p style={{ ...paragraphStyle, marginBottom: "0", fontSize: "0.95rem" }}>
                  ✓ MIM 다층 구조 정밀 증착 및 3~20 nm급 두께 제어<br />
                  ✓ 대면적 균일 증착 및 공정 재현성 확보<br />
                  ✓ 장비 트러블슈팅 및 실시간 문제 해결 능력
                </p>
              </div>
            </div>

            <div style={imageGalleryContainerStyle}>
              <div style={{...imageGridStyle, gridTemplateColumns: "1fr", gap: "12px"}}>
                <img src="/research/deposition/dep1/dep1-1.jpg" alt="E-beam MIM" style={galleryImageStyle} />
                <img src="/research/deposition/dep1/dep1-2.jpg" alt="E-beam Structure" style={galleryImageStyle} />
                <img src="/research/deposition/dep1/dep1-3.jpg" alt="E-beam Film" style={galleryImageStyle} />
                <img src="/research/deposition/dep1/dep1-4.jpg" alt="E-beam Equipment" style={galleryImageStyle} />
              </div>
            </div>
          </div>
        </section>

        {/* === 2. Sputtering (Two Separate Sections in One Box) === */}
        <section id="project-phosphor-sputtering" style={projectSectionStyle}>
          <div style={projectHeaderStyle}>
            <span style={{ fontSize: "2.5rem" }}>⚙️</span>
            <div style={{ flex: 1 }}>
              <h2 style={titleStyle}>RF Magnetron Sputtering</h2>
              <p style={subTitleStyle}>
                Phosphor & Semiconductor Thin Film Deposition
              </p>
            </div>
          </div>

          {/* PART 1: Phosphor Sputtering */}
          <div style={{marginBottom: "50px"}}>
            <div style={{...projectHeaderStyle, borderBottom: "none", paddingBottom: "10px", marginBottom: "20px"}}>
              <span style={{ fontSize: "2rem" }}>🔶</span>
              <div style={{ flex: 1 }}>
                <h3 style={{...titleStyle, fontSize: "1.5rem", marginBottom: "8px"}}>Phosphor Sputtering</h3>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                  <span style={{fontSize: "0.9rem", color: "#888", fontWeight: 600}}>
                    2022 - 2023 | Silla Univ
                  </span>
                  <span style={publicationBadgeStyle}>
                    📌 Poster at GCIM 2023
                  </span>
                  <span style={publicationBadgeStyle}>
                    📄 Published in Korean Journal of Materials Research
                  </span>
                </div>
              </div>
            </div>

            <div style={contentBoxStyle}>
              <div style={{ flex: 1 }}>
                <h3 style={{...headingStyle, color: "#F9A825"}}>Objective</h3>
                <p style={paragraphStyle}>
                  자체 제작한 CaNb₂O₆:Tb³⁺ 세라믹 타겟을 사용하여 <b>산화물 형광체 박막</b>을 RF 마그네트론 스퍼터링으로 증착.
                  공정 파라미터 최적화를 통해 고품질 녹색 발광 박막 확보.
                </p>

                <h3 style={{...headingStyle, color: "#F9A825"}}>RF Sputtering Process</h3>
                
                <ul style={listStyle}>
                  <li>
                    <strong style={{ color: "#555" }}>RF Power & Rate:</strong>
                    {" "}40 W, 증착 속도 제어를 통한 균일한 박막 형성
                  </li>
                  <li>
                    <strong style={{ color: "#555" }}>Substrate Temperature:</strong>
                    {" "}300°C 증착, 후속 700~1000°C 어닐링 시 결정성 향상
                  </li>
                  <li>
                    <strong style={{ color: "#555" }}>Working Pressure:</strong>
                    {" "}30 mTorr, Ar 가스 40 sccm 공급
                  </li>
                  <li>
                    <strong style={{ color: "#555" }}>Film Thickness:</strong>
                    {" "}450~510 nm (증착 시간 30분)
                  </li>
                  <li>
                    <strong style={{ color: "#555" }}>Post-annealing:</strong>
                    {" "}700~1000°C 열처리 후 Tb³⁺ 녹색 발광(546 nm) 강도 최대 11.8배 증가
                  </li>
                </ul>

                <h3 style={{...headingStyle, color: "#F9A825", marginTop: "18px"}}>Film Characterization</h3>
                <ul style={listStyle}>
                  <li>XRD: CaNb₂O₆ 단일 상 형성, 결정 입자 크기 19~23 nm</li>
                  <li>SEM: 40~90 nm 조약돌 형상, 수직 기둥 구조</li>
                  <li>PL: 251 nm 여기 시 546 nm 녹색 발광, ⁵D₄ → ⁷F₅ 자기 쌍극자 전이</li>
                </ul>

                <div style={{ ...impactBoxStyle, background: "#FFF9C4", borderLeft: "4px solid #F9A825", marginTop: "18px" }}>
                  <h4 style={{ margin: "0 0 5px", fontSize: "1rem", color: "#F57F17" }}>🚀 Impact</h4>
                  <p style={{ ...paragraphStyle, marginBottom: "0", fontSize: "0.95rem" }}>
                    ✓ RF 스퍼터링 공정 최적화 (파워, 온도, 압력 제어)<br />
                    ✓ 타겟 제작부터 박막 증착, 후처리까지 전 공정 수행<br />
                    ✓ 녹색 발광 형광체 박막 특성 제어 및 학회 발표·논문 게재
                  </p>
                </div>

                <div style={{marginTop: "20px", display: "flex", gap: "15px", flexWrap: "wrap"}}>
                  <a href="/research/synthesis" style={linkButtonStyle}>
                    → Go to Synthesis (Target Fabrication)
                  </a>
                  <a href="/research/phosphor-perovskite" style={linkButtonStyle}>
                    → Go to Phosphor & Perovskite
                  </a>
                </div>
              </div>

              <div style={imageGalleryContainerStyle}>
                <div style={imageGridStyle}>
                  <img src="/research/deposition/dep2/dep2-1.jpg" alt="Phosphor Film 1" style={galleryImageStyle} />
                  <img src="/research/deposition/dep2/dep2-2.jpg" alt="Phosphor Film 2" style={galleryImageStyle} />
                  <img src="/research/deposition/dep2/dep2-3.jpg" alt="Phosphor Film 3" style={galleryImageStyle} />
                  <img src="/research/deposition/dep2/dep2-4.jpg" alt="Phosphor Film 4" style={galleryImageStyle} />
                  <img src="/research/deposition/dep2/dep2-5.jpg" alt="Phosphor Film 5" style={galleryImageStyle} />
                  <img src="/research/deposition/dep2/dep2-6.jpg" alt="Phosphor Film 6" style={galleryImageStyle} />
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{
            borderTop: "3px dashed #E0E0E0",
            margin: "40px 0",
          }} />

          {/* PART 2: Semiconductor Sputtering */}
          <div id="project-semiconductor">
            <div style={{...projectHeaderStyle, borderBottom: "none", paddingBottom: "10px", marginBottom: "20px"}}>
              <span style={{ fontSize: "2rem" }}>💠</span>
              <div style={{ flex: 1 }}>
                <h3 style={{...titleStyle, fontSize: "1.5rem", marginBottom: "8px"}}>Semiconductor Sputtering</h3>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                  <span style={{fontSize: "0.9rem", color: "#888", fontWeight: 600}}>
                    2023 - 2024 | Korea Univ
                  </span>
                </div>
              </div>
            </div>

            <div style={contentBoxStyle}>
              <div style={{ flex: 1 }}>
                <h3 style={{...headingStyle, color: "#7B1FA2"}}>Objective</h3>
                <p style={paragraphStyle}>
                  RF 마그네트론 스퍼터링을 활용한 <b>저온 반도체 박막 성장</b> 및 <b>TSV 접합층 증착</b> 수행.
                  공정 파라미터 최적화를 통한 박막 품질 향상 및 3D 집적 공정 기술 습득.
                </p>

                <h3 style={{...headingStyle, color: "#7B1FA2"}}>Low-Temperature GaN Growth (Team Project)</h3>
                <ul style={listStyle}>
                  <li>
                    <strong style={{ color: "#555" }}>Process:</strong>
                    {" "}&lt;400°C 저온 조건에서 RF 스퍼터링을 통한 GaN 박막 성장
                  </li>
                  <li>
                    <strong style={{ color: "#555" }}>Optimization:</strong>
                    {" "}N₂/Ar 가스 비율 및 RF 파워 최적화, XRD를 통한 hexagonal GaN 상 확인
                  </li>
                </ul>

                <h3 style={{...headingStyle, color: "#7B1FA2", marginTop: "18px"}}>TSV Bonding Layer (Individual Project)</h3>
                
                <ul style={listStyle}>
                  <li>
                    <strong style={{ color: "#555" }}>Multi-layer Stack:</strong>
                    {" "}Cu, Ti, TiN 다층 금속 접합층 순차 증착
                  </li>
                  <li>
                    <strong style={{ color: "#555" }}>Step Coverage:</strong>
                    {" "}TSV 구조에서 기판 각도, 공정 압력, RF 파워 조절을 통한 conformal coating 향상
                  </li>
                  <li>
                    <strong style={{ color: "#555" }}>Adhesion:</strong>
                    {" "}접합층 두께 최적화 및 기판 전처리를 통한 계면 밀착력 확보
                  </li>
                  <li>
                    Characterization: XRD, SEM, AFM을 통한 결정성, step coverage, 표면 거칠기 평가
                  </li>
                </ul>

                <div style={{ ...impactBoxStyle, background: "#F3E5F5", borderLeft: "4px solid #7B1FA2", marginTop: "18px" }}>
                  <h4 style={{ margin: "0 0 5px", fontSize: "1rem", color: "#7B1FA2" }}>🚀 Impact</h4>
                  <p style={{ ...paragraphStyle, marginBottom: "0", fontSize: "0.95rem" }}>
                    ✓ 저온 반도체 박막 성장 및 다층 금속 증착 경험<br />
                    ✓ TSV 공정 최적화를 통한 3D 집적 공정 이해<br />
                    ✓ 팀 협업 및 개인 프로젝트 수행, 공정 파라미터 최적화 능력
                  </p>
                </div>
              </div>

              <div style={imageGalleryContainerStyle}>
                <div style={imageGridStyle}>
                  <img src="/research/deposition/dep3/dep3-1.jpg" alt="Semiconductor Film 1" style={galleryImageStyle} />
                  <img src="/research/deposition/dep3/dep3-2.jpg" alt="Semiconductor Film 2" style={galleryImageStyle} />
                  <img src="/research/deposition/dep3/dep3-3.jpg" alt="Semiconductor Film 3" style={galleryImageStyle} />
                  <img src="/research/deposition/dep3/dep3-4.jpg" alt="Semiconductor Film 4" style={galleryImageStyle} />
                  <img src="/research/deposition/dep3/dep3-5.jpg" alt="Semiconductor Film 5" style={galleryImageStyle} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === 3. CVD === */}
        <section id="project-cvd" style={projectSectionStyle}>
          <div style={projectHeaderStyle}>
            <span style={{ fontSize: "2.5rem" }}>🔥</span>
            <div style={{ flex: 1 }}>
              <h2 style={titleStyle}>Chemical Vapor Deposition (CVD)</h2>
              <p style={subTitleStyle}>
                2022 - 2023 | Silla Univ
              </p>
            </div>
          </div>

          <div style={contentBoxStyle}>
            <div style={{ flex: 1 }}>
              <h3 style={headingStyle}>Objective</h3>
              <p style={paragraphStyle}>
                <b>Thermal CVD</b>를 통해 Carbon Microcoil(CMC) 성장 메커니즘 규명 및
                C₂H₂/SF₆ 조성 제어를 통한 고품질 CMC 합성 조건 확립.
              </p>

              <h3 style={headingStyle}>Process Optimization (80+ Experiments)</h3>
              <ul style={listStyle}>
                <li>
                  <strong style={{ color: "#555" }}>Gas Control:</strong>
                  {" "}C₂H₂ 500 sccm 고정, SF₆ 5-60 sccm 가변, 650°C, 100 Torr, Ni catalyst 사용
                </li>
                <li>
                  <strong style={{ color: "#555" }}>SF₆ Injection Time:</strong>
                  {" "}5/15/30/45/60 min 스크리닝 → 45 min 최적 (균일한 CMC 형성)
                </li>
                <li>
                  <strong style={{ color: "#555" }}>Total Deposition Time:</strong>
                  {" "}45-120 min 비교 → 장시간 증착 시 over-growth로 품질 저하 확인
                </li>
                <li>
                  <strong style={{ color: "#555" }}>C₂H₂:SF₆ Ratio:</strong>
                  {" "}33% 고정 조건에서 morphology 최적화
                </li>
              </ul>

              <h3 style={headingStyle}>Growth Mechanism (4-Stage Model)</h3>
              <p style={paragraphStyle}>
                FESEM 분석을 통해 4단계 성장 메커니즘 규명:
                (1) 가느다란 CMC 초기 발생 → (2) 굵은 CMC 형성 → (3) Carbon lump 표면 형성 → (4) 새로운 CMC 재성장
              </p>

              <h3 style={headingStyle}>Process Control</h3>
              <ul style={listStyle}>
                <li><strong>Pressure Stability:</strong> 초기 진공 설정 및 101 Torr 이하 유지</li>
                <li><strong>MFC Calibration:</strong> SF₆ ON/OFF cycling 실험, MFC 제어 정밀도 개선</li>
                <li><strong>Reproducibility:</strong> 온도/습도/배기 밸브가 결과에 미치는 영향 분석</li>
                <li><strong>Quantitative Analysis:</strong> 생성물 무게 측정(ΔWeight)을 통한 growth rate 정량화</li>
              </ul>

              <div style={{ ...impactBoxStyle, background: "#E0F2F1", borderLeft: "4px solid #009688" }}>
                <h4 style={{ margin: "0 0 5px", fontSize: "1rem", color: "#009688" }}>🚀 Impact</h4>
                <p style={{ ...paragraphStyle, marginBottom: "0", fontSize: "0.95rem" }}>
                  ✓ 80+ 실험을 통한 CVD 공정 매트릭스 설계 및 최적화<br />
                  ✓ Deposition-etching 경쟁 관계 규명 및 성장 메커니즘 모델링<br />
                  ✓ 공정 재현성 확보를 위한 장비 엔지니어 수준의 관리 경험
                </p>
              </div>
            </div>

            <div style={imageGalleryContainerStyle}>
              <div style={{...imageGridStyle, gridTemplateColumns: "1fr", gap: "12px"}}>
                <img src="/research/deposition/dep4/dep4-1.jpg" alt="CVD CMC 1" style={galleryImageStyle} />
                <img src="/research/deposition/dep4/dep4-2.jpg" alt="CVD CMC 2" style={galleryImageStyle} />
                <img src="/research/deposition/dep4/dep4-3.jpg" alt="CVD CMC 3" style={galleryImageStyle} />
                <img src="/research/deposition/dep4/dep4-4.jpg" alt="CVD CMC 4" style={galleryImageStyle} />
              </div>
            </div>
          </div>
        </section>

        {/* === 4. P-ALD (Dashed Box) === */}
        <section id="project-pald" style={{...projectSectionStyle, border: "2px dashed #BDBDBD"}}>
          <div style={projectHeaderStyle}>
            <span style={{ fontSize: "2.5rem" }}>⚛️</span>
            <div style={{ flex: 1 }}>
              <h2 style={{...titleStyle, color: "#757575"}}>Powder ALD (P-ALD)</h2>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <p style={{ ...subTitleStyle, margin: 0 }}>
                  2024 - 2025 | KICET | Collaboration
                </p>
                <span style={grayPublicationBadgeStyle}>
                  📄 Under Review in Advanced Optical Materials
                </span>
              </div>
            </div>
          </div>

          <div style={{...contentBoxStyle, flexDirection: "column"}}>
            <div>
              <h3 style={{...headingStyle, color: "#757575"}}>Project Overview</h3>
              <p style={paragraphStyle}>
                유동층 반응기(Fluidized-bed Reactor)를 이용한 Powder ALD 공정에 협업 참여.
                페로브스카이트 분말 표면에 Al₂O₃ 보호막을 원자층 단위로 코팅하여 대기 안정성 개선.
              </p>

              <ul style={listStyle}>
                <li>
                  <strong style={{ color: "#555" }}>Process Understanding:</strong>
                  {" "}Fluidized-bed ALD 공정 원리 및 solvent-free 코팅 메커니즘 분석
                </li>
                <li>
                  <strong style={{ color: "#555" }}>Collaboration Role:</strong>
                  {" "}코팅된 분말의 특성 평가 및 데이터 분석 지원
                </li>
              </ul>

              <div style={{ ...impactBoxStyle, background: "#F5F5F5", borderLeft: "4px solid #9E9E9E" }}>
                <h4 style={{ margin: "0 0 5px", fontSize: "1rem", color: "#757575" }}>🚀 Impact</h4>
                <p style={{ ...paragraphStyle, marginBottom: "0", fontSize: "0.95rem" }}>
                  ✓ Powder ALD 공정 및 원자층 코팅 메커니즘 경험<br />
                  ✓ 협업을 통한 첨단 ALD 공정 참여
                </p>
              </div>

              <div style={{marginTop: "20px"}}>
                <a href="/research/phosphor-perovskite" style={{...linkButtonStyle, color: "#757575", borderColor: "#9E9E9E"}}>
                  → Go to Phosphor & Perovskite
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Navigation */}
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <a href="/research/synthesis" style={secondaryBtnStyle}>
            ← Prev: Synthesis
          </a>
          <a href="/research/thermal-management" style={primaryBtnStyle}>
            Next: Thermal Management →
          </a>
        </div>
      </div>
    </div>
  );
}

/* ================= HELPER COMPONENTS ================= */

interface TimelineButtonProps {
  label: string;
  id: string;
  active: boolean;
  onClick: (id: string) => void;
  dashed?: boolean;
}

function TimelineButton({ label, id, active, onClick, dashed }: TimelineButtonProps) {
  return (
    <div
      onClick={() => onClick(id)}
      style={{
        fontSize: "0.9rem",
        color: active ? (dashed ? "#757575" : "#FF6B9D") : (dashed ? "#999" : "#666"),
        textAlign: "center",
        cursor: "pointer",
        padding: "8px 16px",
        borderRadius: "20px",
        background: active 
          ? (dashed ? "rgba(158, 158, 158, 0.15)" : "rgba(255, 107, 157, 0.1)") 
          : "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(10px)",
        border: `2px ${dashed ? 'dashed' : 'solid'} ${active ? (dashed ? "#9E9E9E" : "#FF6B9D") : "rgba(255, 255, 255, 0.5)"}`,
        fontWeight: 600,
        transition: "all 0.2s ease",
        boxShadow: active 
          ? (dashed ? "0 4px 12px rgba(158, 158, 158, 0.1)" : "0 4px 12px rgba(255, 107, 157, 0.15)") 
          : "0 2px 8px rgba(0,0,0,0.05)",
        minWidth: "160px",
      }}
    >
      {label}
    </div>
  );
}

interface OverviewCardProps {
  icon: string;
  title: string;
  desc1: string;
  desc2: string;
  onClick: () => void;
  color: string;
  borderColor: string;
  dashed?: boolean;
  transparent?: boolean;
}

function OverviewCard({ icon, title, desc1, desc2, onClick, color, borderColor, dashed, transparent }: OverviewCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: "25px",
        borderRadius: "20px",
        boxShadow: isHovered ? `0 8px 20px ${color}` : "0 4px 12px rgba(0,0,0,0.08)",
        textAlign: "center",
        border: `2px ${dashed ? 'dashed' : 'solid'} ${isHovered ? borderColor : (transparent ? "#BDBDBD" : "rgba(255, 255, 255, 0.3)")}`,
        cursor: "pointer",
        transition: "all 0.2s ease",
        background: isHovered ? "rgba(255, 255, 255, 0.9)" : (transparent ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.6)"),
        backdropFilter: "blur(10px)",
        transform: isHovered ? "translateY(-5px)" : "translateY(0)",
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

/* ================= STYLES ================= */

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
  marginBottom: "20px",
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

const grayPublicationBadgeStyle: React.CSSProperties = {
  background: "#F5F5F5",
  border: "1.5px dashed #9E9E9E",
  borderRadius: "6px",
  padding: "5px 14px",
  fontSize: "0.85rem",
  fontWeight: 700,
  color: "#757575",
  whiteSpace: "nowrap",
  display: "inline-block",
};

const contentBoxStyle: React.CSSProperties = {
  display: "flex",
  gap: "40px",
  flexWrap: "wrap",
  alignItems: "flex-start", // This makes the flex items shrink to their content height
};

const headingStyle: React.CSSProperties = {
  fontSize: "1.1rem",
  fontWeight: 700,
  color: "#FF6B9D",
  marginTop: "25px",
  marginBottom: "10px",
  letterSpacing: "0.5px",
};

const paragraphStyle: React.CSSProperties = {
  fontSize: "1rem",
  lineHeight: "1.7",
  color: "#555",
  marginBottom: "20px",
};

const listStyle: React.CSSProperties = {
  paddingLeft: "20px",
  lineHeight: "1.8",
  color: "#555",
  marginBottom: "20px",
};

const imagePlaceholderStyle: React.CSSProperties = {
  flex: "0 0 320px",
  background: "#F8F9FA",
  borderRadius: "15px",
  padding: "25px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "inset 0 0 20px rgba(0,0,0,0.05)",
  border: "2px dashed #E0E0E0",
  textAlign: "center",
  width: "100%",
  minHeight: "280px",
};

const imageGalleryContainerStyle: React.CSSProperties = {
  flex: "0 0 320px",
  background: "#F8F9FA",
  borderRadius: "15px",
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  border: "1px solid #E0E0E0",
  width: "100%",
  height: "auto", // Allows box to shrink
};

const imageGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
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

const impactBoxStyle: React.CSSProperties = {
  marginTop: "30px",
  padding: "15px 20px",
  borderRadius: "10px",
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

const secondaryLinkButtonStyle: React.CSSProperties = {
  display: "inline-block",
  background: "rgba(255, 107, 157, 0.05)",
  color: "#FF6B9D",
  padding: "10px 20px",
  borderRadius: "15px",
  fontSize: "0.9rem",
  fontWeight: 600,
  textDecoration: "none",
  border: "1px solid rgba(255, 107, 157, 0.3)",
  transition: "all 0.3s ease",
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