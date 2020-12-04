
/**
* @author Ismael Collado
* @see back
* @version 2020/nov
* @date 2020/11/10
* @listens window.onload
* @param none
*/

window.onload = function () {

    divSubmited = document.getElementsByClassName("submited");
    divSubmited = divSubmited[0];
    divSubmited.style.display = "none";

}

function submited() {

    document.getElementsByClassName("container")[0].style.display = "none";
    productN = document.getElementById("productsNumber").value;
    document.getElementsByClassName("submited")[0].style.display = "flex";

    $(".submited", document).css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 })

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

        $("input:checkbox", document).each(function () {

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
* @author Ismael Collado
* @see back
* @version 2020/nov
* @date 2020/11/10
* @listens button.goBack
* @param none
 * 
 */
function goBack(){

    location.reload();

}

/**
* @author Ismael Collado
* @see back
* @version 2020/nov
* @date 2020/11/10
* @listens button.popUpWindow
* @param none
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


        if((inpS == "") || !isNaN(inpS) || flag == false || codeP === "" ){
            alert("Found invalid values")
            flag = false
            break;
        }
        

        for (let index = 0; index < codeP.length; index++) {

            if(codeP[index] == 'c' || codeP[index] == 'a' || codeP[index] == 'u' || codeP[index] == 't'){
                flag = true;
            }else{
                flag = false;
                break;
            }
        }
    }

    if(flag == true){
        var decision = confirm("Do you really want to introduce the data?");

        //No se porque, pero me estaba dando problemas la ruta relativa y he tenido que poner la absoluta. 

        if (decision){
            window.open("http://localhost/M6/Practica2/popUpWindows/dataSummary.html", "_blank", "width=800px, height=300px");
        }
    }

    
}
$(document).ready(function(){

    $("#img img").mouseenter(function(){
        $(this).animate({ height: "240px" })
    })
    $("#img img").mouseout(function(){
        $(this).animate({ height: "200px" })
    })

    
});
