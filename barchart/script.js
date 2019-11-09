
const data =[4,7,15,16,22,23];

const   width = 600,
        barHeight = 20,
        height = 400;

let x = d3.scale.linear()
    .domain([0,d3.max(data)])
    .range([0,width]);

let chart = d3.select(".chart")
    .attr("width", width)
    .attr("height", barHeight*data.length);

let bar = chart.selectAll("g")
    .data(data)
    .enter().append("g")
    .attr("transform", function(d,i) {return "translate(0,"+i*barHeight+")";});

bar.append("rect")
    .attr("width",x)
    .attr("height", barHeight-1);

bar.append("text")
    .attr("x", function(d) {return x(d)-5;})
    .attr("y", barHeight /2)
    .attr("dy", ".35em")
    .text(function(d) {return d;});

