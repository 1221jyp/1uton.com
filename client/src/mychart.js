// src/MyChart.js
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const MyChart = () => {
  const svgRef = useRef();

  useEffect(() => {
    // 데이터 설정 (스케줄과 시작일, 마감일)
    const data = [
      { schedule: "스케줄1", start: "2024-01-01", end: "2024-01-10" },
      { schedule: "스케줄2", start: "2024-01-05", end: "2024-01-15" },
      { schedule: "스케줄3", start: "2024-01-08", end: "2024-01-12" },
    ];

    // 날짜 형식 변환
    const parseTime = d3.timeParse("%Y-%m-%d");
    data.forEach((d) => {
      d.startDate = parseTime(d.start);
      d.endDate = parseTime(d.end);
    });

    // SVG 설정
    const svg = d3.select(svgRef.current);
    const margin = { top: 40, right: 30, bottom: 30, left: 150 }; // 여백 조정
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    svg.selectAll("*").remove(); // 기존 차트 제거

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    // X축 스케일 설정 (가로축: 날짜)
    const x = d3
      .scaleTime()
      .domain([d3.min(data, (d) => d.startDate), d3.max(data, (d) => d.endDate)]) // 시작일과 마감일의 최솟값과 최댓값 설정
      .range([0, width]);

    // Y축 스케일 설정 (세로축: 스케줄)
    const y = d3
      .scaleBand()
      .domain(data.map((d) => d.schedule)) // 스케줄 레이블 설정
      .range([0, height])
      .padding(0.1); // 막대 간격 설정

    // X축 추가 (위쪽에 위치)
    g.append("g")
      .attr("class", "axis x-axis")
      .attr("transform", `translate(0,0)`) // x축을 위쪽에 위치
      .call(d3.axisTop(x).tickFormat(d3.timeFormat("%Y-%m-%d"))); // 날짜 포맷 설정

    // Y축 추가
    g.append("g").attr("class", "axis y-axis").call(d3.axisLeft(y));

    // 막대 그래프 추가
    g.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("y", (d) => y(d.schedule)) // 스케줄에 따라 y 위치
      .attr("x", (d) => x(d.startDate)) // 시작일에 따라 x 위치
      .attr("width", (d) => x(d.endDate) - x(d.startDate)) // 시작일과 마감일에 따라 너비 설정
      .attr("height", y.bandwidth()) // 각 막대의 높이 설정
      .attr("fill", "steelblue");
  }, []);

  return <svg ref={svgRef} width={800} height={400}></svg>;
};

export default MyChart;
