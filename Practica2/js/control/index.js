
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
