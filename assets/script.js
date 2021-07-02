//Displays time on top of page
var time = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(time);
console.log(time);

var hour = moment().format("HH");
console.log(moment().format("HH"));

// var t0900 = document.querySelector("#t0900")

//conditionals to update color of text area at given time

if(hour < 9) {
    $(t0900).addClass("future")
}else if (hour > 9) {
    $(t0900).addClass("past")
}else {
    $(t0900).addClass("present")
}

if(hour < 10) {
    $(t1000).addClass("future")
}else if (hour > 10) {
    $(t1000).addClass("past")
}else {
    $(t0900).addClass("present")
}

if(hour < 11) {
    $(t1100).addClass("future")
}else if (hour > 11) {
    $(t1100).addClass("past")
}else {
    $(t1100).addClass("present")
}

if(hour < 12) {
    $(t1200).addClass("future")
}else if (hour > 12) {
    $(t1200).addClass("past")
}else {
    $(t1200).addClass("present")
}

if(hour < 13) {
    $(t1300).addClass("future")
}else if (hour > 13) {
    $(t1300).addClass("past")
}else {
    $(t1300).addClass("present")
}

if(hour < 14) {
    $(t1400).addClass("future")
}else if (hour > 14) {
    $(t1400).addClass("past")
}else {
    $(t1400).addClass("present")
}

if(hour < 15) {
    $(t1500).addClass("future")
}else if (hour > 15) {
    $(t1500).addClass("past")
}else {
    $(t1500).addClass("present")
}

if(hour < 16) {
    $(t1600).addClass("future")
}else if (hour > 16) {
    $(t1600).addClass("past")
}else {
    $(t1600).addClass("present")
}

if(hour < 17) {
    $(t1700).addClass("future")
}else if (hour > 17) {
    $(t1700).addClass("past")
}else {
    $(t1700).addClass("present")
}

//Used to save text content of adjenda even after refresh using local storeage
var timeSlot1 = $("#timeSlot1");
var pants = $("container")

console.log(timeSlot1);

// timeSlot1.on("click",function(event){
//     event.preventDefault();
//     localStorage.setItem("note1",item1.value)
// })

pants.on("click","#save",function(event){
    event.preventDefault();
    console.log(event.target);
    // localStorage.setItem("note",item.value)
});