"use client";

import React from "react";

export default function Synthesis() {
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
            fontFamily: "'Fredoka One', cursive", // 귀여운 제목 폰트
          }}
        >
          Synthesis Research
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            color: "#666",
            fontWeight: 600,
          }}
        >
          My early journey in phosphor, battery, and solid-state synthesis
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
              <td style={tdStyle}>2018</td>
              <td style={tdStyle}>신라대학교</td>
              <td style={tdStyle}>기초 발광 형광체 합성</td>
              <td style={tdStyle}>Solid-state + Eu/Tb doping</td>
              <td style={tdStyle}>
                <a href="#syn1" style={anchorBtn}>이동</a>
              </td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td style={tdStyle}>2020</td>
              <td style={tdStyle}>신라대학교</td>
              <td style={tdStyle}>고상법 발광 연구</td>
              <td style={tdStyle}>Solid-state reaction</td>
              <td style={tdStyle}>
                <a href="#syn2" style={anchorBtn}>이동</a>
              </td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td style={tdStyle}>2021</td>
              <td style={tdStyle}>신라대학교</td>
              <td style={tdStyle}>Battery 재료 합성</td>
              <td style={tdStyle}>Lithium-based synthesis</td>
              <td style={anchorBtn}>
                <a href="#syn3" style={anchorBtn}>이동</a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ---------------- Detailed Sections ---------------- */}

      {/* Section 1 */}
      <SectionBlock
        id="syn1"
        title="1. Basic Phosphor Synthesis (Freshman)"
        summary="학부 1학년 연구실 참여 — Eu/Tb 도핑 기반 형광체 기초 합성 경험"
        method="• Solid-state mixing
• Mortar grinding
• 1200°C furnace firing"
        results="• Eu/Tb 농도 변화에 따른 발광 강도 확인"
        interpretation="초기 합성 감각을 익힌 경험으로, 이후 페로브스카이트/형광체 연구의 기반."
      />

      {/* Section 2 */}
      <SectionBlock
        id="syn2"
        title="2. Solid-State Phosphor Fabrication"
        summary="발광 파장 조절 및 결정상 변화 분석 중심 연구"
        method="• Carbonate / oxide precursor 사용
• Multi-step annealing
• XRD + PL 특성 분석"
        results="• 결정상 변화 → 발광 파장 shift 확인"
        interpretation="세라믹 발광체 연구 방향성을 확립한 핵심 경험."
      />

      {/* Section 3 */}
      <SectionBlock
        id="syn3"
        title="3. Battery Material Synthesis"
        summary="기초적인 전극재 합성 및 구조 분석 경험"
        method="• Li-based precursor mixing
• Tube furnace annealing
• SEM morphology 분석"
        results="• 입자 크기 변화 → 전기화학적 성능 영향 확인"
        interpretation="추후 열관리·박막 연구에서도 미세구조 분석 감각을 형성."
      />

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
        <a href="/research/deposition" style={navBtn}>
          이전: Deposition →
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

