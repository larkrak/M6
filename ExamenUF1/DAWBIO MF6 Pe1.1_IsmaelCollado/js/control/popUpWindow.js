
/**
* @author Ismael Collado
* @version 2020/nov
* @date 2020/11/10
* @listens body.onLoad
* @param none
 * 
 */

function loadData(){

    frame = window.opener.document;
    table = frame.getElementById("table");
    tableSummary = document.getElementById("summary");
    document.getElementById("service").innerText = frame.getElementById("service").innerText;
    
    var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById("time").innerHTML = days[d.getDay()] + ", " +d.getDate() + " of " + months[d.getMonth()] + " of " + d.getFullYear();

    //console.log(table.rows.length)

    console.log(frame.getElementById("table"))

    for (let index = 1; index < table.rows.length; index++) {
        newRow = tableSummary.insertRow();
        newRow.insertCell(0)
        newRow.insertCell(1)
        newRow.insertCell(2)

        for (let c = 0; c < 3; c++) {
            valInput = table.rows[index].cells[c].childNodes[0].value;

            summary.rows[index].cells[c].innerHTML = valInput;
    
        }
        
        
    }

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
* @author Ismael Collado
* @version 2020/nov
* @date 2020/11/10
* @listens button.onClick
* @param none
 * 
 */

function closePop(){
    var daddy = window.self;
    daddy.opener = window.self;
    daddy.close();
}

/**
* @author Ismael Collado
* @version 2020/nov
* @date 2020/11/10
* @listens button.onClick
* @param none
 * 
 */
function printPop(){
    window.print();
}