
function loadData(){

    frame = window.opener.document;
    table = frame.getElementById("contentTable");
    tableSummary = document.getElementById("tableSummary");
    document.getElementById("data").innerText = frame.getElementById("resultSelectP").innerText;
    document.getElementById("spanTotal").innerText = (table.rows.length) - 1
    
    var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById("time").innerHTML = days[d.getDay()] + ", " +d.getDate() + " of " + months[d.getMonth()] + " of " + d.getFullYear();

    console.log(table)
    arrVals = []

    for (let index = 3; index < (table.rows.length)+2; index++) {
        
        console.log(table.rows.length)

        newRow = document.getElementById("tableSummary").insertRow()
        newRow.classList.add("bordered")
        newRow.insertCell(0)
        newRow.insertCell(1)
        newRow.insertCell(2)

        for (let c = 0; c < 3; c++) {

            contentForEachTD = table.rows[index-2].cells[c].childNodes[0];
            if(contentForEachTD.type == 'text'){
                tableSummary.rows[index].cells[c].innerText = contentForEachTD.value;
            }else{
                tableSummary.rows[index].cells[c].innerText = contentForEachTD.checked;
            }   
        }
    }

    console.log(tableSummary)


    console.log(arrVals)

}