function loadData(){
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