$(document).ready(function(){

    $(".enviar").click(function(){

        //As im clicking the button inside the first div, i can call his parent to get the container.
        //Need to get the number introduced and the selected option. ill need that to create the object
        firstContainer = $(this).parent();
        numberOfInputs = $("#productsNumber").val()
        productId = $("#optionSelect").val()
        productName = $("#optionSelect option:selected").text().split(" ")[0];
        // Object created for that type.
        productType = new ProductType(productId, productName); // OBJECT PRODUCTTYPE
        secondContainer = $(".container-form")[1];

        if(numberOfInputs.length != 0 && numberOfInputs != 0 && !isNaN(numberOfInputs)){
            $("#resultSelectP").text(productType.Type)
            $("#productsNumber").val("")
            $("#productsNumber").css("background-color", "#464646");
            firstContainer.css("display","none");
            $(secondContainer).removeClass("hidden");
            $(secondContainer).css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 })
            
            for (let index = 0; index < numberOfInputs; index++) {
                $('#contentTable').append('<tr class="newtr"><td><input type="text" placeholder="Specie here" value=""></td><td><input class="sequence" type="text" placeholder="'+$("#optionSelect option:selected").text()+'" value=""></td><td><input type="checkbox"></td></tr>');
            }
            $("#addData").click(function(){
                contValidInputs = 0;
                productsArray = []
                inputsTable = $("#contentTable input[type='text']");
                for (let index = 0; index < inputsTable.length; index++) { 

                    if(inputsTable.eq(index).hasClass("sequence")){
                        $.fn.validSequence(inputsTable.eq(index).val(), productType.Type)? (inputsTable.eq(index).css("background-color", "#464646"), contValidInputs += 1): inputsTable.eq(index).css("background-color", "#df4747ff")

                    }else{
                        inputsTable.eq(index).val() == "" || !$.fn.validInput(inputsTable.eq(index)) ? inputsTable.eq(index).css("background-color", "#df4747ff") : (inputsTable.eq(index).css("background-color", "#464646"), contValidInputs += 1)
                    }
                }

                if(contValidInputs == inputsTable.length){

                    $("#contentTable tr.newtr").each(function(){
                        object = []
                        $.each(this.cells, function(){
                            var d = new Date(); // for now
                            var month = d.getMonth()+1
                            date=d.getFullYear()+"/"+month+"/"+d.getDate()+" - "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
                            $(this).find("input").attr('type') == 'text' ? object.push($(this).find("input").val()) : object.push($(this).find("input").is(':checked'))
                        });
                        productsArray.push(new Product(productId, productName, object[0], object[1], object[2], date))
                    })

                    var decision = confirm("Do you really want to introduce the data?");

                    if (decision){
                        var w = window.open("popUpWindows/popUpWindow.html", "_blank", "width=800px, height=300px");
                        w.TypeProduct = productType;
                        w.ProductsArray = productsArray
                    }
                }
                //console.log(productsArray)
            })

            $("#goBack").click(function(){

                inputsTable = $("#contentTable input[type='text']");
                $('#contentTable tr.newtr').remove()

                for (let index = 0; index < inputsTable.length; index++) {
                    inputsTable.eq(index).val("")
                }

                firstContainer.css("display","flex");
                firstContainer.css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 })
                $(secondContainer).addClass("hidden")

            })

        }else{
            $("#productsNumber").css("background-color", "#df4747ff")
        }
    })

    $.fn.validSequence = function (sequence, type) {

        arrDNA = ["A", "C", "G", "T", "a", "c", "g", "t"];
        arrRNA = ["A", "C", "G", "U", "a", "c", "g", "u"];

        ret = true;

        if(sequence != 0){
            for (let index = 0; index < sequence.length; index++) {
                if(type == 'DNA'){
                    ret = $.inArray(sequence[index], arrDNA) != -1? true : false;
                    if(!ret) break;
                }
                if(type == "RNA"){
                    ret = $.inArray(sequence[index], arrRNA) != -1? true : false;
                    if(!ret) break;
                }
            }
        }else{
            ret = false;
        }
        return ret;
    };

    $.fn.validInput = function(input){

        arr = input.val();
        ret = true;

        for (let index = 0; index < arr.length; index++) {
            if($.isNumeric(arr[index])){
                ret = false;
                break;
            }
            if(/^[a-zA-Z- ]*$/.test(arr[index]) == false) {
                ret = false;
                break;
            }
        }
        return ret;
    }

    //console.log($.fn.checkSequence("u", "RNA"))

})