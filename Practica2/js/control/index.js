window.onload = function () {

    divSubmited = document.getElementsByClassName("submited");
    divSubmited = divSubmited[0];
    divSubmited.style.display = "none";

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