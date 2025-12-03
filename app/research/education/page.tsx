"use client";

import React from "react";

export default function Others() {
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
          Others
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            color: "#666",
            fontWeight: 600,
          }}
        >
          Clubs · Certificates · Courses · Extra Experiences
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
          Summary
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
              <th style={thStyle}>항목</th>
              <th style={thStyle}>내용</th>
              <th style={thStyle}>보기</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={tdStyle}>동아리</td>
              <td style={tdStyle}>투슬리스 / 호앵클럽(배터리 연구)</td>
              <td style={tdStyle}>
                <a href="#club" style={anchorBtn}>이동</a>
              </td>
            </tr>

            <tr>
              <td style={tdStyle}>자격증</td>
              <td style={tdStyle}>AI·데이터·클라우드 관련 자격 취득</td>
              <td style={tdStyle}>
                <a href="#cert" style={anchorBtn}>이동</a>
              </td>
            </tr>

            <tr>
              <td style={tdStyle}>강의 이수</td>
              <td style={tdStyle}>디스플레이·반도체·AI·공정 관련 교육</td>
              <td style={tdStyle}>
                <a href="#course" style={anchorBtn}>이동</a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ---------------- Detailed Sections ---------------- */}

      {/* Club Section */}
      <SectionBlock
        id="club"
        title="1. Clubs & Research Groups"
        summary={`학부 및 석사 과정 동안 참여한 연구 동아리 활동들`}
        method={`• 투슬리스: 재료 실험 입문, 연구 스터디  
• 호앵클럽: 배터리 소재 스터디 & 실험 참여  
• 팀 기반 실험, 안전 교육, 세미나 참여`}
        results={`• 초기 연구역량 쌓기  
• 재료 실험 전반 흐름 이해  
• 팀 프로젝트 진행 경험 축적`}
        interpretation="연구자의 기본기를 형성한 기초 경험으로, 실험·협업 능력 기반이 됨."
      />

      {/* Certificate Section */}
      <SectionBlock
        id="cert"
        title="2. Certificates"
        summary={`취업 준비 과정에서 취득한 기술 기반 자격증`}
        method={`• Microsoft AI-900  
• Microsoft AZ-900  
• 기타 데이터 분석·AI·디지털 교육 이수`}
        results={`• 클라우드·AI 개념 정립  
• R&D 자동화에 필요한 데이터 이해도 향상`}
        interpretation="재료 연구 + 데이터 활용 능력을 동시에 갖춘 인재임을 증명."
      />

      {/* Course Section */}
      <SectionBlock
        id="course"
        title="3. Completed Courses"
        summary={`반도체·디스플레이·AI·공정 최적화 관련 온라인/오프라인 강의`}
        method={`• 코멘토: 반도체 수율·공정 강의  
• NAVER Connect: 데이터 처리 강의  
• Display/반도체 관련 MOOC 수강  
• TRPL 분석·광학 기초 등 R&D 역량 강화 학습`}
        results={`• 공정·소자 이해도↑  
• 연구 분석과 데이터 기반 사고력 강화`}
        interpretation="디스플레이 연구직을 목표로 지속적 학습해온 발자취."
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
        <a href="/life" style={navBtn}>
          Life →
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
        (여기에 관련 사진 or 스캔 자료를 넣으세요)
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
