$(document).ready(function(){

    /* Arrays to show the date properly.*/

    var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    $("#time").text(days[d.getDay()] + ", " +d.getDate() + " of " + months[d.getMonth()] + " of " + d.getFullYear());


    /* First of all need to select the parent, becouse there is were are the info i need. */

    frame = window.opener.document;

    numChromo = $("#cromoText span", frame).text();
    textDNA = $("#result textarea", frame).val();

    $("#tableSummary").append($('<tr>').append('<td class="new bordered"><td class="new bordered"><td class="new bordered">'))

    collectionNewTd = $(".new");
    collectionNewTd[0].innerText = "Chromosome";
    collectionNewTd[1].innerText = numChromo;
    collectionNewTd[2].innerText = textDNA;


    /**
    * @author Ismael Collado
    * @version 2020/dec
    * @date 2020/12/02
    * @listens button
    * @param none
    * 
    */

    $("#close").click(function(){
        window.close();
    })

    /**
    * @author Ismael Collado
    * @version 2020/dec
    * @date 2020/12/02
    * @listens button
    * @param none
    * 
    */
    
    $("#print").click(function(){
        window.print();
    })

})
