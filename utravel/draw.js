//checks if the user pressed "enter", calls function citysearch
function search(ele) {
    if(event.keyCode == 13) {

      //if a transaction matches the input city, store that transaction in cityobj
      var city = document.getElementById("input").value;
      randomize();

    }
};

var myArray = [660, 400, 1150, 1320, 800, 1200, 900];
var rand = 0;

var randomize = function(city) {
 rand = myArray[Math.floor(Math.random() * myArray.length)];
 citysearch(city);
 console.log(rand);

};

// create object to store the JSON in
var alldata = {"result": []};

//get the JSON file with jquery
$(function(){
    $.getJSON('mockup.json',function(data){
        console.log('success');
        //Push into global variable alldata
        for (var i = data.result.length - 1; i >= 0; i--) {
          alldata.result.push(data.result[i]);
        };

        console.log(alldata);
        console.log("All transaction data collected successfully")
    })

    .error(function(){
        console.log('error');
    });

});

// create a variable to store result for a particular city
var cityobj = {result: []};

//create a function that runs when you request a specific city
var citysearch = function(city) {
  //clear the array cityobj so that any old data is taken away
  while(cityobj.result.length > 0) {
    cityobj.result.pop();
  }

  for (var i = alldata.result.length - 1; i >= 0; i--) {
    if (city == alldata.result[i].where) {
      cityobj.result.push(alldata.result[i]);
    }
  };
  console.log(cityobj);
  console.log(city + " city transaction data collected successfully")

  drawcity(cityobj, city);
};


//---------------------------------- D3----------------------------------------//


var palette = ["#4b0840", "#54b2a7","#a2cd5a","#ff7373","#e3e3e3","#1fa700"];
var catlist = ["Culture","Food","Housing","Nightlife","Sports", "Transportation"];


var drawcity = function(cityobj, city) { 

  var r = 60;

  cityobj.result.sort( function(a, b) {
    if (a.category == b.category) {
      return 0;
    }
    else if (a.category > b.category) {
      return 1;
    }
    else { return -1; }
  });

  var categoryposition = {"Culture": 0, "Food": 1, "Housing": 2, "Nightlife": 3, "Sports": 4, "Transportation": 5};
  var summedup = [0,0,0,0,0,0];

  for (var i = cityobj.result.length - 1; i >= 0; i--) {
    var c = cityobj.result[i].category;
    var p = categoryposition[c];
    summedup[p] += cityobj.result[i].sum;
  };

  var canvas = d3.select('#chart').append('svg')
    .attr('width', 300)
    .attr('height', 130);

  var group = canvas.append('g')
    .attr('transform', 'translate(' + r +', ' + r + ')');

  var arc = d3.svg.arc()
    .innerRadius(10)
    .outerRadius(r);

  var pie = d3.layout.pie()
    .sort(null)
    .value(function (d) {
      return d
    });

  var arcs = group.selectAll('.arc')
    .data(pie(summedup))
    .enter()
    .append('g')
    .attr('class', 'arc');

  window.pie = pie;

  arcs.append('path')
    .attr('d', arc)
    .attr('fill', function(d, i) { return palette[i]} );

  // arcs.append('text')
  //   .attr('transform', function(d) {return 'translate(' + arc.centroid(d) + ')'; })
  //   .attr('texy-anchor', 'left')
  //   .attr('font-size', '0.9em')
  //   .text(function(d, i) {return catlist[i] });

var text = d3.select('#text').append('p')
  .text(city + ' - ' + rand + ' kr / day')


count = 0;

var legend = group.selectAll(".legend")
    .data(pie(summedup)).enter()
    .append("g").attr("class", "legend")
    .attr("legend-id", function(d) {
        return count++;
    })
    .attr("transform", function(d, i) {
        return "translate(-40," + (-60 + i * 18) + ")";
    });

legend.append("rect")
    .attr("x", 210)
    .attr("width", 15).attr("height", 15)
    .style('fill', function(d, i) { return palette[i]} );

legend.append("text").attr("x", 200)
    .attr("y", 9).attr("dy", ".35em")
    .style("text-anchor", "end").text(function(d, i) {return catlist[i] });

}

