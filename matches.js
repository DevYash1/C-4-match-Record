// write js code here corresponding to matches.html
var matchdetail = JSON.parse(localStorage.getItem("schedule"));
console.log(matchdetail);

var favArr = JSON.parse(localStorage.getItem("favourites")) || [];

matchdetail.forEach(function (elem) {
    var tableROw = document.createElement("tr");

    var matchNum = document.createElement("td");
    matchNum.innerText = elem.matchNumber;

    var teama = document.createElement("td");
    teama.innerText = elem.teamA;

    var teamb = document.createElement("td");
    teamb.innerText = elem.teamB;

    var Date = document.createElement("td");
    Date.innerText = elem.date;

    var Venue = document.createElement("td");
    Venue.innerText = elem.venue;

    var favourite = document.createElement("td");
    favourite.innerText = "Favourites";
    favourite.style.color = "green";
    favourite.style.cursor = "pointer";
    favourite.addEventListener("click", favouriteFun);

    function favouriteFun(){
        var favObj={
            match_Number: elem.matchNumber,
            team_A: elem.teamA,
            team_B: elem.teamB,
            date: elem.date,
            venue: elem.venue
        }

        favArr.push(favObj);

        localStorage.setItem("favourites", JSON.stringify(favArr));
    }

    document.querySelector("tbody").append(tableROw);
    tableROw.append(matchNum, teama, teamb, Date, Venue, favourite)
});
