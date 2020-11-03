
/**
 * Get the data from the opener and present it into a table
 * @param Gets no param, it's a onLoad on body function
 * 
 */

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

    for (let index = 3; index < (table.rows.length)+2; index++) {
        
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
                if(contentForEachTD.checked == false){
                    tableSummary.rows[index].cells[c].classList.add("red")
                }else{
                    tableSummary.rows[index].cells[c].classList.add("green")
                }
                tableSummary.rows[index].cells[c].innerText = contentForEachTD.checked;
            }   
        }
    }
}

/**
 * Used to close the popUp window that was open
 * @param {} Gets no param, it's a onClick function
 * 
 */

function closePop(){
    var daddy = window.self;
    daddy.opener = window.self;
    daddy.close();
}

/**
 * Used to print the popUp window that was open
 * @param {} Gets no param, it's a onClick function
 * 
 */
function printPop(){
    window.print();
}