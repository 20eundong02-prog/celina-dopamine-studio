"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

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
          데이터 자동화, 광학 시뮬레이션, 그리고 이미지 분석.
        </p>
      </header>

      {/* ---------------- Timeline Section ---------------- */}
      <div className="timeline-section" style={{ maxWidth: "900px", margin: "0 auto 60px" }}>
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

      {/* ---------------- Quick Overview Section ---------------- */}
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

        {/* Overview Card 4 */}
        <div
          className="overview-card"
          onClick={() => document.getElementById('project-simulator')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
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
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(156, 136, 255, 0.3)";
            e.currentTarget.style.borderColor = "#9C88FF";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
            e.currentTarget.style.borderColor = "#FFF0F5";
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>💡</div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#333", marginBottom: "8px" }}>
            Interactive Simulation
          </h3>
          <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: "1.5", margin: 0 }}>
            실시간 광학 시뮬레이터<br />웹 기반 TMM 엔진
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

        {/* === Project 4: Interactive Optical Simulation === */}
        <section id="project-simulator" style={projectSectionStyle} className="project-section">
          <div style={projectHeaderStyle} className="project-header">
            <span style={{ fontSize: "2.5rem" }}>💡</span>
            <div>
              <h2 style={titleStyle} className="section-title">Interactive Optical Simulation</h2>
              <p style={subTitleStyle} className="section-subtitle">2024 - 2025 | React, TypeScript, Canvas API</p>
            </div>
          </div>

          <div style={contentBoxStyle} className="content-box">
            <div style={{ flex: 1 }}>
              <h3 style={headingStyle} className="content-heading">Objective</h3>
              <p style={paragraphStyle} className="content-paragraph">
                <b>Advanced Science 2025</b> 논문에서 제안된 Ag/TiO₂ 다층 박막 구조의 광학적 특성을 
                웹 브라우저에서 실시간으로 시뮬레이션하고 시각화하는 인터랙티브 도구 개발.<br/>
                연구자들이 실험 전에 다양한 구조 조합을 빠르게 테스트할 수 있도록 지원.
              </p>

              <h3 style={headingStyle} className="content-heading">Key Implementation</h3>
              <ul style={listStyle} className="content-list">
                <li>
                  <strong style={{ color: "#FF6B9D" }}>Physics Engine:</strong>{" "}
                  Transfer Matrix Method (TMM)를 JavaScript로 구현하여 각 층의 굴절률과 
                  두께를 기반으로 반사율 스펙트럼 계산.
                </li>

                <li>
                  <strong style={{ color: "#FF6B9D" }}>Canvas Visualization:</strong>{" "}
                  HTML5 Canvas API를 활용해 가시광선 스펙트럼 배경색과 함께 실시간 그래프 렌더링. 
                  공진 파장(Dip Wavelength) 자동 탐지 및 표시.
                </li>

                <li>
                  <strong style={{ color: "#FF6B9D" }}>UI/UX Design:</strong>{" "}
                  슬라이더를 통한 직관적인 파라미터 조작 인터페이스 구현. 
                  계산 결과를 실시간으로 시각화하여 즉각적인 피드백 제공.
                </li>
              </ul>

              <h3 style={{...headingStyle, marginTop: "30px"}} className="content-heading">Impact</h3>
              <div
                className="impact-box"
                style={{
                  background: "#F5F3FF",
                  padding: "15px 20px",
                  borderRadius: "10px",
                  borderLeft: "4px solid #9C88FF",
                }}
              >
                <p style={{ ...paragraphStyle, marginBottom: "0", fontSize: "0.95rem" }}>
                  ✓ 고가의 시뮬레이션 소프트웨어 없이 웹에서 즉시 실행 가능<br />
                  ✓ 연구자/학생들이 광학 원리를 시각적으로 학습할 수 있는 교육 도구로 활용<br />
                  ✓ 실험 전 다양한 구조 조합을 신속하게 탐색하여 연구 효율성 향상
                </p>
              </div>
            </div>

            <div style={{...codePlaceholderStyle, minHeight: "280px", flex: "0 0 380px"}} className="code-block">
              <pre style={{ fontSize: "0.8rem", color: "#9C88FF", textAlign: "left", lineHeight: "1.5" }}>
{`// Transfer Matrix Method in React
const calculateTMM = (layers, wavelength) => {
  let M = [[1, 0], [0, 1]]; // Identity matrix
  const n_air = 1.0;
  
  layers.forEach(layer => {
    const { material, thickness } = layer;
    const n = getRefractiveIndex(material, wavelength);
    
    // Phase shift
    const delta = (2 * Math.PI * n * thickness) / wavelength;
    
    // Characteristic matrix
    const cos_d = Math.cos(delta);
    const sin_d = Math.sin(delta);
    
    const M_layer = [
      [cos_d, sin_d / n],
      [n * sin_d, cos_d]
    ];
    
    M = matrixMultiply(M, M_layer);
  });
  
  // Calculate reflectance
  const r = calculateReflection(M, n_air, n_substrate);
  return Math.pow(Math.abs(r), 2) * 100;
};`}
              </pre>
              <span
                style={{
                  fontSize: "0.85rem",
                  color: "#9C88FF",
                  fontWeight: 700,
                  marginTop: "10px",
                }}
              >
                React • TypeScript • Canvas
              </span>
            </div>
          </div>

          {/* 시뮬레이터 삽입 */}
          <div style={{ marginTop: "30px" }}>
            <div
              style={{
                background: "#F8F9FA",
                padding: "15px",
                borderRadius: "10px",
                borderLeft: "4px solid #9C88FF",
                marginBottom: "20px",
              }}
            >
              <p style={{ margin: 0, fontSize: "0.9rem", color: "#666" }}>
                <b>💡 Live Demo:</b> 아래에서 직접 파라미터를 조절하며 광학 특성 변화를 실시간으로 확인할 수 있습니다.
              </p>
            </div>

            <div
              style={{
                background: "#FFF",
                borderRadius: "15px",
                padding: "20px",
                border: "2px solid #E8E0FF",
                boxShadow: "0 4px 12px rgba(156, 136, 255, 0.15)",
              }}
            >
              <OpticalSimulatorComponent />
            </div>
          </div>
        </section>

        {/* === Project 5: Web Portfolio (Side Project) === */}
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
            🚀 Side Project
          </div>

          <div style={{ marginTop: "10px" }}>
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
                <span style={{ fontSize: "1.8rem" }}>🌐</span>
                <h2 className="side-project-title" style={{ ...titleStyle, fontSize: "1.5rem", margin: 0 }}>
                  Celina's Dopamine Studio (celinastudio.com)
                </h2>
              </div>

              <div style={{ display: "flex", gap: "30px", alignItems: "flex-start", flexWrap: "wrap" }}>
                <div style={{ flex: "1 1 450px" }}>
                  <h3 style={headingStyle} className="content-heading">Objective</h3>
                  <p style={paragraphStyle} className="content-paragraph">
                    연구 성과를 정적인 PDF나 PPT가 아닌 <b>인터랙티브 웹 애플리케이션</b>으로 
                    구현하여 포트폴리오의 접근성과 시각적 전달력을 강화.
                  </p>

                  <h3 style={headingStyle} className="content-heading">Key Features</h3>
                  <ul style={listStyle} className="content-list">
                    <li>
                      <strong style={{ color: "#FF6B9D" }}>Responsive Design:</strong>{" "}
                      모바일, 태블릿, 데스크톱 모든 디바이스에서 최적화된 UI/UX 제공. 
                      Flexbox 및 CSS Grid 기반 레이아웃 설계.
                    </li>

                    <li>
                      <strong style={{ color: "#FF6B9D" }}>Dynamic Content:</strong>{" "}
                      React의 상태 관리(State Management)를 활용하여 
                      사용자 인터랙션에 따라 콘텐츠가 동적으로 변화.
                    </li>

                    <li>
                      <strong style={{ color: "#FF6B9D" }}>Performance Optimization:</strong>{" "}
                      Next.js의 Image Optimization, Code Splitting, SSR(Server-Side Rendering)을 
                      활용하여 초기 로딩 속도 개선 (Lighthouse Score 95+).
                    </li>

                    <li>
                      <strong style={{ color: "#FF6B9D" }}>SEO & Accessibility:</strong>{" "}
                      Semantic HTML, Meta Tags, Alt Text 등을 통해 검색 엔진 최적화 및 
                      스크린 리더 접근성 확보.
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
                      ✓ 연구 성과를 비전공자도 쉽게 이해할 수 있도록 시각화<br />
                      ✓ 웹 개발 역량 입증을 통한 연구+개발 융합 인재 포지셔닝<br />
                      ✓ 취업/입학 지원 시 차별화된 포트폴리오로 활용
                    </p>
                  </div>

                  <div className="skill-badges" style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "20px" }}>
                    <SkillBadge>React</SkillBadge>
                    <SkillBadge>Next.js</SkillBadge>
                    <SkillBadge>TypeScript</SkillBadge>
                    <SkillBadge>Responsive UI</SkillBadge>
                    <SkillBadge>SEO</SkillBadge>
                  </div>
                </div>

                <div style={{ flex: "0 0 350px", maxWidth: "100%" }}>
                  <div
                    style={{
                      borderRadius: "15px",
                      overflow: "hidden",
                      boxShadow: "0 8px 24px rgba(255, 107, 157, 0.3)",
                      border: "3px solid #FFB6C9",
                    }}
                  >
                    <Image
                      src="/homepage.jpg"
                      alt="Celina's Dopamine Studio Homepage"
                      width={700}
                      height={500}
                      quality={85}
                      priority
                      sizes="(max-width: 768px) 100vw, 350px"
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                    />
                  </div>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "0.85rem",
                      color: "#888",
                      marginTop: "10px",
                      fontStyle: "italic",
                    }}
                  >
                    Interactive Portfolio Homepage
                  </p>
                </div>
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
            <SkillBadge>TypeScript</SkillBadge>
            <SkillBadge>Canvas API</SkillBadge>
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

          .simulator-container {
            padding: 15px !important;
          }

          .simulator-title {
            font-size: 1.1rem !important;
          }

          .simulator-controls {
            padding: 15px !important;
          }

          .slider-label {
            font-size: 0.9rem !important;
          }

          .calculate-button {
            padding: 14px !important;
            font-size: 0.95rem !important;
          }

          .result-cards {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }

          .result-card {
            padding: 12px !important;
          }

          .result-card-label {
            font-size: 0.8rem !important;
          }

          .result-card-value {
            font-size: 1.3rem !important;
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

          input[type="range"] {
            height: 8px !important;
            -webkit-appearance: none !important;
          }

          input[type="range"]::-webkit-slider-thumb {
            width: 24px !important;
            height: 24px !important;
            -webkit-appearance: none !important;
          }

          input[type="range"]::-moz-range-thumb {
            width: 24px !important;
            height: 24px !important;
          }
        }
      `}</style>
    </div>
  );
}

/* ================= 시뮬레이터 컴포넌트 ================= */

function OpticalSimulatorComponent() {
  const [topAg, setTopAg] = useState(10);
  const [tio2, setTio2] = useState(210);
  const [botAg, setBotAg] = useState(10);
  const [calculatedData, setCalculatedData] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const calculateSpectrum = () => {
    const wavelengths = [];
    const reflectance = [];
    
    for (let wl = 400; wl <= 800; wl += 2) {
      wavelengths.push(wl);
      
      const n_tio2 = 2.4;
      const phase = (4 * Math.PI * n_tio2 * tio2) / wl;
      const R_base = 60 - 50 * Math.cos(phase);
      const agEffect = Math.exp(-topAg / 15);
      const R = R_base * (0.5 + 0.5 * agEffect);
      
      reflectance.push(Math.min(95, Math.max(5, R)));
    }
    
    const minIdx = reflectance.indexOf(Math.min(...reflectance));
    const dipWavelength = wavelengths[minIdx];
    
    return { wavelengths, reflectance, dipWavelength };
  };

  const drawGraph = (data: any) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const baseWidth = isMobile ? 600 : 900;
    const baseHeight = isMobile ? 300 : 400;
    
    canvas.width = baseWidth;
    canvas.height = baseHeight;
    
    const padding = isMobile ? 45 : 60;
    const graphWidth = canvas.width - 2 * padding;
    const graphHeight = canvas.height - 2 * padding;
    
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const wlMin = 400;
    const wlMax = 800;
    
    for (let i = 0; i < graphWidth; i++) {
      const wl = wlMin + (i / graphWidth) * (wlMax - wlMin);
      ctx.fillStyle = wavelengthToColor(wl);
      ctx.globalAlpha = 0.1;
      ctx.fillRect(padding + i, padding, 1, graphHeight);
    }
    ctx.globalAlpha = 1.0;
    
    ctx.strokeStyle = '#E0E0E0';
    ctx.lineWidth = 1;
    
    for (let i = 0; i <= 5; i++) {
      const y = padding + (graphHeight * i) / 5;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(padding + graphWidth, y);
      ctx.stroke();
    }
    
    for (let i = 1; i < 7; i++) {
      const x = padding + (graphWidth * i) / 8;
      ctx.beginPath();
      ctx.moveTo(x, padding);
      ctx.lineTo(x, padding + graphHeight);
      ctx.stroke();
    }
    
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, padding + graphHeight);
    ctx.lineTo(padding + graphWidth, padding + graphHeight);
    ctx.stroke();
    
    ctx.fillStyle = '#333';
    ctx.font = isMobile ? 'bold 11px Arial' : 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.save();
    ctx.translate(isMobile ? 15 : 20, padding + graphHeight / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Reflectance (%)', 0, 0);
    ctx.restore();
    
    ctx.fillText('Wavelength (nm)', padding + graphWidth / 2, canvas.height - (isMobile ? 10 : 15));
    
    ctx.font = isMobile ? '10px Arial' : '12px Arial';
    ctx.textAlign = 'right';
    for (let i = 0; i <= 5; i++) {
      const y = padding + (graphHeight * i) / 5;
      const value = 100 - i * 20;
      ctx.fillText(value.toString(), padding - (isMobile ? 5 : 10), y + 4);
    }
    
    ctx.textAlign = 'center';
    for (let i = 0; i <= 8; i++) {
      const x = padding + (graphWidth * i) / 8;
      const value = 400 + i * 50;
      ctx.fillText(value.toString(), x, padding + graphHeight + (isMobile ? 15 : 20));
    }
    
    ctx.strokeStyle = '#1E88E5';
    ctx.lineWidth = isMobile ? 2 : 3;
    ctx.beginPath();
    
    data.wavelengths.forEach((wl: number, idx: number) => {
      const x = padding + ((wl - wlMin) / (wlMax - wlMin)) * graphWidth;
      const y = padding + graphHeight - (data.reflectance[idx] / 100) * graphHeight;
      
      if (idx === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    
    ctx.stroke();
    
    const minIdx = data.reflectance.indexOf(Math.min(...data.reflectance));
    const minWl = data.wavelengths[minIdx];
    const minR = data.reflectance[minIdx];
    
    const markerX = padding + ((minWl - wlMin) / (wlMax - wlMin)) * graphWidth;
    const markerY = padding + graphHeight - (minR / 100) * graphHeight;
    
    ctx.strokeStyle = '#E91E63';
    ctx.lineWidth = isMobile ? 1.5 : 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(markerX, padding);
    ctx.lineTo(markerX, padding + graphHeight);
    ctx.stroke();
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#E91E63';
    ctx.beginPath();
    ctx.arc(markerX, markerY, isMobile ? 4 : 6, 0, Math.PI * 2);
    ctx.fill();
    
    if (!isMobile) {
      ctx.fillStyle = '#333';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'left';
      ctx.fillText(
        `Optical Simulation of Color-Tunable Glass`,
        padding + graphWidth - 380,
        padding + 20
      );
      ctx.font = '12px Arial';
      ctx.fillText(
        `(Layer: Ag ${topAg.toFixed(1)}nm / TiO₂ ${tio2.toFixed(1)}nm / Ag ${botAg.toFixed(1)}nm)`,
        padding + graphWidth - 380,
        padding + 38
      );
      
      ctx.fillStyle = '#E91E63';
      ctx.font = 'bold 12px Arial';
      ctx.textAlign = 'left';
      ctx.fillText(
        `Min Reflection at ${minWl.toFixed(1)} nm`,
        markerX + 10,
        padding + 15
      );
    } else {
      ctx.fillStyle = '#333';
      ctx.font = 'bold 11px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(
        `Ag ${topAg}nm / TiO₂ ${tio2}nm / Ag ${botAg}nm`,
        canvas.width / 2,
        padding - 10
      );
    }
  };

  const wavelengthToColor = (wavelength: number): string => {
    let r = 0, g = 0, b = 0;
    
    if (wavelength >= 380 && wavelength < 440) {
      r = -(wavelength - 440) / (440 - 380);
      g = 0;
      b = 1;
    } else if (wavelength >= 440 && wavelength < 490) {
      r = 0;
      g = (wavelength - 440) / (490 - 440);
      b = 1;
    } else if (wavelength >= 490 && wavelength < 510) {
      r = 0;
      g = 1;
      b = -(wavelength - 510) / (510 - 490);
    } else if (wavelength >= 510 && wavelength < 580) {
      r = (wavelength - 510) / (580 - 510);
      g = 1;
      b = 0;
    } else if (wavelength >= 580 && wavelength < 645) {
      r = 1;
      g = -(wavelength - 645) / (645 - 580);
      b = 0;
    } else if (wavelength >= 645 && wavelength <= 780) {
      r = 1;
      g = 0;
      b = 0;
    }
    
    return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`;
  };

  const handleCalculate = () => {
    const data = calculateSpectrum();
    setCalculatedData(data);
  };

  useEffect(() => {
    if (calculatedData) {
      drawGraph(calculatedData);
    }
  }, [calculatedData, isMobile]);

  return (
    <div className="simulator-container" style={{ padding: "20px" }}>
      <h3 className="simulator-title" style={{ 
        fontSize: "1.3rem", 
        color: "#FF6B9D", 
        marginBottom: "20px",
        textAlign: "center" 
      }}>
        🎛️ Interactive TMM Simulator
      </h3>

      <div className="simulator-controls" style={{
        background: "#FFF8FA",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "20px",
        border: "1px solid #FFE8F1"
      }}>
        <div style={{ marginBottom: "20px" }}>
          <label className="slider-label" style={{ 
            display: "block", 
            fontSize: "0.95rem", 
            fontWeight: 600, 
            color: "#333",
            marginBottom: "8px" 
          }}>
            Top Ag Layer: <span style={{ color: "#FF6B9D" }}>{topAg} nm</span>
          </label>
          <input
            type="range"
            min="0"
            max="50"
            step="1"
            value={topAg}
            onChange={(e) => setTopAg(Number(e.target.value))}
            style={{ width: "100%", accentColor: "#FF6B9D" }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label className="slider-label" style={{ 
            display: "block", 
            fontSize: "0.95rem", 
            fontWeight: 600, 
            color: "#333",
            marginBottom: "8px" 
          }}>
            TiO₂ Layer: <span style={{ color: "#FF6B9D" }}>{tio2} nm</span>
          </label>
          <input
            type="range"
            min="50"
            max="300"
            step="5"
            value={tio2}
            onChange={(e) => setTio2(Number(e.target.value))}
            style={{ width: "100%", accentColor: "#FF6B9D" }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label className="slider-label" style={{ 
            display: "block", 
            fontSize: "0.95rem", 
            fontWeight: 600, 
            color: "#333",
            marginBottom: "8px" 
          }}>
            Bottom Ag Layer: <span style={{ color: "#FF6B9D" }}>{botAg} nm</span>
          </label>
          <input
            type="range"
            min="0"
            max="50"
            step="1"
            value={botAg}
            onChange={(e) => setBotAg(Number(e.target.value))}
            style={{ width: "100%", accentColor: "#FF6B9D" }}
          />
        </div>

        <button
          className="calculate-button"
          onClick={handleCalculate}
          style={{
            width: "100%",
            padding: "12px",
            background: "linear-gradient(135deg, #FF6B9D 0%, #FF8FAB 100%)",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: 700,
            cursor: "pointer",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          ▶ Calculate Spectrum
        </button>
      </div>

      {calculatedData && (
        <div style={{
          background: "white",
          padding: isMobile ? "15px" : "20px",
          borderRadius: "12px",
          border: "2px solid #FFE8F1",
          marginBottom: "20px",
          overflow: "auto"
        }}>
          <canvas 
            ref={canvasRef}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              maxWidth: "900px",
              margin: "0 auto",
              touchAction: "pan-x pan-y"
            }}
          />
        </div>
      )}

      {calculatedData && (
        <div className="result-cards" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "15px"
        }}>
          <div className="result-card" style={{
            background: "#FFF8FA",
            padding: "15px",
            borderRadius: "8px",
            textAlign: "center",
            border: "2px solid #FFE8F1"
          }}>
            <div className="result-card-label" style={{ fontSize: "0.85rem", color: "#888", marginBottom: "5px" }}>
              Min Reflectance
            </div>
            <div className="result-card-value" style={{ fontSize: "1.5rem", fontWeight: 700, color: "#FF6B9D" }}>
              {Math.min(...calculatedData.reflectance).toFixed(1)}%
            </div>
          </div>

          <div className="result-card" style={{
            background: "#F0FFFF",
            padding: "15px",
            borderRadius: "8px",
            textAlign: "center",
            border: "2px solid #E0F7FA"
          }}>
            <div className="result-card-label" style={{ fontSize: "0.85rem", color: "#888", marginBottom: "5px" }}>
              Dip Wavelength
            </div>
            <div className="result-card-value" style={{ fontSize: "1.5rem", fontWeight: 700, color: "#4ECDC4" }}>
              {calculatedData.dipWavelength} nm
            </div>
          </div>

          <div className="result-card" style={{
            background: "#FFF5F5",
            padding: "15px",
            borderRadius: "8px",
            textAlign: "center",
            border: "2px solid #FFEBEE"
          }}>
            <div className="result-card-label" style={{ fontSize: "0.85rem", color: "#888", marginBottom: "5px" }}>
              Avg Reflectance
            </div>
            <div className="result-card-value" style={{ fontSize: "1.5rem", fontWeight: 700, color: "#F38181" }}>
              {(calculatedData.reflectance.reduce((a: number, b: number) => a + b) / calculatedData.reflectance.length).toFixed(1)}%
            </div>
          </div>
        </div>
      )}

      {!calculatedData && (
        <div style={{
          textAlign: "center",
          padding: isMobile ? "40px 20px" : "60px 20px",
          color: "#888",
          fontSize: isMobile ? "0.9rem" : "1rem",
          background: "#F8F9FA",
          borderRadius: "12px",
          border: "2px dashed #E0E0E0"
        }}>
          ⬆️ Adjust layer thickness above<br/>
          <span style={{ fontSize: isMobile ? "0.8rem" : "0.9rem" }}>Then click Calculate to visualize</span>
        </div>
      )}
    </div>
  );
}

/* ================= COMPONENTS & STYLES ================= */

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
