// write js code here corresponding to favourites.html

var favourite = JSON.parse(localStorage.getItem("favourites"));
console.log(favourite);

favourite.forEach(function (elem) {
    var tablerow = document.createElement("tr");

    var matchNumber = document.createElement("td");
    matchNumber.innerText = elem.match_Number;

    var teamA = document.createElement("td");
    teamA.innerText = elem.team_A;

    var teamB = document.createElement("td");
    teamB.innerText = elem.team_B;

    var date = document.createElement("td");
    date.innerText = elem.date;

    var venue = document.createElement("td");
    venue.innerText = elem.venue;

    var remove = document.createElement("td");
    remove.innerText = "Remove as Favourite";
    remove.style.color = "red";
    remove.style.cursor = "pointer";
    remove.addEventListener("click", delFun);

    function delFun(){
        remove.parentNode.remove();
        
    }

    document.querySelector("tbody").append(tablerow);
    tablerow.append(matchNumber, teamA, teamB, date, venue, remove)
});