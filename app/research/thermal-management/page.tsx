"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ThermalManagementPage() {
  const [activeProject, setActiveProject] = useState<string>("smartglass");

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
          Thermal Management
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
          <b>Cooling</b> without Energy, <b>Insulation</b> with Transparency.<br />
          전력 소모 없는 복사 냉각 기술과 스마트 윈도우용 광학 소재 연구.
        </p>
      </header>

      {/* Timeline Section */}
      <div className="timeline-section" style={{ maxWidth: "600px", margin: "0 auto 60px" }}>
        <div style={{ position: "relative", padding: "0 20px" }}>
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "200px", 
              height: "3px",
              background: "linear-gradient(to right, rgba(255, 107, 157, 0.1), #FF6B9D, rgba(255, 107, 157, 0.1))",
              borderRadius: "2px",
            }}
          />
          
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: "#FF6B9D",
                  border: "3px solid #FF6B9D",
                  boxShadow: "0 0 0 4px rgba(255, 107, 157, 0.15)",
                }}
              />
              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "#FF6B9D",
                  marginTop: "15px",
                }}
              >
                2024 - 2025
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
        <div
          className="overview-card"
          onClick={() => scrollToSection('smartglass')}
          style={{
            ...overviewCardStyle,
            background: "rgba(255, 255, 255, 0.6)",
            backdropFilter: "blur(10px)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(255, 193, 7, 0.3)";
            e.currentTarget.style.borderColor = "#FFC107";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.6)";
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>☀️</div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#333", marginBottom: "8px" }}>
            Smart Glass
          </h3>
          <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: "1.5", margin: 0 }}>
            투명 단열 & 복사 냉각<br />Ag Dewetting 기술
          </p>
        </div>

        <div
          className="overview-card"
          onClick={() => scrollToSection('cooling')}
          style={{
            ...overviewCardStyle,
            background: "rgba(255, 255, 255, 0.6)",
            backdropFilter: "blur(10px)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(33, 150, 243, 0.3)";
            e.currentTarget.style.borderColor = "#2196F3";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.6)";
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>❄️</div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#333", marginBottom: "8px" }}>
            Color Cooling
          </h3>
          <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: "1.5", margin: 0 }}>
            컬러 구현 복사 냉각<br />Fabry-Perot 필터
          </p>
        </div>

        <div
          className="overview-card"
          onClick={() => scrollToSection('optical')}
          style={{
            ...overviewCardStyle,
            background: "rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(10px)",
            borderColor: "#E1BEE7",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(156, 39, 176, 0.3)";
            e.currentTarget.style.borderColor = "#9C27B0";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.8)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
            e.currentTarget.style.borderColor = "#E1BEE7";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.4)";
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>🔬</div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#333", marginBottom: "8px" }}>
            Optical Analysis
          </h3>
          <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: "1.5", margin: 0 }}>
            적분구 분광 분석<br />UV-vis-NIR & FT-IR
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "60px",
        }}
      >
        {/* Project 1: Smart Glass */}
        <section id="project-smartglass" style={projectSectionStyle} className="project-section">
          <div style={projectHeaderStyle} className="project-header">
            <span style={{ fontSize: "2.5rem" }}>☀️</span>
            <div style={{ flex: 1 }}>
              <h2 style={titleStyle} className="section-title">Smart Glass for Thermal Management</h2>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <p style={{ ...subTitleStyle, margin: 0 }} className="section-subtitle">
                  2024 - 2025 | KICET
                </p>
                <span style={publicationBadgeStyle} className="publication-badge">
                  📄 Published in Advanced Science
                </span>
              </div>
            </div>
          </div>

          <div style={{ ...contentBoxStyle, alignItems: "flex-start" }} className="content-box">
            <div style={{ flex: 1 }}>
              <h3 style={headingStyle} className="content-heading">Research Focus</h3>
              <p style={paragraphStyle} className="content-paragraph">
                소다라임 글라스 위에 Ag 기반 다층 박막을 형성하여, 열처리 온도 조절을 통해 
                투명도를 유지하면서 외부 열 차단(Photothermal Heating) 또는 내부 열 방출(Radiative Cooling) 
                기능을 선택적으로 구현하는 스마트 윈도우 개발.
              </p>

              <h3 style={headingStyle} className="content-heading">Key Engineering</h3>
              <ul style={listStyle} className="content-list">
                <li>
                  <strong style={{ color: "#FF6B9D" }}>Phase Change Control:</strong> 
                  {" "}E-beam으로 증착된 Ag/TiO₂/Ag 박막을 RTP(Rapid Thermal Processing)로 열처리하여 
                  Ag 입자의 <b>Dewetting(비젖음)</b> 및 나노 입자화 유도.
                </li>
                <li>
                  <strong style={{ color: "#FF6B9D" }}>Anti-fogging:</strong> 
                  {" "}Ag 나노 입자의 발열 특성을 이용해 온도 차이에 의한 수분 응결(김서림) 방지 기능 구현.
                </li>
                <li>
                  <strong style={{ color: "#FF6B9D" }}>Optical Analysis:</strong> 
                  {" "}<b>적분구(Integrating Sphere)</b>를 장착한 UV-vis-NIR 분광광도계를 사용하여 
                  산란된 빛까지 포함한 정확한 반사/투과 스펙트럼 분석 수행.
                </li>
              </ul>

              <div
                className="impact-box"
                style={{
                  background: "#FFF8E1",
                  padding: "15px 20px",
                  borderRadius: "10px",
                  borderLeft: "4px solid #FFC107",
                  marginTop: "30px",
                  marginBottom: "25px"
                }}
              >
                <h4 style={{ margin: "0 0 5px", fontSize: "1rem", color: "#F57F17" }}>🚀 Impact</h4>
                <p style={{ ...paragraphStyle, marginBottom: "0", fontSize: "0.95rem" }}>
                  ✓ Advanced Science 저널 게재 (Impact Factor 14.3, 2025 기준)<br />
                  ✓ 투명도 유지하며 이중 기능(단열 + 냉각) 선택적 구현<br />
                  ✓ Anti-fogging 부가 기능으로 실용성 향상
                </p>
              </div>

              <div>
                 <a href="/research/deposition" style={linkButtonStyle} className="link-button">
                   → Go to Deposition
                 </a>
              </div>
            </div>
            
            <div style={imageGalleryContainerStyle} className="image-gallery">
              <div style={imageGridStyle}>
                <Image 
                  src="/research/thermal-management/the1/the1-1.jpg" 
                  alt="Smart Glass 1"
                  width={400}
                  height={300}
                  style={galleryImageStyle} 
                />
                <Image 
                  src="/research/thermal-management/the1/the1-2.jpg" 
                  alt="Smart Glass 2"
                  width={400}
                  height={300}
                  style={galleryImageStyle} 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project 2: Radiative Cooling */}
        <section id="project-cooling" style={projectSectionStyle} className="project-section">
          <div style={projectHeaderStyle} className="project-header">
            <span style={{ fontSize: "2.5rem" }}>❄️</span>
            <div style={{ flex: 1 }}>
              <h2 style={titleStyle} className="section-title">Radiative Cooling Color Filters</h2>
              <p style={{ ...subTitleStyle, margin: 0 }} className="section-subtitle experimental-text">
                2024 - 2025 | KICET | Experimental Study
              </p>
            </div>
          </div>

          <div style={{ ...contentBoxStyle, alignItems: "flex-start" }} className="content-box">
             <div style={{ flex: 1 }}>
              <h3 style={headingStyle} className="content-heading">Research Focus</h3>
              <p style={paragraphStyle} className="content-paragraph">
                기존의 흰색/은색 위주의 복사 냉각 소재의 심미적 한계를 극복하기 위해, 
                다양한 색상을 구현하면서도 냉각 성능을 유지하는 PDMS 기반 컬러 필터 연구.
              </p>

              <h3 style={headingStyle} className="content-heading">Key Engineering</h3>
              <ul style={listStyle} className="content-list">
                <li>
                  <strong style={{ color: "#2196F3" }}>Fabry-Perot Resonance:</strong> 
                  {" "}Au 기판 위에 Ge 박막 두께(5~70nm)를 조절하여 빛의 간섭 효과를 이용한 다채로운 색상 구현.
                </li>
                <li>
                  <strong style={{ color: "#2196F3" }}>Performance Optimization:</strong> 
                  {" "}PDMS 코팅을 통해 대기창(8-13μm) 영역의 방사율(Emissivity)을 극대화하여 냉각 효율 향상.
                </li>
                 <li>
                  <strong style={{ color: "#2196F3" }}>Field Test:</strong> 
                  {" "}자체 제작한 셋업과 Pyranometer, Data Logger를 활용한 <b>야외 실측(Outdoor Test)</b>으로 실제 온도 저감 효과 입증.
                </li>
              </ul>

              <div
                className="impact-box"
                style={{
                  background: "#E3F2FD",
                  padding: "15px 20px",
                  borderRadius: "10px",
                  borderLeft: "4px solid #2196F3",
                  marginTop: "30px",
                  marginBottom: "25px"
                }}
              >
                <h4 style={{ margin: "0 0 5px", fontSize: "1rem", color: "#1976D2" }}>🚀 Impact</h4>
                <p style={{ ...paragraphStyle, marginBottom: "0", fontSize: "0.95rem" }}>
                  ✓ 심미성과 냉각 성능을 동시에 만족하는 컬러 필터 개발<br />
                  ✓ 야외 실측을 통한 실제 온도 저감 효과 검증<br />
                  ✓ 건축 외장재 등 실용화 가능성 확보
                </p>
              </div>

              <div>
                 <a href="/research/deposition" style={{...linkButtonStyle, color: "#2196F3", borderColor: "#2196F3"}} className="link-button">
                   → Go to Deposition
                 </a>
              </div>
            </div>

            <div style={imageGalleryContainerStyle} className="image-gallery">
              <div style={imageGridStyle}>
                <Image 
                  src="/research/thermal-management/the2/the2-1.jpg" 
                  alt="Color Cooling 1" 
                  width={400}
                  height={300}
                  style={galleryImageStyle} 
                />
                <Image 
                  src="/research/thermal-management/the2/the2-2.jpg" 
                  alt="Color Cooling 2"
                  width={400}
                  height={300}
                  style={galleryImageStyle} 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Optical Analysis */}
        <section 
          id="project-optical" 
          className="optical-section"
          style={{
            ...projectSectionStyle, 
            background: "rgba(255, 255, 255, 0.6)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.5)",
            borderLeft: "5px solid #9C27B0"
          }}
        >
           <div style={{marginBottom: "20px"}}>
              <h2 className="optical-title" style={{...titleStyle, fontSize: "1.6rem", color: "#6A1B9A"}}>🔬 Optical Characterization Methods</h2>
           </div>

          <div style={{ marginBottom: "30px" }}>
            <h3 style={{...headingStyle, color: "#9C27B0"}} className="content-heading">Analytical Equipment & Methods</h3>
            <p style={{...paragraphStyle, fontSize: "0.95rem"}} className="content-paragraph">
              광학 소재의 정확한 특성 분석을 위해 다양한 분광 분석 장비를 활용하여 가시광선부터 적외선 영역까지 
              포괄적인 광학 데이터를 확보.
            </p>
          </div>

          <div className="equipment-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
             {/* Equipment 1 */}
             <div className="equipment-item">
               <div style={equipmentImageContainerStyle}>
                 <Image 
                   src="/research/thermal-management/the3/the3-1.jpg" 
                   alt="UV-vis-NIR" 
                   width={500}
                   height={300}
                   style={equipmentImageStyle} 
                 />
               </div>
               <h3 style={{...headingStyle, marginTop: "15px", color: "#8E24AA"}} className="equipment-heading">UV-vis-NIR Spectroscopy</h3>
               <p style={{...paragraphStyle, fontSize: "0.9rem", marginBottom: "0"}} className="equipment-text">
                 • 적분구(Integrating Sphere) 장착으로 산란광 포함 정확한 측정<br/>
                 • 가시광선~근적외선 영역 (400-2500nm) 분석<br/>
                 • 색상 및 투명도 특성 평가
               </p>
             </div>

             {/* Equipment 2 */}
             <div className="equipment-item">
               <div style={equipmentImageContainerStyle}>
                 <Image 
                   src="/research/thermal-management/the3/the3-2.jpg" 
                   alt="FT-IR" 
                   width={500}
                   height={300}
                   style={equipmentImageStyle} 
                 />
               </div>
               <h3 style={{...headingStyle, marginTop: "15px", color: "#8E24AA"}} className="equipment-heading">FT-IR Spectroscopy</h3>
               <p style={{...paragraphStyle, fontSize: "0.9rem", marginBottom: "0"}} className="equipment-text">
                 • 대기창(8-13μm) 영역 방사율 측정<br/>
                 • 복사 냉각/단열 성능 평가<br/>
                 • 온도 제어 없는 실온 측정
               </p>
             </div>

             {/* Equipment 3 */}
             <div className="equipment-item">
               <div style={equipmentImageContainerStyle}>
                 <Image 
                   src="/research/thermal-management/the3/the3-3.jpg" 
                   alt="Outdoor Field Test"
                   width={500}
                   height={300}
                   style={equipmentImageStyle} 
                 />
               </div>
               <h3 style={{...headingStyle, marginTop: "15px", color: "#8E24AA"}} className="equipment-heading">Field Testing</h3>
               <p style={{...paragraphStyle, fontSize: "0.9rem", marginBottom: "0"}} className="equipment-text">
                 • 태양광 복사 강도(Pyranometer) 실시간 측정<br/>
                 • 실제 환경 온도 변화 검증<br/>
                 • 열 카메라를 통한 표면 온도 분포 확인
               </p>
             </div>
          </div>

          <div className="analytical-support" style={{marginTop: "30px", background: "rgba(243, 229, 245, 0.7)", padding: "20px", borderRadius: "15px"}}>
            <h3 style={{...headingStyle, color: "#7B1FA2"}} className="content-heading">Analytical Support</h3>
            <div className="support-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div>
                <h4 style={{fontSize: "1rem", fontWeight: 700, color: "#4A148C", marginBottom: "8px"}}>
                  💻 RSoft Optical Simulation
                </h4>
                <p style={{fontSize: "0.9rem", color: "#555", lineHeight: "1.6", margin: 0}}>
                  실제 증착 전, 다층 박막 구조의 광학적 거동 예측. 굴절률(n)과 소광계수(k) 데이터 기반 
                  최적 두께 조건 도출로 실험 시행착오 최소화.
                </p>
              </div>

              <div>
                <h4 style={{fontSize: "1rem", fontWeight: 700, color: "#4A148C", marginBottom: "8px"}}>
                  🏭 Industrial Sample Analysis
                </h4>
                <p style={{fontSize: "0.9rem", color: "#555", lineHeight: "1.6", margin: 0}}>
                  외부 기업(디어스아이 등) 의뢰 샘플의 광학 특성 분석 지원. Radiative cooling cement 등 
                  다양한 기능성 소재의 반사율, 투과율 데이터 확보 및 신뢰성 검증.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Footer Navigation */}
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <div className="footer-buttons" style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <a href="/research/phosphor-perovskite" style={secondaryBtnStyle} className="footer-btn">
            ← Prev: Phosphor & Perovskite
          </a>
          <a href="/research/programming" style={primaryBtnStyle} className="footer-btn">
            Next: Programming →
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

          .overview-card {
            padding: 20px !important;
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

          .experimental-text {
            font-size: 0.85rem !important;
          }

          .publication-container {
            flex-direction: column !important;
            align-items: flex-start !important;
          }

          .publication-badge,
          span.publication-badge,
          .project-header .publication-badge {
            font-size: 0.75rem !important;
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
          }

          .optical-section {
            padding: 25px 20px !important;
          }

          .optical-title {
            font-size: 1.3rem !important;
          }

          .equipment-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }

          .equipment-heading {
            font-size: 0.95rem !important;
          }

          .equipment-text {
            font-size: 0.85rem !important;
          }

          .analytical-support {
            padding: 15px !important;
          }

          .support-grid {
            grid-template-columns: 1fr !important;
            gap: 15px !important;
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

          .section-subtitle {
            font-size: 0.85rem !important;
          }

          .experimental-text {
            font-size: 0.8rem !important;
          }

          .content-paragraph {
            font-size: 0.9rem !important;
          }

          .content-list {
            font-size: 0.85rem !important;
          }

          .optical-title {
            font-size: 1.15rem !important;
          }

          .equipment-text {
            font-size: 0.8rem !important;
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

const equipmentImageContainerStyle: React.CSSProperties = {
  width: "100%",
  height: "200px", 
  background: "white",
  borderRadius: "15px",
  overflow: "hidden",
  marginBottom: "15px",
  border: "2px solid rgba(255,255,255,0.8)",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
};

const equipmentImageStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};