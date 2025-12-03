"use client";

import Link from "next/link";
import { useState } from "react";

import {
  FlaskConical,
  Layers,
  Sparkles,
  ThermometerSun,
  LaptopMinimal,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

import styles from "./research.module.css";

export default function Research() {
  const [hover, setHover] = useState<string | null>(null);

  const items = [
    {
      id: "synthesis",
      title: ["Synthesis"],
      subtitle: "LDH, mRGO etc",
      desc: "무기 재료 합성",
      icon: FlaskConical,
      color: "#FF6B9D",
      path: "/research/synthesis",
    },
    {
      id: "deposition",
      title: ["Deposition"],
      subtitle: "CVD, PVD",
      desc: "CMC 및 박막 증착",
      icon: Layers,
      color: "#FFB6C1",
      path: "/research/deposition",
    },
    {
      id: "phosphor",
      title: ["Phosphor &", "Perovskite"],
      subtitle: "Luminescent Materials",
      desc: "발광 재료 연구",
      icon: Sparkles,
      color: "#87CEEB",
      path: "/research/phosphor-perovskite",
    },
    {
      id: "thermal",
      title: ["Thermal", "Management"],
      subtitle: "Heat & Cooling Solutions",
      desc: "열 관리 및 복사냉각",
      icon: ThermometerSun,
      color: "#98D8C8",
      path: "/research/thermal-management",
    },
    {
      id: "programming",
      title: ["Programming"],
      subtitle: "Simulation & Modeling",
      desc: "데이터 처리 효율화",
      icon: LaptopMinimal,
      color: "#C5A3FF",
      path: "/research/programming",
    },
    {
      id: "others",
      title: ["Others"],
      subtitle: "Research Club & Training",
      desc: "동아리 및 훈련",
      icon: GraduationCap,
      color: "#FFD4A3",
      path: "/research/education",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {items.map((item) => {
          const Icon = item.icon;
          const active = hover === item.id;

          return (
            <Link
              key={item.id}
              href={item.path}
              className={styles.card}
              onMouseEnter={() => setHover(item.id)}
              onMouseLeave={() => setHover(null)}
              style={{ borderColor: active ? item.color : "rgba(255, 182, 193, 0.5)" }}
            >
              <div
                className={styles.icon}
                style={{
                  backgroundColor: `${item.color}15`,
                  color: active ? item.color : "#666",
                }}
              >
                <Icon size={40} strokeWidth={1.6} />
              </div>

              <div className={styles.texts}>
                {item.title.map((t, idx) => (
                  <h3
                    key={idx}
                    className={styles.cardTitle}
                    style={{ color: active ? item.color : "#333" }}
                  >
                    {t}
                  </h3>
                ))}

                <p className={styles.subtitle}>{item.subtitle}</p>
                <p className={styles.desc}>{item.desc}</p>
              </div>

              <div
                className={styles.arrow}
                style={{ opacity: active ? 1 : 0, color: item.color }}
              >
                <ArrowRight size={22} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
