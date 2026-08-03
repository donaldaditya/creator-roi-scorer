"use client";

import { Chart, type ChartConfiguration } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useEffect, useRef } from "react";

Chart.register(ChartDataLabels);

const A = "#1D4ED8";
const M = "#9CA3AF";
const L = "#E5E7EB";
const T = "#6B7280";

Chart.defaults.font.family = "ui-sans-serif,system-ui,-apple-system,Helvetica,Arial,sans-serif";
Chart.defaults.font.size = 12;
Chart.defaults.color = T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(Chart.defaults.plugins as any).datalabels = { display: false };

const noLeg = { legend: { display: false } };
const gx = { grid: { display: false }, border: { color: L }, ticks: { color: T, autoSkip: false } };
const gy = { grid: { color: L }, border: { display: false }, ticks: { color: T } };
const hx = (max: number) => ({ grid: { color: L }, border: { display: false }, max, ticks: { color: T, callback: (v: string | number) => v + "%" } });
const hy = { grid: { display: false }, border: { color: L }, ticks: { color: T, font: { size: 11 } } };
const money = (v: number) => (v >= 1000 ? "$" + (v / 1000).toFixed(v % 1000 === 0 ? 1 : 2) + "T" : "$" + v + "B");

function useChart(build: (ctx: HTMLCanvasElement) => ChartConfiguration) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const chart = new Chart(ref.current, build(ref.current));
    return () => chart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return ref;
}

