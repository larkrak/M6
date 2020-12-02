
/**
* @author Ismael Collado
* @version 2020/dec
* @date 2020/12/02
* @param none
*/


/* Document Ready */

$(document).ready(function(){

    /*First of all need to hide the div where i'll 
    introduce the DNA sequence, becouse user didnt choose chromosome yet.*/

    $("#result").css("display", "none")
    chromeNotValid = true;

    /*Generate this array to validate the DNA sequence. */

    arrayCharsDNA = ['a', 'c', 't', 'g', 'A', 'C', 'T', 'G'];

    $(".cromosoma").click(function(){

        /* Added class "cromosoma" to each chromosome and an attribute id to select them. */

        id = $(this).attr("id");
        len = id.length
        
        /* I Need length becouse i defined id this way: cr1, cr2, cr3... cr13, cr14.
        So, if i always select the same values to get the number, when the number is 
        composed by 2 digits i wont be able to get both of them */

        num_cromosoma = id.substring(2,len);

        /* Hide the first crhomosome div and thos the second one. */

        $("#cromosomas").css("display", "none");
        $("#result").css("display", "flex");
        $("#result", document).css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 })

        $("#result h2 span").text(num_cromosoma);

    })

    $("#register").click(function(){

        /* I split the textarea text to get every char in the sequence and validate every one of them.
        This way, if i find an invalid value in first position, i break the iteration. */

        textArea = $("#result textarea");
        textAreaText = (textArea.val().split(''));
        notFound = false;
        chromeNotValid = true;

        if(textAreaText == ""){
            chromeNotValid = false;
        }

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
                window.open("./popUpwindows/popUpWindow.html", "_blank", "width=800px, height=300px");
            }
        }else{
            $.fn.goBack();
        }
    })

    $("#back").click(function(){
        $.fn.goBack();
    })

    /**
    * This function works to clean the element and then hide itself and show another. 
    * @author Ismael Collado
    * @version 2020/dec
    * @date 2020/12/02
    * @param none
    */

    $.fn.goBack = function(){ 
        $("#result textarea").val("");
        $("#result").css("display", "none");
        $("#cromosomas").css("display", "grid");
        $("#cromosomas", document).css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 })
    }


}) /* Document Ready */
