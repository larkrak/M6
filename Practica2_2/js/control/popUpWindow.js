
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


    console.log(productsArray)
    size = Object.getOwnPropertyNames(productsArray[index]).length;
    for (let index = 0; index < productsArray.length; index++) {
        
        $("#tableSummary").append("<tr>");
        for (let index = 0; index < size; index++) {
            
            
        }

    }




})