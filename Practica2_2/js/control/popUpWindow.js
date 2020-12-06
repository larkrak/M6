
/**
* @author Ismael Collado
* @version 2020/nov
* @date 2020/11/10
* @listens body.onLoad
* @param none
 * 
 */

$(document).ready(function(){

    productsArray = window.ProductsArray;
    productType = window.TypeProduct;

    parent = window.opener.document;
    var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    $("#time").text(days[d.getDay()] + ", " +d.getDate() + " of " + months[d.getMonth()] + " of " + d.getFullYear())
    $("#propertyType").text(productType.Type)

    $.each(productsArray, function(key, element) {
        $("#tableSummary").append("<tr><td>"+element.Name+"</td><td>"+element.Code+"</td><td>"+element.Tested+"</td></tr>");
    });

    $("#tableSummary td:contains('true')").css("color", "green")
    $("#tableSummary td:contains('false')").css("color", "red")

    $("#close").click(function(){
        window.close();
    })

    $("#print").click(function(){
        window.print();
    })

})