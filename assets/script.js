//Displays time on top of page
var time = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(time);
console.log(time)

//Used to save text content of adjenda even after refresh using local storeage
var form1 = document.querySelector("#form1")
