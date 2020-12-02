window.onload = function(){

    document.getElementById("iframe").style.display = "none"

}

function introduce(){

    document.getElementById("clientform").style.display = "none"
    document.getElementById("iframe").style.display = "block"

    iframe = document.getElementById("iframe");

    content = iframe.contentWindow.document;

    selected = document.getElementById("select").selectedIndex;
    clients = document.getElementById("numberclients").value;
    optionTest = document.getElementById("select").options[selected].text

    table = content.getElementById("tbody");

    content.getElementById("service").innerHTML = optionTest;

    for (let index = 0; index < clients ; index++) {
        tableLenght = table.rows.lenght;
        newRow = table.insertRow(tableLenght);
        cell1 = newRow.insertCell(0);
        cell2 = newRow.insertCell(1);
        cell3 = newRow.insertCell(2);
        cell1.innerHTML = '<td><input class="newinput" type="text" placeholder="Name here"></td> ';
        cell2.innerHTML = '<td><input class="newinput" type="text" placeholder="Surname here"></td>';
        cell3.innerHTML = '<td><input class="newinput" type="text" placeholder="€€€"></td>';
    }

}
