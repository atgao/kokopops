// COMPANY TEMPLATE

// sets variable source to boardTemplate id in company.html
var source = document.getElementById("companyTemplate").innerHTML;

// Handlebars compiles the above source into a template
var template = Handlebars.compile(source);

// data
var data = {
  section:[
    { year: "board",
      href: "#board",
      members: [
      {name: "Member 1", position: "Position Title", class: 2021, height: "168 cm", hometown: "Myrtle Beach, SC", bias: "EXO's Chen", concern: "recruiting szn :(", propic: "https://web.opendrive.com/api/v1/download/file.json/NTlfODQyNzYwM18?inline=1", href:"#board-1", id:"board-1"},
      {name: "Member 2", position: "Position Title", class: 2021, height: "168 cm", hometown: "Princeton, NJ", bias: "EXO's Chen", concern: "recruiting szn :(", propic: "https://web.opendrive.com/api/v1/download/file.json/NTlfODQyNzYwM18?inline=1", href:"#board-2", id:"board-2"},
    ]},
    { year: "seniors",
      href: "#seniors",
      members:[
      {name: "senior 1", class: 2021, height: "168 cm", hometown: "Myrtle Beach, SC", bias: "EXO's Chen", concern: "recruiting szn :(", propic: "https://web.opendrive.com/api/v1/download/file.json/NTlfODQyNzYwM18?inline=1", href:"#senior-1", id:"senior-1"}
    ]},
    { year: "juniors",
      href: "#juniors",
      members: [
      {name: "junior 1", class: 2021, height: "168 cm", hometown: "Myrtle Beach, SC", bias: "EXO's Chen", concern: "recruiting szn :(", propic: "https://web.opendrive.com/api/v1/download/file.json/NTlfODQyNzYwM18?inline=1", href:"#junior-1", id:"junior-1"}
    ]},
    { year: "sophmores",
      href: "#sophmores",
      members: [
      {name: "sophmore 1", class: 2021, height: "168 cm", hometown: "Myrtle Beach, SC", bias: "EXO's Chen", concern: "recruiting szn :(", propic: "https://web.opendrive.com/api/v1/download/file.json/NTlfODQyNzYwM18?inline=1", href:"#sophmore-1", id:"sophmore-1"}
    ]},
    { year: "freshmen",
      href: "#freshmen",
      members: [
      {name: "freshmen 1", class: 2021, height: "168 cm", hometown: "Myrtle Beach, SC", bias: "EXO's Chen", concern: "recruiting szn :(", propic: "https://web.opendrive.com/api/v1/download/file.json/NTlfODQyNzYwM18?inline=1", href:"#freshmen-1", id:"freshmen-1"}
    ]}
  ]
};

// data is passed to above template
var output = template(data);

// HTML element with id "boardList" is set to the output above
document.getElementById("company-content").innerHTML = output;
