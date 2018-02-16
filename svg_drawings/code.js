document.addEventListener('DOMContentLoaded', () => {
  let svg = d3.select('#graph').append('svg').style('width', 1024).style('height', 768)

  svg.append('text').text('A picture').attr("x", 10).attr('y', 150);
  svg.append('line').attr("x1", 5)
                    .attr("y1", 5)
                    .attr("x2", 100)
                    .attr("y2", 100)
                    .attr('stroke-width', 5)
                    .attr('stroke', 'blue');

  svg.append("rect").attrs({x: 200, y: 50, width: 300, height: 400, fill: 'black'});        
});