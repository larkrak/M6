
/**
* @author Ismael Collado
* @version 2020/dec
* @date 2020/12/14
* @param none
*
*/

$(document).ready(function () {

    /**
     * All the comprobations to add to database.
     * @author Ismael Collado
     * @param {none}
     * @listens HTMLElement - {Button} - {.sendData} 
     * @returns {void}
     */

    $(".sendData").click(function () {

        //As im clicking the button inside the first div, i can call his 
        //parent to get the container.
        //Need to get the number introduced and the selected option. 
        //ill need that to create the object
        firstContainer = $(this).parent();
        numberOfInputs = $("#productsNumber").val()
        productId = $("#optionSelect").val()
        productName = $("#optionSelect option:selected").text().split(" ")[0];
        // Object created for that type.
        productType = new ProductType(productId, productName); // OBJECT PRODUCTTYPE
        secondContainer = $(".container-form")[1];

        // First comprobation: Means == 0 would mean that NOTHING is introduced.0
        // Second comprobation: That value, if its a number, has to be different to 0
        // Third comprobation: If i negate isNaN, i got that value has to be numeric

        if (numberOfInputs.length != 0 && numberOfInputs != 0 && !isNaN(numberOfInputs)) {
            // Change the title to show the option selected.
            // Clean the input text just in case the user returns back.
            // Change to the original color becouse in other part of the code, it can change to red.
            $("#resultSelectP").text(productType.Type)
            $("#productsNumber").val("")
            $("#productsNumber").css("background-color", "#464646");
            // Hide the first container and show the second one.
            firstContainer.css("display", "none");
            $(secondContainer).removeClass("hidden");
            $(secondContainer).css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 })
            // Need to add rows for that number if introduced inputs.
            for (let index = 0; index < numberOfInputs; index++) {
                $('#contentTable').append('<tr class="newtr"><td><input type="text" placeholder="Specie here" value=""></td><td><input class="sequence" type="text" placeholder="' + $("#optionSelect option:selected").text() + '" value=""></td><td><input type="checkbox"></td></tr>');
            }
            // Before introducing data to de database, i need to check the introduced values
            // First of all need a counter to determinate the number of VALID introduced values. 
            // If that number is different from the number of inputs introduced by the user,
            // shouldnt be able to introduce data.
            $("#addData").click(function () {
                contValidInputs = 0;
                productsArray = []
                inputsTable = $("#contentTable input[type='text']");
                for (let index = 0; index < inputsTable.length; index++) {
                    //I put a class to the sequence input while i was adding them to the table.
                    if (inputsTable.eq(index).hasClass("sequence")) {
                        // With a ternary operator (just bc i was learning to use them), i call  /*validSequence (line95)*/
                        // validSequence got from parameters a sequence and a type. I run through the sequence
                        // and check every one of the chars is one of the DNA array or RNA array.
                        // if i find some invalid value, i break the loop and return false.

                        // So, this ternary operator is getting true when the sequence is valid
                        // In that case, i should chage the background color becouse its possible that was in red previously
                        // And add 1 to the counter. If i got false, change the background to red.
                        $.fn.validSequence(inputsTable.eq(index).val(), productType.Type) ? (inputsTable.eq(index).css("background-color", "#464646"), contValidInputs += 1) : inputsTable.eq(index).css("background-color", "#df4747ff")

                    } else {
                        // If the input is not one where i need to write a sequence, 
                        // Call another function where i got true if there are only letters.
                        // I was getting troubles writting:
                        //                          != "" || not negating
                        // So i decided to negate the results (the "true" result is in the false return)                                         
                        inputsTable.eq(index).val() == "" || !$.fn.validInput(inputsTable.eq(index)) ? inputsTable.eq(index).css("background-color", "#df4747ff") : (inputsTable.eq(index).css("background-color", "#464646"), contValidInputs += 1)
                    }
                }

                // If after this loop, the counter is equal to the number of inputs in the table, that means
                // that everything is OK.

                if (contValidInputs == inputsTable.length) {

                    //for each one of the new trs (added this class previously in a loop) ill need to
                    // get the value inside every input.

                    $("#contentTable tr.newtr").each(function () {
                        // I first generate an array, where ill put the inputs value that ill find.
                        object = []
                        // As im inside the tr's, i can run through each cell. (td)
                        $.each(this.cells, function () {
                            var d = new Date(); // for now
                            var month = d.getMonth() + 1
                            date = d.getFullYear() + "/" + month + "/" + d.getDate() + " - " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
                            //I generate a DATE couse its an attribute to the object
                            //If i find an input that is type text, ill push them val to the array, other wise (means that the input is not text, so it has to be chekcbox) i get his checked attribute (t or f)
                            $(this).find("input").attr('type') == 'text' ? object.push($(this).find("input").val()) : object.push($(this).find("input").is(':checked'))
                        });
                        // Now it has finished one tr and everyone of the td. So, im still inside the each for TR
                        // and i can just push with 0, 1 and 2. The object array is always getting 3 values. 
                        // That array is always overwriting so i can always access to 0, 1 and 2.
                        // Just push that values to the array ill send to the popUp.
                        productsArray.push(new Product(productId, productName, object[0], object[1], object[2], date))
                    })

                    var w = window.open("popUpWindows/popUpWindow.html", "_blank", "width=800px, height=300px");
                    // Data im sending to the popUp.
                    w.TypeProduct = productType;
                    w.ProductsArray = productsArray
                }
            })

            $("#goBack").click(function () {

                // Function to clean the inputs and remove the new TRs added previously.

                inputsTable = $("#contentTable input[type='text']");
                $('#contentTable tr.newtr').remove()

                for (let index = 0; index < inputsTable.length; index++) {
                    inputsTable.eq(index).val("")
                }

                firstContainer.css("display", "flex");
                firstContainer.css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 })
                $(secondContainer).addClass("hidden")

            })

        } else {
            $("#productsNumber").css("background-color", "#df4747ff")
        }
    })

    /**
     * Checking if a sequence is valid from his type.
     * @author Ismael Collado
     * @param {string} sequence - The value inside an input.
     * @param {string} type - The attribute type from an object
     * 
     * @returns {boolean} - The ret varible.
     */

    $.fn.validSequence = function (sequence, type) {

        // This function receive a sequence and a type.
        // Just go through the sequence checking the chars. 
        // If one od them is not inside his array, break and return false.

        arrDNA = ["A", "C", "G", "T", "a", "c", "g", "t"];
        arrRNA = ["A", "C", "G", "U", "a", "c", "g", "u"];

        ret = true;

        if (sequence != 0) {
            for (let index = 0; index < sequence.length; index++) {
                if (type == 'DNA') {
                    ret = $.inArray(sequence[index], arrDNA) != -1 ? true : false;
                    if (!ret) break;
                }
                if (type == "RNA") {
                    ret = $.inArray(sequence[index], arrRNA) != -1 ? true : false;
                    if (!ret) break;
                }
            }
        } else {
            ret = false;
        }
        return ret;
    };
 
    /**
     * Checking an input value.
     * @author Ismael Collado
     * @param {HTMLTableElement} input - The input to check
     * 
     * @returns {boolean} - The ret varible.
     */

    $.fn.validInput = function (input) {

        // Just get an input object. ill get his value and check that only contains letters or special chars

        arr = input.val();
        ret = true;

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
        return ret;
    }
})