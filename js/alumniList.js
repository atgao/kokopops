// ALUMNI TEMPLATE

// sets variable source to boardTemplate id in alumni.html
var source = document.getElementById("alumniTemplate").innerHTML;

// Handlebars compiles the above source into a template
var template = Handlebars.compile(source);

// data
var data = {
  section:[
    { year: "2019",
      href: "#2019",
      label: "Class of 2019",
      collapsible: "collapsible-2019",
      members: [
      {name: "Alum 1", class: 2019, active: "2017, 2018", propic: "https://web.opendrive.com/api/v1/download/file.json/NTlfODQyNzYwM18?inline=1", href:"#2019-1", id:"2019-1"},
      {name: "Alum 2", class: 2019, active: "2017", propic: "https://web.opendrive.com/api/v1/download/file.json/NTlfODQyNzYwM18?inline=1", href:"#2019-2", id:"2019-2"},
    ]},
    { year: "2018",
      href: "#2018",
      label: "Class of 2018",
      collapsible: "collapsible-2018",
      members: [
      {name: "Alum 1", class: 2018, active: "2017, 2018", propic: "https://web.opendrive.com/api/v1/download/file.json/NTlfODQyNzYwM18?inline=1", href:"#2018-1", id:"2018-1"},
      {name: "Alum 2", class: 2018, active: "2016", propic: "https://web.opendrive.com/api/v1/download/file.json/NTlfODQyNzYwM18?inline=1", href:"#2018-2", id:"2018-2"},
    ]}
  ]
};

// data is passed to above template
var output = template(data);

// HTML element with id "boardList" is set to the output above
document.getElementById("alumni-content").innerHTML = output;
