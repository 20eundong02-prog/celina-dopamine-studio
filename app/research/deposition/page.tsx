"use client";

import React from "react";

export default function Deposition() {
  return (
    <div
      style={{
        fontFamily: "'Baloo 2', sans-serif",
        background: "#FFE8F1",
        minHeight: "100vh",
        padding: "60px 20px",
      }}
    >
      {/* ---------------- Title Section ---------------- */}
      <header
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            color: "#FF6B9D",
            marginBottom: "10px",
            fontWeight: 800,
          }}
        >
          Deposition Research
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#666",
            fontWeight: 600,
          }}
        >
          Thin-film processes I've worked with — CVD, Sputter, and E-beam
        </p>
      </header>

      {/* ---------------- Summary Table ---------------- */}
      <section
        style={{
          maxWidth: "1000px",
          margin: "0 auto 60px auto",
          background: "white",
          padding: "25px",
          borderRadius: "20px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
        }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            color: "#FF6B9D",
            marginBottom: "20px",
            fontWeight: 700,
          }}
        >
          Summary of Experiments
        </h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <thead>
            <tr style={{ background: "#FFD6E5", color: "#444" }}>
              <th style={thStyle}>기간</th>
              <th style={thStyle}>장소</th>
              <th style={thStyle}>프로젝트명</th>
              <th style={thStyle}>핵심 기술</th>
              <th style={thStyle}>보기</th>
            </tr>
          </thead>

          <tbody>
            {/* Row 1 */}
            <tr>
              <td style={tdStyle}>2021</td>
              <td style={tdStyle}>신라대학교</td>
              <td style={tdStyle}>CMC 공정 연구</td>
              <td style={tdStyle}>CVD</td>
              <td style={tdStyle}>
                <a href="#dep1" style={anchorBtn}>
                  이동
                </a>
              </td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td style={tdStyle}>2023</td>
              <td style={tdStyle}>고려대학교</td>
              <td style={tdStyle}>박막 스퍼터링</td>
              <td style={tdStyle}>Sputter</td>
              <td style={tdStyle}>
                <a href="#dep2" style={anchorBtn}>
                  이동
                </a>
              </td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td style={tdStyle}>2024</td>
              <td style={tdStyle}>KICET</td>
              <td style={tdStyle}>Ag Dewetting</td>
              <td style={tdStyle}>E-beam</td>
              <td style={tdStyle}>
                <a href="#dep3" style={anchorBtn}>
                  이동
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ---------------- Detailed Sections ---------------- */}

      {/* Section 1 */}
      <SectionBlock
        id="dep1"
        title="1. CVD 기반 CMC 공정 연구"
        summary="Precursor–transport–reaction을 익힌 기초 박막 연구 경험"
        method="• Hot-wall CVD
• Precursor vaporization
• N₂/Ar carrier gas
• 450–600°C deposition"
        results="• Film density 변화 측정
• Grain size → decomposition rate 상관성 확인"
        interpretation="이 경험은 TFT, Passivation layer 공정 이해의 기반이 됨."
      />

      {/* Section 2 */}
      <SectionBlock
        id="dep2"
        title="2. Sputter 기반 박막 증착 연구"
        summary="DC/RF plasma 기반 박막 형성 및 도핑/형광 특성 분석"
        method="• Base pressure 10⁻⁶ torr
• Ar plasma (3–5 mtorr)
• 다양한 metal/oxide target 사용"
        results="• Plasma power → film density 변화
• Deposition rate map"
        interpretation="ITO·Ag·Al 박막 증착 이해에 직접적인 기반 제공."
      />

      {/* Section 3 */}
      <SectionBlock
        id="dep3"
        title="3. E-beam 기반 Ag Dewetting 박막 공정"
        summary="Ag-TiO₂-Ag multilayer + 열처리에 의한 morphology control"
        method="• E-beam deposition
• Ag 10–20 nm
• Annealing 200–500°C"
        results="• Continuous → nanoparticle island 변화
• Anti-fogging coating 형성"
        interpretation="삼성디스플레이 광학/열 관리 기술과 깊게 연결됨."
      />

      {/* ---------------- Skill Map ---------------- */}
      <section
        style={{
          maxWidth: "1000px",
          margin: "40px auto",
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
        }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            color: "#FF6B9D",
            fontWeight: 700,
            marginBottom: "20px",
          }}
        >
          Deposition → Display R&D Skill Map
        </h2>

        <ul style={{ lineHeight: "1.9", color: "#555", fontWeight: 600 }}>
          <li>CVD – TFT, Passivation, Encapsulation 박막과 연결</li>
          <li>Sputter – ITO/Ag/Al/Mo 증착 기반</li>
          <li>E-beam – 고순도 금속막 + optical layer 형성</li>
          <li>Dewetting – µLED·nanopatterning 활용 가능</li>
        </ul>
      </section>

      {/* ---------------- Navigation Buttons ---------------- */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        <a href="/research" style={navBtn}>
          ← Back to Research
        </a>
        <a href="/research/synthesis" style={navBtn}>
          Next: Synthesis →
        </a>
      </div>
    </div>
  );
}

/* ---------------- Styles ---------------- */

const thStyle: React.CSSProperties = {
  padding: "12px",
  fontWeight: 700,
  fontSize: "1rem",
  borderBottom: "2px solid #F7BFD3",
};

const tdStyle: React.CSSProperties = {
  padding: "12px",
  borderBottom: "1px solid #F4C9D8",
  textAlign: "center",
  fontWeight: 600,
  color: "#555",
};

const anchorBtn: React.CSSProperties = {
  background: "#FF6B9D",
  padding: "6px 14px",
  borderRadius: "12px",
  color: "white",
  fontSize: "0.85rem",
  textDecoration: "none",
};

/* Navigation */
const navBtn: React.CSSProperties = {
  background: "#FF6B9D",
  padding: "12px 22px",
  borderRadius: "20px",
  color: "white",
  fontWeight: 700,
  fontSize: "1rem",
  textDecoration: "none",
};

/* ---------------- Section Component ---------------- */
function SectionBlock({ id, title, summary, method, results, interpretation }: any) {
  return (
    <section
      id={id}
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        background: "white",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
      }}
    >
      <h2
        style={{
          fontSize: "1.7rem",
          color: "#FF6B9D",
          fontWeight: 800,
          marginBottom: "20px",
        }}
      >
        {title}
      </h2>

      <SectionItem title="Summary" content={summary} />
      <SectionItem title="Method" content={method} />
      <SectionItem title="Results" content={results} />
      <SectionItem title="Interpretation" content={interpretation} />

      {/* Image Placeholder */}
      <div
        style={{
          border: "2px dashed #FFB6C9",
          padding: "30px",
          borderRadius: "20px",
          textAlign: "center",
          color: "#888",
          fontSize: "1rem",
          marginTop: "20px",
        }}
      >
        (여기에 이후에 그래프 또는 사진을 넣으세요)
      </div>
    </section>
  );
}

function SectionItem({ title, content }: any) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3
        style={{
          fontSize: "1.2rem",
          fontWeight: 700,
          color: "#FF8CB3",
          marginBottom: "8px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          whiteSpace: "pre-line",
          lineHeight: "1.8",
          color: "#555",
          fontWeight: 600,
        }}
      >
        {content}
      </p>
    </div>
  );
}
