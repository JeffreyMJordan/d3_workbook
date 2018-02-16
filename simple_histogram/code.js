document.addEventListener('DOMContentLoaded', () => {
  let width = 900, height = 300, pad=20, left_pad=100;
  let x = d3.scaleBand().range([left_pad, width-pad]).round(0.1);
  let y = d3.scaleOrdinal().range([height-pad, pad]);
  let xAxis = d3.axisBottom(x);
  let yAxis = d3.axisLeft(y);

  let svg = d3.select("#graph").append('svg').attr("height", height).attr("width", width);
});