export function ChartConsumerSurplus() {
  const ref = useChart(() => ({
    type: "bar",
    data: {
      labels: ["Early 2025", "Early 2026"],
      datasets: [{
        data: [112, 172], backgroundColor: [M, A], borderRadius: 4, maxBarThickness: 90,
        datalabels: { display: true, anchor: "end", align: "end", color: T, font: { size: 12, weight: 600 }, formatter: (v: number) => "$" + v + "B" },
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false, layout: { padding: { top: 20 } },
      plugins: { ...noLeg, tooltip: { callbacks: { label: (c) => "$" + c.parsed.y + "B per year" } } },
      scales: { x: gx, y: { ...gy, beginAtZero: true, ticks: { ...gy.ticks, callback: (v) => "$" + v + "B" } } },
    },
  }));
  return <canvas ref={ref} role="img" aria-label="US consumer surplus from generative AI, $112B in early 2025 rising to $172B in early 2026" />;
}

export function ChartCapexRevenue() {
  const ref = useChart(() => ({
    type: "bar",
    data: {
      labels: ["2023", "2024", "2025", "2026"],
      datasets: [
        { label: "Revenue required (Cahn)", data: [200, 600, 840, 1500], backgroundColor: A, borderRadius: 4, maxBarThickness: 44, datalabels: { display: true, anchor: "end", align: "end", color: "#1E3A8A", font: { size: 11, weight: 600 }, formatter: money } },
        { label: "Hyperscaler data centre capex (Goldman Sachs)", data: [156, 254, 443, 764], backgroundColor: M, borderRadius: 4, maxBarThickness: 44, datalabels: { display: true, anchor: "end", align: "end", color: T, font: { size: 11 }, formatter: money } },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: false, layout: { padding: { top: 24 } },
      plugins: { legend: { display: true, position: "bottom", labels: { boxWidth: 10, boxHeight: 10 } }, tooltip: { callbacks: { label: (c) => c.dataset.label + ": " + money(c.parsed.y as number) } } },
      scales: { x: gx, y: { ...gy, beginAtZero: true, max: 1700, ticks: { ...gy.ticks, callback: (v) => (Number(v) >= 1000 ? "$" + (Number(v) / 1000).toFixed(1) + "T" : "$" + v + "B") } } },
    },
  }));
  return <canvas ref={ref} role="img" aria-label="Annual end-customer revenue required to justify one year of AI capex, against estimated 2026 hyperscaler data centre capex" />;
}

export function ChartOrgImpact() {
  const ref = useChart(() => ({
    type: "bar",
    data: {
      labels: ["Innovation", "Profitability", "Revenue growth"],
      datasets: [
        { label: "Improved", data: [64, 36, 33], backgroundColor: A, maxBarThickness: 36, datalabels: { display: true, color: "#fff", font: { size: 11, weight: 600 }, formatter: (v: number) => v + "%" } },
        { label: "Had no effect", data: [21, 36, 39], backgroundColor: M, maxBarThickness: 36, datalabels: { display: true, color: "#fff", font: { size: 11 }, formatter: (v: number) => v + "%" } },
        { label: "Don't know", data: [14, 26, 27], backgroundColor: "#D1D5DB", maxBarThickness: 36, datalabels: { display: (c) => (c.dataset.data[c.dataIndex] as number) >= 8, color: T, font: { size: 11 }, formatter: (v: number) => v + "%" } },
        { label: "Worsened", data: [1, 2, 1], backgroundColor: L, maxBarThickness: 36 },
      ],
    },
    options: {
      indexAxis: "y", responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: true, position: "bottom", labels: { boxWidth: 10, boxHeight: 10 } }, tooltip: { callbacks: { label: (c) => c.dataset.label + ": " + c.parsed.x + "%" } } },
      scales: { x: { stacked: true, max: 100, grid: { color: L }, border: { display: false }, ticks: { color: T, callback: (v) => v + "%" } }, y: { stacked: true, ...hy } },
    },
  }));
  return <canvas ref={ref} role="img" aria-label="Self-reported AI outcomes: innovation 64% improved, profitability 36%, revenue growth 33%" />;
}

export function ChartBarriers() {
  const ref = useChart(() => ({
    type: "bar",
    data: {
      labels: ["Security and risk", "Technical limits", "Regulatory uncertainty", "Responsible-AI tooling gaps", "Budget constraints", "Unclear business value", "Immature vendors", "Organisational resistance", "Lack of executive support"],
      datasets: [{
        data: [62, 38, 38, 36, 34, 32, 28, 23, 9],
        backgroundColor: (c: { dataIndex: number }) => (c.dataIndex === 8 ? A : M),
        borderRadius: 4, maxBarThickness: 22,
        datalabels: { display: true, anchor: "end", align: "end", color: T, font: { size: 11 }, formatter: (v: number) => v + "%" },
      }],
    },
    options: {
      indexAxis: "y", responsive: true, maintainAspectRatio: false,
      plugins: { ...noLeg, tooltip: { callbacks: { label: (c) => c.parsed.x + "% cite this" } } },
      scales: { x: hx(75), y: hy },
    },
  }));
  return <canvas ref={ref} role="img" aria-label="Barriers to scaling agentic AI, with lack of executive support ranked last at 9%" />;
}

export function ChartAdoptionStage() {
  const ref = useChart(() => ({
    type: "bar",
    data: {
      labels: ["United States", "Southeast Asia", "Global", "Asia Pacific ex CN/IN"],
      datasets: [
        { label: "Fully scaled", data: [13, 8, 6, 2], backgroundColor: "#0C447C", maxBarThickness: 24, datalabels: { display: (c) => (c.dataset.data[c.dataIndex] as number) >= 6, color: "#fff", font: { size: 10, weight: 600 }, formatter: (v: number) => v } },
        { label: "Scaling", data: [38, 38, 29, 31], backgroundColor: A, maxBarThickness: 24, datalabels: { display: true, color: "#fff", font: { size: 10, weight: 600 }, formatter: (v: number) => v } },
        { label: "Piloting", data: [24, 35, 28, 22], backgroundColor: "#85B7EB", maxBarThickness: 24, datalabels: { display: true, color: "#0C447C", font: { size: 10 }, formatter: (v: number) => v } },
        { label: "Experimenting", data: [20, 19, 30, 30], backgroundColor: "#B4B2A9", maxBarThickness: 24, datalabels: { display: true, color: "#fff", font: { size: 10 }, formatter: (v: number) => v } },
        { label: "No use at all", data: [4, 0, 6, 14], backgroundColor: "#D3D1C7", maxBarThickness: 24, datalabels: { display: (c) => (c.dataset.data[c.dataIndex] as number) >= 6, color: T, font: { size: 10 }, formatter: (v: number) => v } },
      ],
    },
    options: {
      indexAxis: "y", responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: true, position: "bottom", labels: { boxWidth: 10, boxHeight: 10, font: { size: 11 } } }, tooltip: { callbacks: { label: (c) => c.dataset.label + ": " + c.parsed.x + "%" } } },
      scales: { x: { stacked: true, max: 100, grid: { color: L }, border: { display: false }, ticks: { color: T, callback: (v) => v + "%" } }, y: { stacked: true, ...hy } },
    },
  }));
  return <canvas ref={ref} role="img" aria-label="Adoption stage by region. United States 13% fully scaled, 38% scaling, 24% piloting, 20% experimenting, 4% no use. Southeast Asia 8, 38, 35, 19, 0. Global 6, 29, 28, 30, 6. Asia Pacific excluding China and India 2, 31, 22, 30, 14." />;
}

