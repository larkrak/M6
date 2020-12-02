window.onload = function(){


}


function confirmTable(){
    flag = true;
    contNumbers = 0;

    inputcollection = document.getElementsByClassName("newinput");

    for (let index = 0; index < inputcollection.length; index++) {
        val = inputcollection[index].value;
        if(!isNaN(val)){
           contNumbers++;
           inputcollection[index].style.background = "white";
           //The only comprobation about negative values i could do without internet connection 
           //(and this is bc val is a string and strings are array of chars)
           if(val[0] == "-"){
                flag = false;
                inputcollection[index].style.background = "#d13141";
           }
        }
        if(val == ""){
            inputcollection[index].style.background = "#d13141";
            flag = false;
        }else{
            inputcollection[index].style.background = "white";
        }
    }

    //this division is bc i always need the same number of inputs with a number. 
    //always need to be numberOfInputs / cells = howManyNumbersIFound

    if(inputcollection.length / 3 != contNumbers){
        flag = false;
    }

    if(flag == false){
        
    }else{

        var decision = confirm("Do you really want to introduce the data?");

        if (decision){
            window.open("../popUpWindows/popUpWindow.html", "_blank", "width=800px, height=300px");
        }

    }

}

function goBack(){
    index = window.parent.document;
    document.getElementById("tbody").innerHTML = ""
    index.getElementById("iframe").style.display = "none";
    index.getElementById("clientform").style.display = "block"
}


