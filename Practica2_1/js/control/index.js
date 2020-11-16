
/**
* @author Ismael Collado
* @see back
* @version 2020/nov
* @date 2020/11/10
* @listens window.onload
* @param none
*/


$(document).ready(function(){

    $("#result").css("display", "none")
    chromeNotValid = true;
    arrayCharsDNA = ['a', 'c', 't', 'g', 'A', 'C', 'T', 'G'];

    $(".cromosoma").click(function(){

        id = $(this).attr("id");
        len = id.length

        num_cromosoma = id.substring(2,len);

        $("#cromosomas").css("display", "none");
        $("#result").css("display", "flex");
        $("#result", document).css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 })

        $("#result h2 span").text(num_cromosoma);

    })

    $("#register").click(function(){

        textArea = $("#result textarea");
        textAreaText = textArea.val().split('');
        notFound = false;
        

        for (let index = 0; index < textAreaText.length; index++) {
            if($.isNumeric(textAreaText[index])){
                chromeNotValid = false;
            }else{
                if(($.inArray(textAreaText[index], arrayCharsDNA) < 0)){
                    notFound = true;
                    break;
                }
            }
        }

        if(chromeNotValid == true && notFound == false){
            var decision = confirm("Do you really want to introduce the data?");
            if (decision){
                window.open("http://localhost/M6/Practica2_1/popUpWindows/popupWindow.html", "_blank", "width=800px, height=300px");
            }
        }else{
            location.reload();
        }
    })

    $("#back").click(function(){
        location.reload();
    })



})
