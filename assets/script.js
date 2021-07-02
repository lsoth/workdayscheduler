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
    $(t1000).addClass("present")
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

//Used to save text content of agenda even after refresh using local storeage
// var timeSlot1 = $("#t0900").value;
var mainContainer = $(".container")

// console.log(timeSlot1);

console.log(document.getElementById("t0900").value)

mainContainer.on("click","#save1",function(event){
    event.preventDefault();
        var text1 = document.getElementById("t0900").value;
        console.log(text1);
    localStorage.setItem("text1",text1)

});
mainContainer.on("click","#save2",function(event){
    event.preventDefault();
        var text2 = document.getElementById("t1000").value;
        console.log(text2);
    localStorage.setItem("text2",text2)

});
mainContainer.on("click","#save3",function(event){
    event.preventDefault();
        var text3 = document.getElementById("t1100").value;
        console.log(text3);
    localStorage.setItem("text3",text3)

});
mainContainer.on("click","#save4",function(event){
    event.preventDefault();
        var text4 = document.getElementById("t1200").value;
        console.log(text4);
    localStorage.setItem("text4",text4)

});
mainContainer.on("click","#save5",function(event){
    event.preventDefault();
        var text5 = document.getElementById("t1300").value;
        console.log(text5);
    localStorage.setItem("text5",text5)

});
mainContainer.on("click","#save6",function(event){
    event.preventDefault();
        var text6 = document.getElementById("t1400").value;
        console.log(text6
            );
    localStorage.setItem("text6",text6)

});
mainContainer.on("click","#save7",function(event){
    event.preventDefault();
        var text7 = document.getElementById("t1500").value;
        console.log(text7);
    localStorage.setItem("text7",text7)

});
mainContainer.on("click","#save8",function(event){
    event.preventDefault();
        var text8 = document.getElementById("t1600").value;
        console.log(text8);
    localStorage.setItem("text8",text8)

});
mainContainer.on("click","#save9",function(event){
    event.preventDefault();
        var text9 = document.getElementById("t1700").value;
        console.log(text9);
    localStorage.setItem("text9",text9)

});

//function to populate text on page if there is anything saved in local storage

function onStart(){
    if(document.getElementById("t0900").value){
    }else {
    document.getElementById("t0900").value = window.localStorage.getItem('text1');
    };
    if(document.getElementById("t1000").value){
    }else {
    document.getElementById("t1000").value = window.localStorage.getItem('text2');
    };
    if(document.getElementById("t1100").value){
    }else {
    document.getElementById("t1100").value = window.localStorage.getItem('text3');
    };
    if(document.getElementById("t1200").value){
    }else {
    document.getElementById("t1200").value = window.localStorage.getItem('text4');
    };
    if(document.getElementById("t1300").value){
    }else {
    document.getElementById("t1300").value = window.localStorage.getItem('text5');
    };
    if(document.getElementById("t1400").value){
    }else {
    document.getElementById("t1400").value = window.localStorage.getItem('text6');
    };
    if(document.getElementById("t1500").value){
    }else {
    document.getElementById("t1500").value = window.localStorage.getItem('text7');
    };
    if(document.getElementById("t1600").value){
    }else {
    document.getElementById("t1600").value = window.localStorage.getItem('text8');
    };
    if(document.getElementById("t1700").value){
    }else {
    document.getElementById("t1700").value = window.localStorage.getItem('text9');
    }
}

onStart();