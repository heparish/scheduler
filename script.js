$(document).ready(function () {
const m = moment();

var date = (m.format("[Today is ] dddd [the ] Do [of ] MMMM[, ] YYYY"));
$("#currentDay").text(date);

const clock = $("#currentTime");

function updateTime () {
    const now = moment();
    const humanReadable = now.format('hh:mm:ssA');

    currentTime.textContent = humanReadable;
}

setInterval (updateTime, 1000);
updateTime();


var time = parseInt(moment().format('HH'));
    console.log(time)

    var $text9AM = $("#text9AM");
    var $text10AM = $("#text10AM");
    var $text11AM = $("#text11AM");
    var $text12PM = $("#text12PM");
    var $text1PM = $("#text1PM");
    var $text2PM = $("#text2PM");
    var $text3PM = $("#text3PM");
    var $text4PM = $("#text4PM");
    var $text5PM = $("#text5PM");


    $("textarea").each(function () {
        var name = parseInt($(this).attr("name"));
        if (name < time) {
            $(this).addClass("future");
        }


        if (name > time) {
            $(this).addClass("past")
        }

        if (name === time) {
            $(this).addClass("present")
        }
    })

        $("button").on("click", function () {

            localStorage.setItem("9AM", ($text9AM.val()))
            localStorage.setItem("10AM", ($text10AM.val()))
            localStorage.setItem("11AM", ($text11AM.val()))
            localStorage.setItem("12PM", ($text12PM.val()))
            localStorage.setItem("13PM", ($text1PM.val()))
            localStorage.setItem("14PM", ($text2PM.val()))
            localStorage.setItem("15PM", ($text3PM.val()))
            localStorage.setItem("16PM", ($text4PM.val()))
            localStorage.setItem("17PM", ($text5PM.val()))
        
        })
    
        $("#text9AM").append(localStorage.getItem("9AM"));
        $("#text10AM").append(localStorage.getItem("10AM"));
        $("#text11AM").append(localStorage.getItem("11AM"));
        $("#text12PM").append(localStorage.getItem("12PM"));
        $("#text1PM").append(localStorage.getItem("13PM"));
        $("#text2PM").append(localStorage.getItem("14PM"));
        $("#text3PM").append(localStorage.getItem("15PM"));
        $("#text4PM").append(localStorage.getItem("16PM"));
        $("#text5PM").append(localStorage.getItem("17PM"));
    
    })
        


    