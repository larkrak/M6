/**
* @author Ismael Collado
* @see goBack()
* @version 2020/nov
* @date 2020/11/10
* @listens button.onClick
* @param none
 * 
 */

function submited() {

    window.parent.document.getElementsByClassName("container")[0].style.display = "none";
    productN = document.getElementById("productsNumber").value;
    window.parent.document.getElementsByClassName("submited")[0].style.display = "flex";

    $(".submited", window.parent.document).css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 })

    select = document.getElementById("optionSelect");
    table = window.parent.document.getElementById("contentTable");

    if (select.value != 1 && !isNaN(productN) || productN == "") {

        if(productN == ""){
            goBack();
        }

        selectText = select.options[select.selectedIndex].text;
        window.parent.document.getElementById("resultSelectP").textContent = selectText;

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

        $("input:checkbox", window.parent.document).each(function () {

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






