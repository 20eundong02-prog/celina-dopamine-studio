"use client";

import React from "react";

export default function ThermalManagement() {
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
            fontFamily: "'Fredoka One', cursive",
          }}
        >
          Thermal Management Research
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            color: "#666",
            fontWeight: 600,
          }}
        >
          Ag Dewetting · APTM Multilayer · Thermal / Radiative Control
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
              <td style={tdStyle}>2024</td>
              <td style={tdStyle}>KICET</td>
              <td style={tdStyle}>APTM 열관리 소재 개발</td>
              <td style={tdStyle}>Ag Dewetting, APTM, IR emissivity</td>
              <td style={tdStyle}>
                <a href="#tm1" style={anchorBtn}>이동</a>
              </td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td style={tdStyle}>2024</td>
              <td style={tdStyle}>KICET</td>
              <td style={tdStyle}>Thermal Switching (APPH ↔ APRC)</td>
              <td style={tdStyle}>Morphology Control</td>
              <td style={tdStyle}>
                <a href="#tm2" style={anchorBtn}>이동</a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ---------------- Detailed Sections ---------------- */}

      {/* Section 1 */}
      <SectionBlock
        id="tm1"
        title="1. Ag-TiO₂-Ag (APTM) 기반 열관리 소재 연구"
        summary="E-beam 기반 Ag 박막에 열처리를 가해 morphology를 제어하여 발열/방열 기능 조절"
        method={`• E-beam 증착 (Ag–TiO₂–Ag 3-layer)
• Ag 10–20 nm / TiO₂ 30–80 nm
• 200–500°C thermal annealing
• FT-IR / UV-Vis / SEM morphology 분석`}
        results={`• Ag 연속막 → island 구조로 전환
• Optical resonance 변화 → IR emissivity 증가
• Visible transparency 변화 최소화`}
        interpretation="광학 + 열관리 이중 기능을 가진 소재 플랫폼으로 발전 가능."
      />

      {/* Section 2 */}
      <SectionBlock
        id="tm2"
        title="2. Thermal Switching (APPH ↔ APRC)"
        summary="하나의 APTM 구조로 photothermal heating ↔ radiative cooling 모드 전환"
        method={`• 낮은 온도 annealing → High absorption (APPH)
• 높은 온도 annealing → High emissivity (APRC)
• Morphology–optical–thermal 상관성 분석`}
        results={`• APPH: 50–70°C까지 빠른 온도 상승
• APRC: IR 영역에서 상대적 방사능 증가
• Outdoor test에서 ΔT modulation 확인`}
        interpretation="단일 구조에서 상황에 따라 열차단/방열 전환 가능 — 차세대 디스플레이/웨어러블에 적용성 큼."
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
          Thermal Management → Display R&D Skill Map
        </h2>

        <ul style={{ lineHeight: "1.9", color: "#555", fontWeight: 600 }}>
          <li>IR Emissivity 조절 → 디스플레이 발열 문제 해결</li>
          <li>Nanoparticle morphology control → µLED / 나노패터닝 기반 가능</li>
          <li>APTM 구조 → Encapsulation·Optical filter 설계와 연관</li>
          <li>Photothermal ↔ Radiative switching → 차세대 열관리 기술 요소</li>
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
        <a href="/research/programming" style={navBtn}>
          Next: Programming →
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
        (여기에 추가 사진/그래프를 넣으세요)
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
