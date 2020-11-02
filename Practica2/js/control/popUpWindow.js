function loadsData(){
    //This object contains all the information about the iframe object (opener)
    var frame = window.opener.document;
    
    var propertyType = frame.getElementById("propertyType").value;
    var numberProperties = frame.getElementById("numberProperties").value;

    console.log(propertyType);
    console.log(numberProperties);
    
    //This parent object referencer index.html
    var parent = window.opener.parent.document;   
    var myName = parent.getElementById("myName").value;

    document.getElementById("name").innerText = myName;
    document.getElementById("propertyType").innerText = propertyType;
    
    var strAux="";
    for (let index = 0; index < numberProperties; index++) {
        strAux += "<TR><TD>"+ propertyType +"</TD></TR>";
    }

    document.getElementById("tableClients").innerHTML += strAux;
}

function loadData(){

    frame = window.opener.document;
    parent = window.opener.parent.document;

    //specieType = frame.getElementById("propertyType").value;

    table = frame.getElementById("contentTable")

    lenR = table.rows.length

    
    for (let index = 1; index < lenR; index++) {
        for (var c = 0, m = table.rows[index].cells.length; c < m; c++) {
            input = table.rows[index].cells[c];

            console.log(input.children)
        }
        
    }


    

}