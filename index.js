// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit", submitFun);

var playerData = JSON.parse(localStorage.getItem("schedule")) || [];

function submitFun(){
event.preventDefault();

    var dataObj = {
        matchNumber: document.querySelector("#matchNum").value,
        teamA: document.querySelector("#teamA").value,
        teamB:document.querySelector("#teamB").value,
        date: document.querySelector("#date").value,
        venue:document.querySelector("#venue").value,
    }
    console.log(dataObj);

    playerData.push(dataObj);

    console.log(playerData);

    localStorage.setItem("schedule", JSON.stringify(playerData));

}