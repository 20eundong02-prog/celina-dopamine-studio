"use client";

import React from "react";

export default function OthersPage() {
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
      {/* ---------------- Header Section ---------------- */}
      <header style={{ textAlign: "center", marginBottom: "80px" }}>
        <h1
          style={{
            fontSize: "3rem",
            color: "#FF6B9D",
            fontWeight: 800,
            marginBottom: "15px",
            fontFamily: "'Montserrat', 'Pretendard', sans-serif",
            letterSpacing: "1px",
            textShadow: "2px 2px 0px #FFF",
          }}
        >
          Beyond the Lab
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
          <b>Leadership</b>, <b>Entrepreneurship</b>, and <b>AI/Data Skills</b>.<br />
          
        </p>
      </header>

      {/* ---------------- Quick Overview Section ---------------- */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto 60px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {/* Overview Card 1 */}
        <div
          onClick={() => document.getElementById('section-ai')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "20px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            textAlign: "center",
            border: "2px solid #FFF0F5",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 120, 212, 0.2)";
            e.currentTarget.style.borderColor = "#0078D4";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
            e.currentTarget.style.borderColor = "#FFF0F5";
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>🤖</div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#333", marginBottom: "8px" }}>
            AI & Data
          </h3>
          <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: "1.5", margin: 0 }}>
            Azure 자격증<br />데이터 분석 역량
          </p>
        </div>

        {/* Overview Card 2 */}
        <div
          onClick={() => document.getElementById('section-entrepreneur')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "20px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            textAlign: "center",
            border: "2px solid #FFF0F5",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(255, 107, 157, 0.2)";
            e.currentTarget.style.borderColor = "#FF6B9D";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
            e.currentTarget.style.borderColor = "#FFF0F5";
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>💡</div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#333", marginBottom: "8px" }}>
            Entrepreneurship
          </h3>
          <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: "1.5", margin: 0 }}>
            창업 경진대회<br />아이디어 사업화
          </p>
        </div>

        {/* Overview Card 3 */}
        <div
          onClick={() => document.getElementById('section-leadership')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "20px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            textAlign: "center",
            border: "2px solid #FFF0F5",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(255, 193, 7, 0.3)";
            e.currentTarget.style.borderColor = "#FFC107";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
            e.currentTarget.style.borderColor = "#FFF0F5";
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>🤝</div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#333", marginBottom: "8px" }}>
            Leadership
          </h3>
          <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: "1.5", margin: 0 }}>
            동아리 창설<br />팀 운영
          </p>
        </div>

        {/* Overview Card 4 */}
        <div
          onClick={() => document.getElementById('section-social')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "20px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            textAlign: "center",
            border: "2px solid #FFF0F5",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(76, 175, 80, 0.3)";
            e.currentTarget.style.borderColor = "#4CAF50";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
            e.currentTarget.style.borderColor = "#FFF0F5";
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>🌱</div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#333", marginBottom: "8px" }}>
            Social Impact
          </h3>
          <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: "1.5", margin: 0 }}>
            멘토링<br />교육 봉사
          </p>
        </div>
      </div>

      {/* ---------------- Main Content ---------------- */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "60px",
        }}
      >
        {/* === Section 1: Data & AI Competency (Highlight) === */}
        <section id="section-ai" style={sectionStyle}>
          <div style={headerRowStyle}>
            <span style={{ fontSize: "2.5rem" }}>🤖</span>
            <div>
              <h2 style={titleStyle}>Data Science & AI Competency</h2>
              <p style={subTitleStyle}>
                Smart Factory & Yield Management를 위한 데이터 역량 강화
              </p>
            </div>
          </div>

          <div style={gridStyle}>
             {/* Card 1: Letuin Edu */}
             <CertCard 
                title="AI 활용 디스플레이 공정 데이터 분석"
                issuer="고용노동부 / 렛유인에듀 (K-Digital Credit)"
                date="2025.10 - 2025.11"
                desc="디스플레이 공정 데이터를 활용한 수율 분석 및 시각화 실습 과정 수료."
                tags={["Display Process", "Data Analysis", "Visualization"]}
             />
             
             {/* Card 2: Naver Connect */}
             <CertCard 
                title="Boostcourse: CS & AI Basics"
                issuer="Naver Connect Foundation"
                date="2025.12"
                desc="컴퓨터 과학 기초 및 인공지능 개론 수료 (실명 인증 완료)."
                tags={["Computer Science", "AI Basics"]}
             />

             {/* Card 3: Azure Certifications */}
             <div style={{...cardStyle, borderLeft: "4px solid #0078D4"}}>
                <h3 style={cardTitleStyle}>Microsoft Azure Certifications</h3>
                <ul style={{ paddingLeft: "20px", lineHeight: "1.8", color: "#555", fontSize: "0.95rem" }}>
                    <li>
                        <b>Azure AI Fundamentals (AI-900)</b> <br/>
                        <span style={{color:"#888"}}>(2025.11.06 취득)</span>
                    </li>
                    <li>
                        <b>Azure Fundamentals (AZ-900)</b> <br/>
                        <span style={{color:"#888"}}>(2025.11.22 취득)</span>
                    </li>
                     <li>
                        <b>Azure Data Fundamentals (DP-900)</b> <br/>
                        <span style={{color:"#FF6B9D", fontWeight:700}}>(2025.12.23 취득 예정)</span>
                    </li>
                </ul>
             </div>

             {/* Card 4: Future Plan */}
             <div style={{...cardStyle, background: "#FFF0F6", border: "2px dashed #FF6B9D"}}>
                <h3 style={cardTitleStyle}>Upcoming Challenge 🚀</h3>
                <p style={{ margin: "10px 0", fontWeight: 700, color: "#333" }}>
                    데이터 기반 반도체 수율 관리 및 최적화
                </p>
                <p style={{ fontSize: "0.9rem", color: "#666" }}>
                    2026.01 수료 예정<br/>
                    공정 데이터 분석 심화 과정을 통해 현업 데이터 해결 능력 배양 목표.
                </p>
             </div>
          </div>
        </section>

        {/* === Section 2: Entrepreneurship & Creativity === */}
        <section id="section-entrepreneur" style={sectionStyle}>
          <div style={headerRowStyle}>
            <span style={{ fontSize: "2.5rem" }}>💡</span>
            <div>
              <h2 style={titleStyle}>Entrepreneurship & Creative Projects</h2>
              <p style={subTitleStyle}>
                아이디어 제안부터 제품화까지, 비즈니스 마인드와 실행력
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Project A: Perfume Business */}
            <ActivityRow 
                title="향수(Perfume) 브랜드 기획 및 창업 경진대회"
                role="Team Member & Ideation"
                period="2021.06 - 2021.12"
                awards={["교내 캡스톤 디자인 경진대회 우수상 (1위)", "교내 창업 경진대회 1위"]}
                desc={`• 학과 동아리 '신라부티끄' & '뿜뿜' 활동.\n• '듀얼 향수' 아이템 기획 및 시제품 제작.\n• 교외 사업가 심사위원들로부터 사업성 긍정 평가 획득.`}
            />

            {/* Project B: Soap Recycling */}
            <ActivityRow 
                title="친환경 업사이클링 창업 프로젝트"
                role="Team Member"
                period="2021.01"
                awards={["교내 창업 경진대회 최우수상"]}
                desc={`• '더와이파트너스' 주관 창업 캠프 참여.\n• 숙박업소에서 버려지는 비누를 수거 및 재가공하는 리사이클링 비즈니스 모델 제시.\n• 환경 보호와 수익성을 동시에 고려한 ESG 아이디어로 평가받음.`}
            />
          </div>
        </section>

        {/* === Section 3: Leadership & Research Communities === */}
        <section id="section-leadership" style={sectionStyle}>
          <div style={headerRowStyle}>
            <span style={{ fontSize: "2.5rem" }}>🤝</span>
            <div>
              <h2 style={titleStyle}>Leadership & Communities</h2>
              <p style={subTitleStyle}>
                조직을 이끄는 리더십과 지식 나눔
              </p>
            </div>
          </div>

           <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
             {/* Club: Toothless */}
            <ActivityRow 
                title="미생물 연구 동아리 '투슬리스(Toothless)' 창설 및 회장"
                role="Founder & Leader"
                period="2020.06 - 2021.06"
                awards={["한국미생물생명공학회(KMB) 포스터 발표"]}
                desc={`• 학부생 주도 연구 문화를 만들기 위해 동아리 직접 창설 및 교수님 섭외.\n• 팀원 간 실험 일정 조율 및 스터디 운영.\n• 1년간의 연구 결과를 정리하여 국내 학회 포스터 발표 성과 달성.`}
            />

             {/* Club: Tiger Meow */}
            <ActivityRow 
                title="배터리 연구 동아리 'Tiger Meow' 창설"
                role="Founder & Leader"
                period="2022.10 - 2023.06"
                desc={`• 전기화학실험 수업 내용을 심화 연구하기 위해 동아리 창설.\n• 리튬 이온 배터리 NCM 합성 시 열처리 온도 조건 최적화 연구 진행.`}
            />

             {/* Mentoring */}
            <ActivityRow 
                title="한국장학재단(KOSAF) 사회리더 멘토링"
                role="Mentee"
                period="2021.04 - 2021.11"
                desc={`• 부산/서울 지역 대학 연합 멘토링 참여.\n• 창업 및 리더십 교육 이수, 타 전공생들과의 네트워킹을 통해 시야 확장.`}
            />
          </div>
        </section>

        {/* === Section 4: Social Impact === */}
        <section id="section-social" style={sectionStyle}>
          <div style={headerRowStyle}>
            <span style={{ fontSize: "2.5rem" }}>🌱</span>
            <div>
              <h2 style={titleStyle}>Social Contribution</h2>
              <p style={subTitleStyle}>
                교육과 멘토링을 통한 사회 공헌
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Mentoring 1 */}
            <ActivityRow 
                title="다문화 가정 멘토링"
                role="Mentor"
                period="2021.07 - 2021.11"
                awards={["우수멘토표창 수상"]}
                desc={`• 동아대학교 한국어교육원 주관 프로그램 참여.\n• 결혼 이주 여성 및 자녀 대상 교육 멘토링 (총 53시간 봉사).\n• 다문화 가정 아이들의 학습 지도 및 정서적 지원.`}
            />

            {/* Teaching 2 */}
            <ActivityRow 
                title="신라 윈터스쿨 조교 활동"
                role="Teaching Assistant"
                period="2022.01"
                desc={`• 고등학생 대상 나노카본 소재 실험 프로그램 운영.\n• '자율주행시대에 요구되는 전자파 차폐용 나노카본소재' 주제.\n• 부산 지역 고등학생들의 실험 참여 독려 및 지도.`}
            />
          </div>
        </section>

        {/* === Section 5: Engineering Tools === */}
        <section style={sectionStyle}>
             <div style={headerRowStyle}>
            <span style={{ fontSize: "2.5rem" }}>🛠️</span>
            <div>
              <h2 style={titleStyle}>Engineering & Design Tools</h2>
              <p style={subTitleStyle}>
                다양한 툴 활용 능력 (Multi-disciplinary Skills)
              </p>
            </div>
          </div>
          
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
             <ToolBadge name="AutoCAD (ATC 1급)" desc="도면 설계 및 해독 능력" />
             <ToolBadge name="Arduino" desc="기초 회로 구성 및 센서 제어" />
             <ToolBadge name="3D Printing" desc="시제품 제작 및 모델링 교육 이수" />
             <ToolBadge name="Microsoft Office" desc="문서 작성 및 데이터 정리 (MOS)" />
          </div>
        </section>

      </div>

      {/* ---------------- Footer Navigation ---------------- */}
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <a href="/research/programming" style={secondaryBtnStyle}>
            ← Prev: Programming
          </a>
          <a href="/research" style={primaryBtnStyle}>
             Back to Research
          </a>
        </div>
      </div>
    </div>
  );
}

