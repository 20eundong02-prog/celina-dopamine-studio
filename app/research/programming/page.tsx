"use client";

import React from "react";

export default function Programming() {
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
          Programming & Automation
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            color: "#666",
            fontWeight: 600,
          }}
        >
          Data Processing · Optical Simulation · Lab Automation Code
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
          Summary of Projects
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
              <th style={thStyle}>분야</th>
              <th style={thStyle}>프로젝트명</th>
              <th style={thStyle}>기술 스택</th>
              <th style={thStyle}>보기</th>
            </tr>
          </thead>

          <tbody>
            {/* Row 1 */}
            <tr>
              <td style={tdStyle}>2024</td>
              <td style={tdStyle}>데이터 처리</td>
              <td style={tdStyle}>PL/TRPL 자동 분석 코드</td>
              <td style={tdStyle}>Python, NumPy, SciPy</td>
              <td style={tdStyle}>
                <a href="#pg1" style={anchorBtn}>이동</a>
              </td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td style={tdStyle}>2024</td>
              <td style={tdStyle}>Optical Modeling</td>
              <td style={tdStyle}>박막 구조 Optical Simulation</td>
              <td style={tdStyle}>Python, PyTMM, Colab</td>
              <td style={tdStyle}>
                <a href="#pg2" style={anchorBtn}>이동</a>
              </td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td style={tdStyle}>2023–2024</td>
              <td style={tdStyle}>Lab Automation</td>
              <td style={tdStyle}>CSV 전처리 자동화</td>
              <td style={tdStyle}>Python, Pandas</td>
              <td style={tdStyle}>
                <a href="#pg3" style={anchorBtn}>이동</a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ---------------- Detailed Sections ---------------- */}

      {/* Section 1 */}
      <SectionBlock
        id="pg1"
        title="1. PL/TRPL Automatic Data Processing"
        summary={`형광체 · 페로브스카이트 발광 분석을 위해 스펙트럼 데이터를 자동 처리하는 코드 작성`}
        method={`• CSV 병합 및 노이즈 제거 자동화
• Exponential fitting 기반 lifetime 계산
• Peak detection 알고리즘 적용
• Google Colab에서 재현 가능한 파이프라인 구성`}
        results={`• TRPL fitting 속도 70% 이상 단축
• 반복 실험 데이터 처리 시간 → ‘10분 → 30초’ 감소
• 보고서/논문용 그래프 자동 생성 기능 구현`}
        interpretation="연구 생산성을 크게 높인 자동화 코드로, 재료 R&D의 반복 실험 처리에 강점."
      />

      {/* Section 2 */}
      <SectionBlock
        id="pg2"
        title="2. Optical Thin-Film Simulation"
        summary={`Ag-TiO₂-Ag multilayer의 반사/흡수/투과를 계산해 실험 결과와 비교하는 시뮬레이션 코드 구현`}
        method={`• Transfer Matrix Method (TMM)
• n,k optical constant 불러오기
• Wavelength-dependent absorbance 계산
• 실험–시뮬레이션 cross-validation`}
        results={`• Dewetting morphology에 따른 흡수 변화 예측 가능
• 실험 전 optical trend를 미리 예측해 공정 최적화에 기여`}
        interpretation="디스플레이의 광학/박막 설계(ITO, Ag, Low-e 등)와 직접적으로 연결되는 기술."
      />

      {/* Section 3 */}
      <SectionBlock
        id="pg3"
        title="3. Lab Data Preprocessing Automation"
        summary={`다양한 장비(FT-IR, UV-Vis, PL 등)에서 나온 데이터를 자동 정리하는 Python 스크립트 개발`}
        method={`• 장비마다 다른 CSV 형식을 통합 전처리
• Baseline correction 자동 적용
• Batch processing 기능 구현
• 폴더 단위 일괄 처리`}
        results={`• 하루 수십 개 실험 데이터를 자동 정리
• 사람 실수 최소화 + 데이터 신뢰도 강화`}
        interpretation="R&D 실험실에서 매우 중요한 ‘데이터 관리 능력’을 입증."
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
          Programming → Display R&D Skill Map
        </h2>

        <ul style={{ lineHeight: "1.9", color: "#555", fontWeight: 600 }}>
          <li>Optical simulation → 박막 구조 설계 능력 어필 가능</li>
          <li>데이터 전처리 자동화 → 대규모 실험 처리 효율 증가</li>
          <li>Python 기반 R&D code → 실제 연구에 바로 적용 가능</li>
          <li>반복 실험 / 스펙트럼 fitting 능력 → 발광 소재·열관리 연구에 필수</li>
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
        <a href="/research/others" style={navBtn}>
          Next: Others →
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
        (여기에 추가 사진/코드 스니펫을 넣으세요)
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