export function ChartEbitEffect() {
  const ref = useChart(() => ({
    type: "bar",
    data: {
      labels: ["Under 5%", "5 to 10%", "11 to 19%", "Over 20%"],
      datasets: [{
        data: [60, 36, 4, 0],
        backgroundColor: (c: { dataIndex: number }) => (c.dataIndex === 0 ? A : M),
        borderRadius: 4, maxBarThickness: 30,
        datalabels: {
          display: (c) => (c.dataset.data[c.dataIndex] as number) > 0,
          anchor: "end", align: "end",
          color: (c) => ((c.dataset.data[c.dataIndex] as number) >= 15 ? "#fff" : T),
          font: { size: 10, weight: 600 }, formatter: (v: number) => v + "%",
        },
      }],
    },
    options: {
      indexAxis: "y", responsive: true, maintainAspectRatio: false, layout: { padding: { right: 6 } },
      plugins: { ...noLeg, tooltip: { callbacks: { label: (c) => c.parsed.x + "% of respondents" } } },
      scales: { x: hx(75), y: hy },
    },
  }));
  return <canvas ref={ref} role="img" aria-label="Effect on operating profit in Southeast Asia: under 5% for 60%, 5-10% for 36%, 11-19% for 4%, above 20% for none" />;
}

export function ChartFunctionAdoption() {
  const ref = useChart(() => ({
    type: "bar",
    data: {
      labels: ["IT", "Software engineering", "Knowledge management", "Human resources", "Service operations", "Supply chain", "Manufacturing", "Strategy and finance", "Sales and marketing", "Product development", "Risk"],
      datasets: [{
        data: [37, 35, 32, 32, 30, 28, 26, 25, 23, 23, 18],
        backgroundColor: (c: { dataIndex: number }) => ([8, 9, 10].includes(c.dataIndex) ? A : M),
        borderRadius: 4, maxBarThickness: 20,
        datalabels: { display: true, anchor: "end", align: "end", color: T, font: { size: 11 }, formatter: (v: number) => v + "%" },
      }],
    },
    options: {
      indexAxis: "y", responsive: true, maintainAspectRatio: false, layout: { padding: { right: 8 } },
      plugins: { ...noLeg, tooltip: { callbacks: { label: (c) => c.parsed.x + "% scaling or fully scaled" } } },
      scales: { x: hx(50), y: hy },
    },
  }));
  return <canvas ref={ref} role="img" aria-label="Agentic AI adoption by function in Southeast Asia, IT highest at 37%, risk lowest at 18%" />;
}
