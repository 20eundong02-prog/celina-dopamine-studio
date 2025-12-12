"use client";

import React from "react";

export default function ProgrammingPage() {
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
          Programming & Simulation
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
          <b>Accelerating Research</b> through Code.<br />
          
        </p>
      </header>

      {/* ---------------- Timeline Section ---------------- */}
      <div className="timeline-section" style={{ maxWidth: "900px", margin: "0 auto 60px" }}>
        <div style={{ position: "relative", padding: "0 20px" }}>
          {/* Timeline Line */}
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
          
          {/* Timeline Points */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* 2024-2025 Single Node */}
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

      {/* ---------------- Quick Overview Section ---------------- */}
      <div
        className="overview-grid"
        style={{
          maxWidth: "1100px",
          margin: "0 auto 60px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {/* Overview Card 1 */}
        <div
          className="overview-card"
          onClick={() => document.getElementById('project-puf')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
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
          <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>🔐</div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#333", marginBottom: "8px" }}>
            PUF Security
          </h3>
          <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: "1.5", margin: 0 }}>
            NIST 표준 기반<br />엔트로피 검증
          </p>
        </div>

        {/* Overview Card 2 */}
        <div
          className="overview-card"
          onClick={() => document.getElementById('project-rsoft')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
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
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(149, 225, 211, 0.3)";
            e.currentTarget.style.borderColor = "#95E1D3";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
            e.currentTarget.style.borderColor = "#FFF0F5";
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>📊</div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#333", marginBottom: "8px" }}>
            Simulation Automation
          </h3>
          <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: "1.5", margin: 0 }}>
            50+ 파일 자동 병합<br />데이터 처리 효율화
          </p>
        </div>

        {/* Overview Card 3 */}
        <div
          className="overview-card"
          onClick={() => document.getElementById('project-cv')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
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
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(243, 129, 129, 0.3)";
            e.currentTarget.style.borderColor = "#F38181";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
            e.currentTarget.style.borderColor = "#FFF0F5";
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>👁️</div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#333", marginBottom: "8px" }}>
            Image Analysis
          </h3>
          <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: "1.5", margin: 0 }}>
            OpenCV 기반<br />입자 자동 측정
          </p>
        </div>
      </div>

      {/* ---------------- Main Content: Coding Projects ---------------- */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "60px",
        }}
      >
        {/* === Project 1: PUF Security Test === */}
        <section id="project-puf" style={projectSectionStyle} className="project-section">
          <div style={projectHeaderStyle} className="project-header">
            <span style={{ fontSize: "2.5rem" }}>🔐</span>
            <div>
              <h2 style={titleStyle} className="section-title">PUF Randomness Assessment (NIST)</h2>
              <p style={subTitleStyle} className="section-subtitle">
                2024 | Python, Google Colab | Security Analysis of Materials
              </p>
            </div>
          </div>

          <div style={contentBoxStyle} className="content-box">
            <div style={{ flex: 1 }}>
              <h3 style={headingStyle} className="content-heading">Objective</h3>
              <p style={paragraphStyle} className="content-paragraph">
                하드웨어 보안 기술인 <b>PUF(Physical Unclonable Function)</b>의 성능
                검증을 위해, 소재 미세구조 이미지(SEM)가 가지는 고유한 난수성(Entropy)을
                정량적으로 평가.
              </p>

              <h3 style={headingStyle} className="content-heading">Logic & Trouble Shooting</h3>
              <ul style={listStyle} className="content-list">
                <li>
                  <strong style={{ color: "#FF6B9D" }}>Issue:</strong>{" "}
                  기존 NIST SP 800-22 도구 사용 시 Binary Sequence 읽기 과정에서{" "}
                  <b>Underflow Error</b> 발생 확인.
                </li>

                <li>
                  <strong style={{ color: "#FF6B9D" }}>Solution:</strong>{" "}
                  최신 표준인 <b>NIST SP 800-90B</b> (Entropy Assessment)로 전환하여
                  Python(Scipy)으로 직접 구현.
                </li>

                <li>
                  <strong style={{ color: "#FF6B9D" }}>Key Algorithms:</strong>{" "}
                  Min-Entropy, Chi-Square Test, Uniqueness & Reproducibility 검증 코드 작성.
                </li>
              </ul>

              <h3 style={{...headingStyle, marginTop: "30px"}} className="content-heading">Impact</h3>
              <div
                className="impact-box"
                style={{
                  background: "#FFF8FA",
                  padding: "15px 20px",
                  borderRadius: "10px",
                  borderLeft: "4px solid #FF6B9D",
                }}
              >
                <p style={{ ...paragraphStyle, marginBottom: "0", fontSize: "0.95rem" }}>
                  ✓ 기존 도구(SP 800-22) 에러 해결 → 최신 표준(SP 800-90B) 도입<br />
                  ✓ 10회 반복 테스트로 재현성 검증 완료<br />
                  ✓ 재료 고유 패턴 기반 보안 키 생성 가능성 입증
                </p>
              </div>
            </div>

            <div style={{...codePlaceholderStyle, minHeight: "280px", flex: "0 0 380px"}} className="code-block">
              <pre style={{ fontSize: "0.8rem", color: "#4ECDC4", textAlign: "left", lineHeight: "1.5" }}>
{`# NIST SP 800-90B Implementation
from PIL import Image
import numpy as np
from collections import Counter
import math

def min_entropy_test(image_path):
    image = Image.open(image_path).convert('L')
    data = np.array(image).flatten()
    
    # Calculate Min-Entropy
    p_max = max(Counter(data).values()) / len(data)
    min_entropy = -math.log2(p_max)
    
    return min_entropy

def chi_square_test(data):
    observed = Counter(data)
    expected = len(data) / len(observed)
    chi_sq = sum((obs - expected)**2 / expected 
                 for obs in observed.values())
    return chi_sq

# Reproducibility Test (10 iterations)
for i in range(10):
    entropy = min_entropy_test(image_path)
    print(f"Iteration {i+1}: {entropy:.4f}")`}
              </pre>
              <span
                style={{
                  fontSize: "0.85rem",
                  color: "#4ECDC4",
                  fontWeight: 700,
                  marginTop: "10px",
                }}
              >
                Python • NIST SP 800-90B
              </span>
            </div>
          </div>
        </section>

        {/* === Project 2: RSoft & Data Automation === */}
        <section id="project-rsoft" style={projectSectionStyle} className="project-section">
          <div style={projectHeaderStyle} className="project-header">
            <span style={{ fontSize: "2.5rem" }}>📊</span>
            <div>
              <h2 style={titleStyle} className="section-title">Optical Simulation & Data Automation</h2>
              <p style={subTitleStyle} className="section-subtitle">2024 - 2025 | RSoft (DiffractMOD), Python (Pandas)</p>
            </div>
          </div>

          <div style={contentBoxStyle} className="content-box">
            <div style={{ flex: 1 }}>
              <h3 style={headingStyle} className="content-heading">Objective</h3>
              <p style={paragraphStyle} className="content-paragraph">
                Smart Glass 및 Radiative Cooling 소재의 광학적 거동을 예측하기 위해 RSoft
                시뮬레이션을 수행하고, 수십 개의 결과 데이터(DAT 파일)를 효율적으로 처리.
              </p>

              <h3 style={headingStyle} className="content-heading">Key Logic</h3>
              <ul style={listStyle} className="content-list">
                <li>
                  <strong style={{ color: "#FF6B9D" }}>RSoft Simulation:</strong>{" "}
                  물질의 굴절률(n), 흡수계수(k)를 입력하여 다층 박막 구조에서의 빛의
                  행동(반사/투과) 예측.
                </li>

                <li>
                  <strong style={{ color: "#FF6B9D" }}>Automation Pipeline:</strong>{" "}
                  50개 이상의 시뮬레이션 결과 파일(.dat)에서 정규표현식(RegEx)으로
                  파라미터를 추출하고, <b>Pandas</b>를 이용해 하나의 Excel 파일로 병합하는
                  자동화 스크립트 개발.
                </li>
              </ul>

              <h3 style={{...headingStyle, marginTop: "30px"}} className="content-heading">Impact</h3>
              <div
                className="impact-box"
                style={{
                  background: "#F0FFFF",
                  padding: "15px 20px",
                  borderRadius: "10px",
                  borderLeft: "4px solid #95E1D3",
                }}
              >
                <p style={{ ...paragraphStyle, marginBottom: "0", fontSize: "0.95rem" }}>
                  ✓ 50+ 시뮬레이션 파일 수작업 처리 → 완전 자동화<br />
                  ✓ 데이터 병합 시간 대폭 절약 (수 시간 → 수 분)<br />
                  ✓ 광학 소재 연구 효율성 향상
                </p>
              </div>
            </div>

            <div style={{...codePlaceholderStyle, minHeight: "280px", flex: "0 0 380px"}} className="code-block">
              <pre style={{ fontSize: "0.8rem", color: "#95E1D3", textAlign: "left", lineHeight: "1.5" }}>
{`# RSoft Data Automation Pipeline
import os
import re
import pandas as pd

def extract_number(filename):
    """Extract parameter from filename"""
    match = re.search(r'(\\d+)_m6_absorption\\.dat', 
                      filename)
    return int(match.group(1)) if match else -1

# Load and merge 50+ simulation files
path = '/simulation_results'
files = [f for f in os.listdir(path) 
         if f.endswith('.dat')]
files.sort(key=extract_number)

all_data = pd.DataFrame()

for file in files:
    data = pd.read_csv(f'{path}/{file}', 
                       skiprows=2, header=None)
    num = extract_number(file)
    all_data[f'Param_{num}'] = data.iloc[:, 0]

# Export to Excel
all_data.to_excel('merged_results.xlsx')`}
              </pre>
              <span
                style={{
                  fontSize: "0.85rem",
                  color: "#95E1D3",
                  fontWeight: 700,
                  marginTop: "10px",
                }}
              >
                Python • Pandas • RegEx
              </span>
            </div>
          </div>
        </section>

        {/* === Project 3: Computer Vision (Image Analysis) === */}
        <section id="project-cv" style={projectSectionStyle} className="project-section">
          <div style={projectHeaderStyle} className="project-header">
            <span style={{ fontSize: "2.5rem" }}>👁️</span>
            <div>
              <h2 style={titleStyle} className="section-title">SEM Image Analysis (Computer Vision)</h2>
              <p style={subTitleStyle} className="section-subtitle">2024 | Python (OpenCV), Matplotlib</p>
            </div>
          </div>

          <div style={contentBoxStyle} className="content-box">
            <div style={{ flex: 1 }}>
              <h3 style={headingStyle} className="content-heading">Objective</h3>
              <p style={paragraphStyle} className="content-paragraph">
                수작업으로 측정하기 힘든 수천 개의 미세 입자(Cs₄PbBr₆ 등) 크기 분포를
                OpenCV를 활용하여 자동으로 측정하고 통계 데이터 확보.
              </p>

              <h3 style={headingStyle} className="content-heading">Key Logic</h3>
              <ul style={listStyle} className="content-list">
                <li>
                  <strong style={{ color: "#FF6B9D" }}>Preprocessing:</strong>{" "}
                  SEM 이미지의 스케일바(Scale-bar) 픽셀 비율을 계산하여 실제 물리적 크기(µm)
                  환산 기준 마련.
                </li>

                <li>
                  <strong style={{ color: "#FF6B9D" }}>Contouring:</strong>{" "}
                  이미지 이진화(Thresholding) 및 <b>Morphological Operation</b>으로 입자
                  경계선(Contour) 검출.
                </li>
              </ul>

              <h3 style={{...headingStyle, marginTop: "30px"}} className="content-heading">Impact</h3>
              <div
                className="impact-box"
                style={{
                  background: "#FFF5F5",
                  padding: "15px 20px",
                  borderRadius: "10px",
                  borderLeft: "4px solid #F38181",
                }}
              >
                <p style={{ ...paragraphStyle, marginBottom: "0", fontSize: "0.95rem" }}>
                  ✓ 수천 개 입자 수작업 측정 불가능 → 자동 정량 분석<br />
                  ✓ Cs₄PbBr₆ 입자 평균 크기 온도별 비교 데이터 확보<br />
                  ✓ 통계 기반 연구 신뢰도 향상
                </p>
              </div>
            </div>

            <div style={{...codePlaceholderStyle, minHeight: "280px", flex: "0 0 380px"}} className="code-block">
              <pre style={{ fontSize: "0.8rem", color: "#F38181", textAlign: "left", lineHeight: "1.5" }}>
{`# SEM Image Particle Analysis
import cv2
import numpy as np
from matplotlib import pyplot as plt

# Load and preprocess SEM image
image = cv2.imread('sem_image.tif', 0)
_, thresh = cv2.threshold(image, 127, 255, 
                          cv2.THRESH_BINARY)

# Morphological operations
kernel = np.ones((3,3), np.uint8)
opening = cv2.morphologyEx(thresh, 
                           cv2.MORPH_OPEN, kernel)

# Contour detection
contours, _ = cv2.findContours(opening, 
                               cv2.RETR_EXTERNAL,
                               cv2.CHAIN_APPROX_SIMPLE)

particle_sizes = []
for cnt in contours:
    if cv2.contourArea(cnt) > min_area:
        # Fit ellipse and calculate dimensions
        ellipse = cv2.fitEllipse(cnt)
        major_axis, minor_axis = ellipse[1]
        particle_sizes.append(major_axis)

print(f"Analyzed {len(particle_sizes)} particles")
plt.hist(particle_sizes, bins=50)`}
              </pre>
              <span
                style={{
                  fontSize: "0.85rem",
                  color: "#F38181",
                  fontWeight: 700,
                  marginTop: "10px",
                }}
              >
                Python • OpenCV • Matplotlib
              </span>
            </div>
          </div>
        </section>

        {/* === Project 4: Web Portfolio & Simulation (Side Project) === */}
        <section
          className="side-projects-section"
          style={{
            background: "white",
            borderRadius: "25px",
            padding: "40px",
            border: "2px dashed #FFB6C9",
            position: "relative",
          }}
        >
          {/* 라벨 (Side Project) */}
          <div
            className="side-project-badge"
            style={{
              position: "absolute",
              top: "-15px",
              left: "40px",
              background: "#FF6B9D",
              color: "white",
              padding: "5px 15px",
              borderRadius: "20px",
              fontWeight: 700,
              fontSize: "0.9rem",
            }}
          >
            🚀 Side Projects & Development
          </div>

          <div style={{ marginTop: "10px" }}>
            {/* 4-1. Web Portfolio */}
            <div style={{ marginBottom: "40px" }}>
              <div
                className="side-project-header"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "15px",
                }}
              >
                <span style={{ fontSize: "1.8rem" }}>🌐</span>
                <h2 className="side-project-title" style={{ ...titleStyle, fontSize: "1.5rem", margin: 0 }}>
                  Celina's Dopamine Studio (celinastudio.com)
                </h2>
              </div>

              <p style={paragraphStyle} className="content-paragraph">
                연구 성과를 정적인 문서가 아닌 <b>인터랙티브 웹(React)</b>으로 구현하여 데이터
                가독성과 접근성을 높임.<br />
                단순한 코딩이 아닌, <b>"연구 데이터 시각화 및 정보 전달(Communication)"</b> 역량을
                입증.
              </p>

              <div className="skill-badges" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <SkillBadge>React</SkillBadge>
                <SkillBadge>Next.js</SkillBadge>
                <SkillBadge>TypeScript</SkillBadge>
                <SkillBadge>Responsive UI</SkillBadge>
              </div>
            </div>

            <hr
              style={{
                border: "0",
                borderTop: "1px dashed #FFD1E0",
                margin: "30px 0",
              }}
            />

            {/* 4-2. Simulation */}
            <div>
              <div
                className="side-project-header"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "15px",
                }}
              >
                <span style={{ fontSize: "1.8rem" }}>🧪</span>
                <h2 className="side-project-title" style={{ ...titleStyle, fontSize: "1.5rem", margin: 0 }}>
                  Physics Simulation (Planning)
                </h2>
              </div>

              <p style={paragraphStyle} className="content-paragraph">
                <b>[Upcoming Challenge]</b> 학부 졸업 논문 연구(합성/결정 성장)를 바탕으로, 실제
                실험 환경 변수(온도, 압력 등)가 입자 성장에 미치는 영향을{" "}
                <b>물리 엔진(Matter.js/Python)</b>으로 구현하는 시뮬레이션 프로젝트 준비 중.
              </p>

              <div
                style={{
                  background: "#F8F9FA",
                  padding: "15px",
                  borderRadius: "10px",
                  borderLeft: "4px solid #FF6B9D",
                }}
              >
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#666" }}>
                  <b>Target:</b> 실험 데이터와 시뮬레이션 결과의 정합성을 검증하고, 실험 횟수를 줄이는{" "}
                  <b>Digital Twin</b> 접근 방식 모색.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* === Skill Stack === */}
        <section
          className="skill-stack-section"
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              color: "#FF6B9D",
              fontWeight: 700,
              marginBottom: "20px",
            }}
          >
            🛠️ Technical Tools
          </h3>

          <div
            className="skill-badges"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <SkillBadge>Python</SkillBadge>
            <SkillBadge>Pandas</SkillBadge>
            <SkillBadge>OpenCV</SkillBadge>
            <SkillBadge>RSoft</SkillBadge>
            <SkillBadge>React</SkillBadge>
            <SkillBadge>Next.js</SkillBadge>
          </div>
        </section>
      </div>

      {/* ---------------- Footer Navigation ---------------- */}
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <div className="footer-buttons" style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <a href="/research/thermal-management" style={secondaryBtnStyle} className="footer-btn">
            ← Prev: Thermal Management
          </a>
          <a href="/research/education" style={primaryBtnStyle} className="footer-btn">
            Next: Others →
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

          .code-block {
            flex: 0 0 100% !important;
            max-width: 100% !important;
            padding: 15px !important;
            min-height: 200px !important;
          }

          .code-block pre {
            font-size: 0.7rem !important;
          }

          .impact-box {
            padding: 12px 15px !important;
          }

          .impact-box p {
            font-size: 0.85rem !important;
          }

          .side-projects-section {
            padding: 25px 20px !important;
          }

          .side-project-badge {
            left: 20px !important;
            font-size: 0.8rem !important;
            padding: 4px 12px !important;
          }

          .side-project-header {
            flex-direction: column !important;
            align-items: flex-start !important;
          }

          .side-project-title {
            font-size: 1.2rem !important;
          }

          .skill-badges {
            justify-content: center !important;
          }

          .skill-stack-section {
            padding: 20px !important;
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

          .content-paragraph {
            font-size: 0.9rem !important;
          }

          .content-list {
            font-size: 0.85rem !important;
          }

          .code-block pre {
            font-size: 0.65rem !important;
          }

          .side-project-title {
            font-size: 1.1rem !important;
          }
        }
      `}</style>
    </div>
  );
}

/* ================= COMPONENT & STYLES ================= */

function SkillBadge({ children }: any) {
  return (
    <span
      style={{
        background: "#FFF0F6",
        color: "#FF6B9D",
        padding: "8px 16px",
        borderRadius: "30px",
        fontSize: "0.95rem",
        fontWeight: 700,
        border: "1px solid #FFC2D6",
      }}
    >
      {children}
    </span>
  );
}

const projectSectionStyle: React.CSSProperties = {
  background: "white",
  borderRadius: "25px",
  padding: "40px",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.05)",
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

const contentBoxStyle: React.CSSProperties = {
  display: "flex",
  gap: "40px",
  flexWrap: "wrap",
};

const headingStyle: React.CSSProperties = {
  fontSize: "1.1rem",
  fontWeight: 700,
  color: "#FF6B9D",
  marginTop: "0px",
  marginBottom: "10px",
  textTransform: "uppercase",
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

const codePlaceholderStyle: React.CSSProperties = {
  flex: "0 0 320px",
  background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
  borderRadius: "15px",
  padding: "25px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
  width: "100%",
  minHeight: "200px",
  overflow: "auto",
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