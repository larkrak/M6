$(document).ready(function(){

    //initialize this counter to get my ID everytime the page charges for first time

    var contId = 0;

    //hidden the containers i dont need right now 

    $(".first-hidden").css("display", "none")
    $(".second-hidden").css("display", "none")
    

    var illnessesArray = ["Acute lymphoblastic leukemia", "Acute myeloid leukemia", "Adrenocortical carcinoma", "Cervical cancer", "Childhood cancers", "Gestational trophoblastic tumor", "Laryngeal cancer", "Lung cancer", "AIDS", "Oral cancer", "Throat cancer"];
    var analysisTypeNamesArray = ["Accurate analysis", "Ordinary analysis", "Minumim analysis"];

    $("#mainOptions a:nth-child(1)").click(function(){

        //When clicked the a i need, i'll hide the containers i dont 

        $(".first-hidden").css("display", "none")
        $(".second-hidden").css("display", "none")
        $(".first-hidden").css("display", "block")
        $("#illnessOptions h5").text("")

        //Showing the array values

        for (let index = 0; index < illnessesArray.length; index++) {
            $("#illnessOptions h5").append("<a href='#'><label style='padding:20px'>"+illnessesArray[index]+"</label></a>")
        }

    $("#illnessOptions h5 a").click(function(){

        //This line is in order to reset the values just if the user want to do a new research

        $(".third-hidden input[type='text'], .third-hidden textarea, .third-hidden input[type='number']").val("")

        $(".first-hidden").css("display", "none")
        $(".second-hidden").css("display", "block")
        $(".third-hidden").css("display", "block")

        //Generate the object, ill need it to add to the patient.

        illnessObj = new Illness(contId, $(this).text())
        
        $("#illnessText").text(illnessObj.Name)
        $("#select-form").html("")
        for (let index = 0; index < analysisTypeNamesArray.length; index++) {
            
            //Generating the select with the array values generated previously

            $("#select-form").append(new Option(analysisTypeNamesArray[index], index));
            
        }

        $(".btn-success").click(function(){
            analysisName = $("#select-form option:selected").text()
            analysisTypeObj = new AnalysisType(contId, analysisName)
            contInvalid = 0;
            contValid = 0;

            //Calling a couple of functions to check the inputs values

            if($.fn.validInput($("#fname")) == false){
                $("#fname").css("background-color", "red")
                contInvalid += 1
            }else{
                $("#fname").css("background-color", "white")
                contValid += 1
            }

            if($.fn.validSequence($("#sequence").val()) == false){
                $("#sequence").css("background-color", "red")
                contInvalid += 1
            }else{
                $("#sequence").css("background-color", "white")
                contValid += 1
            }

            if(!$.isNumeric($("#age").val())){
                $("#age").css("background-color", "red")
                contInvalid += 1
            }else{
                $("#age").css("background-color", "white")
                contValid += 1
            }

            //When the count invalid and the countvalid are not equal, it means i can proceed to create the patient.

            if(contInvalid == 0 && contValid != 0){
                fullname = $("#fname").val()
                dnaCode = $("#sequence").val()
                age = $("#age").val()
                patient = new Patient(contId, illnessObj, analysisTypeObj, fullname, dnaCode, age)
                contId += 1
                console.log(patient)

            }
        })

        //In theory this function is only cleaning my inputs but idk why its doing double objects if clicked
        //i mean, first time the patient is generated as it should, with id = 0
        //If i generate another one, it does with id = 1
        //If i click back and then generate another object, its generating 2 objects, one id = 2 and the next with id = 3

        $("#back").click(function(){

            $(".third-hidden input[type='text'], .third-hidden textarea, .third-hidden input[type='number']").val("")
            $("#illnessText").text("")

            $(".second-hidden").css("display", "none")
            $(".third-hidden").css("display", "none")

        })
        

    })

    })


    $.fn.validSequence = function (sequence) {

        // This function receive a sequence and a type.
        // Just go through the sequence checking the chars. 
        // If one od them is not inside his array, break and return false.

        arrDNA = ["A", "C", "G", "T", "a", "c", "g", "t"];

        ret = true;

        if (sequence != 0) {
            for (let index = 0; index < sequence.length; index++) {
                ret = $.inArray(sequence[index], arrDNA) != -1 ? true : false;
                if (!ret) break;
            }
        } else {
            ret = false;
        }
        return ret;
    };

    $.fn.validInput = function (input) {

        // Just get an input object. ill get his value and check that only contains letters or special chars

        arr = input.val();
        ret = true;

        if(arr.trim() != ""){
            for (let index = 0; index < arr.length; index++) {
                if ($.isNumeric(arr[index])) {
                    ret = false;
                    break;
                }
                if (/^[a-zA-Z- ]*$/.test(arr[index]) == false) {
                    ret = false;
                    break;
                }
            }
        }else{
            ret = false
        }
        return ret;
    }
    

})