/* ================= COMPONENT & STYLES ================= */

function CertCard({ title, issuer, date, desc, tags }: any) {
    return (
        <div style={cardStyle}>
            <div style={{ marginBottom: "10px" }}>
                <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#AAA", textTransform: "uppercase" }}>{date}</span>
            </div>
            <h3 style={cardTitleStyle}>{title}</h3>
            <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "5px", fontWeight: 600 }}>{issuer}</p>
            <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: "1.6", marginBottom: "15px" }}>{desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {tags && tags.map((t: string, i: number) => (
                    <span key={i} style={tagStyle}>#{t}</span>
                ))}
            </div>
        </div>
    )
}

function ActivityRow({ title, role, period, awards, desc }: any) {
    return (
        <div style={rowStyle}>
            <div style={{ flex: "0 0 150px", borderRight: "2px solid #FFF0F5", paddingRight: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span style={{ fontWeight: 700, color: "#FF6B9D" }}>{period}</span>
                <span style={{ fontSize: "0.9rem", color: "#888", marginTop: "5px" }}>{role}</span>
            </div>
            <div style={{ flex: 1, paddingLeft: "20px" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#333", marginBottom: "10px" }}>
                    {title}
                </h3>
                {awards && awards.length > 0 && (
                    <div style={{ marginBottom: "10px" }}>
                        {awards.map((award: string, i: number) => (
                            <span key={i} style={awardBadgeStyle}>🏆 {award}</span>
                        ))}
                    </div>
                )}
                <p style={{ whiteSpace: "pre-line", lineHeight: "1.7", color: "#555", fontSize: "0.95rem" }}>
                    {desc}
                </p>
            </div>
        </div>
    )
}

function ToolBadge({ name, desc }: any) {
    return (
        <div style={{ 
            background: "white", 
            border: "1px solid #FFD1E0", 
            padding: "15px 20px", 
            borderRadius: "15px", 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center",
            gap: "5px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.03)"
        }}>
            <strong style={{ color: "#FF6B9D", fontSize: "1.1rem" }}>{name}</strong>
            <span style={{ fontSize: "0.85rem", color: "#666" }}>{desc}</span>
        </div>
    )
}

/* Styles */
const sectionStyle: React.CSSProperties = {
  background: "white",
  borderRadius: "25px",
  padding: "40px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
  border: "1px solid #FFF0F5",
};

const headerRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  marginBottom: "30px",
  borderBottom: "2px solid #FFF0F5",
  paddingBottom: "20px",
};

const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px"
};

const cardStyle: React.CSSProperties = {
    background: "#FAFAFA",
    padding: "20px",
    borderRadius: "15px",
    borderLeft: "4px solid #FF6B9D",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
};

const rowStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap", // 모바일 대응
    background: "#FAFAFA",
    padding: "20px",
    borderRadius: "15px",
    gap: "10px"
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

const cardTitleStyle: React.CSSProperties = {
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#333",
    marginBottom: "8px"
};

const tagStyle: React.CSSProperties = {
    fontSize: "0.75rem",
    background: "#E3E3E3",
    color: "#555",
    padding: "3px 8px",
    borderRadius: "5px",
    fontWeight: 600
};

const awardBadgeStyle: React.CSSProperties = {
    display: "inline-block",
    background: "#FFF0B3", // 금색 느낌
    color: "#8A6D3B",
    padding: "4px 10px",
    borderRadius: "8px",
    fontSize: "0.85rem",
    fontWeight: 700,
    marginRight: "8px",
    marginBottom: "5px"
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
