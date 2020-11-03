/**
 * Used to hide the second div on the iframe
 * @param Gets no param, it's a onLoad function
 * 
 */

window.onload = function () {

    divSubmited = document.getElementsByClassName("submited");
    divSubmited = divSubmited[0];
    divSubmited.style.display = "none";

}

/**
 * Get the data in the first form and try to validate it to be able to show the second div
 * @param Gets no param, it's a onClick function
 * 
 */

function submited() {
    document.getElementById("container-form").style.display = "none";
    productN = document.getElementById("productsNumber").value;
    divSubmited.style.display = "flex";
    $(".submited").css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 })

    select = document.getElementById("optionSelect");
    table = document.getElementById("contentTable");


    if (select.value != 1 && !isNaN(productN) || productN == "") {

        if(productN == ""){
            goBack();
        }

        selectText = select.options[select.selectedIndex].text;
        document.getElementById("resultSelectP").textContent = selectText;

        tableLenght = table.rows.lenght;

        for (let index = 0; index < productN; index++) {
            tableLenght = table.rows.lenght;
            newRow = table.insertRow(tableLenght);
            newRow.className = "bordered";
            cell1 = newRow.insertCell(0);
            cell2 = newRow.insertCell(1);
            cell3 = newRow.insertCell(2);
            cell1.innerHTML = '<td><input type="text" id="specie'+index+'" placeholder="Specie here"></td> ';
            cell2.innerHTML = '<td><input type="text" id="code'+index+'" placeholder="'+selectText+'"></td>';
            cell3.innerHTML = '<td><input type="checkbox"></td>';
        }
        $("input:checkbox").each(function () {

            random = Math.floor((Math.random() * 10) + 1);

            if (random >= 5) {
                $(this).prop('checked', true)
            } else {
                $(this).prop('checked', false)
            }
        })
    }else{
        goBack();
    }
}
/**
 * Used to reload the page to go back
 * @param Gets no param, it's a onLoad on body function
 * 
 */
function goBack(){

    location.reload();

}

/**
 * Used to the second validation. In orden to validate the DNA sequence.
 * @param Gets no param, it's a onClick function
 * 
 */

function popUpWindow(){

    table = document.getElementById("contentTable");

    len = table.rows.length
    flag = true;
    
    for (let index = 0; index < (len - 1); index++) {
        ids= "specie"+index
        code = "code"+index


        inpS = document.getElementById(ids).value
        codeP = document.getElementById(code).value

        console.log(codeP)

        for (let index = 0; index < codeP.length; index++) {

            if(codeP[index] == 'c' || codeP[index] == 'a' || codeP[index] == 'u' || codeP[index] == 't'){
                flag = true;
            }else{
                flag = false;
                break;
            }
        }

        console.log(flag)

        if((inpS == "") || !isNaN(inpS) || flag == false ){
            alert("Found invalid values")
            break;
        }
        
    }

    if(flag == true){
        var decision = confirm("Do you really want to introduce the data?");

        if (decision){
            window.open("../popUpWindows/dataSummary.html", "_blank", "width=800px, height=300px");
        }
    }

    
}


