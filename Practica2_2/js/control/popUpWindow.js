
/**
* @author Ismael Collado
* @version 2020/dec
* @date 2020/12/14
* @param none
*
*/

$(document).ready(function () {

    productsArray = window.ProductsArray;
    productType = window.TypeProduct;

    parent = window.opener.document;
    // Generating the date to show it in the table
    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    $("#time").text(days[d.getDay()] + ", " + d.getDate() + " of " + months[d.getMonth()] + " of " + d.getFullYear())
    $("#propertyType").text(productType.Type)

    // For each element inside the introduced array, ill add a tr, calling them
    // attributes.

    $.each(productsArray, function (key, element) {
        $("#tableSummary").append("<tr><td>" + element.Name + "</td><td>" + element.Code + "</td><td>" + element.Tested + "</td></tr>");
    });

    //Now i find td with true and false to paint them

    $("#tableSummary td:contains('true')").css("color", "green")
    $("#tableSummary td:contains('false')").css("color", "red")

    /**
     * Closing the window
     * @author Ismael Collado
     * @param {none} 
     * @returns {void}
     */

    $("#close").click(function () {
        window.close();
    })

    /**
     * Printing the window
     * @author Ismael Collado
     * @param {none} 
     * @returns {void}
     */

    $("#print").click(function () {
        window.print();
    })

})