
function loadData(){

    frame = window.opener.document;

    table = frame.getElementById("contentTable");
    tableSummary = document.getElementById("tableSummary");

    console.log(table)
    arrVals = []

    for (let index = 1; index < table.rows.length; index++) {
        
        newRow = document.getElementById("tableSummary").insertRow()
        newRow.insertCell(0)
        newRow.insertCell(1)
        newRow.insertCell(2)

        for (let c = 0; c < table.rows[index].cells.length; c++) {

            contentForEachTD = table.rows[index].cells[c].childNodes[0];
            if(contentForEachTD.type == 'text'){
                arrVals.push(contentForEachTD.value)
            }else{
                arrVals.push(contentForEachTD.checked)
            }
            
        }
    }

    console.log(tableSummary)

    for (let index = 1; index < tableSummary.rows.length; index++) {
        
        for (let c = 0; c < 3; c++) {
            
            tableSummary.rows[index].cells[c].innerText = arrVals[c];

            console.log(arrVals[c])
            
        }
        
    }

    console.log(arrVals)

}