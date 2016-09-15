/*d3.js
D3’s functional style allows code reuse through a diverse collection of components and plugins.

var paragraphs = document.getElementsByTagName("p");
for (var i = 0; i < paragraphs.length; i++) {
  var paragraph = paragraphs.item(i);
  paragraph.style.setProperty("color", "white", null);
}

//-->

d3.selectAll("p").style("color", "white");
d3.select("body").style("background-color", "black");