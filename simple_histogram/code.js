document.addEventListener('DOMContentLoaded', () => {
  let width = 900, height = 300, pad=20, left_pad=100;
  let x = d3.scaleBand().range([left_pad, width-pad]).round(0.1);
  let y = d3.scaleLinear().range([height-pad, pad]);
  let xAxis = d3.axisBottom(x);
  let yAxis = d3.axisLeft(y);

  let svg = d3.select("#graph").append('svg').attr("height", height).attr("width", width);

  let data;
  d3.json("histogram_hours.json", function(err, jsonData){
    data = d3.keys(jsonData).map((key) => {
      return {bucket: parseInt(key), N: jsonData[key]};
    });

    x.domain(data.map((el) => el.bucket));
    y.domain([0, d3.max(data, function(d){return d.N;})]);

    svg.append("g").attr("class", "axis").attr("transform", "translate(0, "+(height-pad) + ")").call(xAxis);
    svg.append("g").attr("class", "axis").attr("transform", "translate("+(left_pad -pad) + ", 0)").call(yAxis);

    svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", function(d){return x(d.bucket)+5;})
        .attr("y", function(d){return y(d.N) ;})
        .attr("height", function(d){return height-pad-y(d.N);})
        .attr("width", x.bandwidth()-5);
  });
});