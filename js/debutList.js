// debut TEMPLATE

// sets variable source to boardTemplate id in debut.html
var source = document.getElementById("debutTemplate").innerHTML;

// Handlebars compiles the above source into a template
var template = Handlebars.compile(source);

// data
var data = {
  photo: [
    {img:"http://farm9.staticflickr.com/8382/8558295631_0f56c1284f_b.jpg", title: "Winter Dance"},
    {img:"http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_b.jpg", title: "The Cleaner"},
    {img:"http://farm9.staticflickr.com/8225/8558295635_b1c5ce2794_b.jpg", title: "The Uninvited Guest"},
    {img:"http://farm9.staticflickr.com/8383/8563475581_df05e9906d_b.jpg", title: "Oh no, not again!"},
    {img:"http://farm9.staticflickr.com/8235/8559402846_8b7f82e05d_b.jpg", title: "Swan Lake"},
    {img:"http://farm9.staticflickr.com/8235/8558295467_e89e95e05a_b.jpg", title: "The Shake"},
    {img:"http://farm9.staticflickr.com/8378/8559402848_9fcd90d20b_b.jpg", title: "Who's that, mommy?"}
  ]
};

// data is passed to above template
var output = template(data);

// HTML element with id "boardList" is set to the output above
document.getElementById("debut-content").innerHTML = output;
