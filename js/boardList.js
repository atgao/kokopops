// BOARD MEMBERS TEMPLATE

// sets variable source to boardTemplate id in company.html
var source = document.getElementById("boardTemplate").innerHTML;

// Handlebars compiles the above source into a template
var template = Handlebars.compile(source);

// data
var data = {board: [
  {name: "Member 1", position: "Position Title", class: 2021, height: "168 cm", hometown: "Myrtle Beach, SC", bias: "EXO's Chen", concern: "recruiting szn :(", propic: "https://web.opendrive.com/api/v1/download/file.json/NTlfODQyNzYwM18?inline=1"},
  {name: "Member 2", position: "Position Title", class: 2021, height: "168 cm", hometown: "Myrtle Beach, SC", bias: "EXO's Chen", concern: "recruiting szn :(", propic: "https://web.opendrive.com/api/v1/download/file.json/NTlfODQyNzYwM18?inline=1"},
  {name: "Member 3", position: "Position Title", class: 2021, height: "168 cm", hometown: "Myrtle Beach, SC", bias: "EXO's Chen", concern: "recruiting szn :(", propic: "https://web.opendrive.com/api/v1/download/file.json/NTlfODQyNzYwM18?inline=1"},
  {name: "Member 4", position: "Position Title", class: 2021, height: "168 cm", hometown: "Myrtle Beach, SC", bias: "EXO's Chen", concern: "recruiting szn :(", propic: "https://web.opendrive.com/api/v1/download/file.json/NTlfODQyNzYwM18?inline=1"},
  {name: "Member 5", position: "Position Title", class: 2021, height: "168 cm", hometown: "Myrtle Beach, SC", bias: "EXO's Chen", concern: "recruiting szn :(", propic: "https://web.opendrive.com/api/v1/download/file.json/NTlfODQyNzYwM18?inline=1"},
  {name: "Member 6", position: "Position Title", class: 2021, height: "168 cm", hometown: "Myrtle Beach, SC", bias: "EXO's Chen", concern: "recruiting szn :(", propic: "https://web.opendrive.com/api/v1/download/file.json/NTlfODQyNzYwM18?inline=1"},
  {name: "Member 7", position: "Position Title", class: 2021, height: "168 cm", hometown: "Myrtle Beach, SC", bias: "EXO's Chen", concern: "recruiting szn :(", propic: "https://web.opendrive.com/api/v1/download/file.json/NTlfODQyNzYwM18?inline=1"},
  {name: "Member 8", position: "Position Title", class: 2021, height: "168 cm", hometown: "Myrtle Beach, SC", bias: "EXO's Chen", concern: "recruiting szn :(", propic: "https://web.opendrive.com/api/v1/download/file.json/NTlfODQyNzYwM18?inline=1"},
  {name: "Member 9", position: "Position Title", class: 2021, height: "168 cm", hometown: "Myrtle Beach, SC", bias: "EXO's Chen", concern: "recruiting szn :(", propic: "https://web.opendrive.com/api/v1/download/file.json/NTlfODQyNzYwM18?inline=1"},
  {name: "Member 10", position: "Position Title", class: 2021, height: "168 cm", hometown: "Myrtle Beach, SC", bias: "EXO's Chen", concern: "recruiting szn :(", propic: "https://web.opendrive.com/api/v1/download/file.json/NTlfODQyNzYwM18?inline=1"}
]};

// data is passed to above template
var output = template(data);

// HTML element with id "boardList" is set to the output above
document.getElementById("boardList").innerHTML = output;
