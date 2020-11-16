$(document).ready(function(){

    var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    $("#time").text(days[d.getDay()] + ", " +d.getDate() + " of " + months[d.getMonth()] + " of " + d.getFullYear());


    frame = window.opener.document;

    console.log(frame)

    numChromo = $("#cromoText span", frame).text();
    textDNA = $("#result textarea", frame).val();

    console.log(textDNA)

    $("#tableSummary").append($('<tr>').append('<td class="new bordered"><td class="new bordered"><td class="new bordered">'))

    collectionNewTd = $(".new");
    console.log(collectionNewTd.length)
    collectionNewTd[0].innerText = "Chromosome";
    collectionNewTd[1].innerText = numChromo;
    collectionNewTd[2].innerText = textDNA;

})

function closePop(){
    var daddy = window.self;
    daddy.opener = window.self;
    daddy.close();
}

/**
* @author Ismael Collado
* @version 2020/nov
* @date 2020/11/10
* @listens button.onClick
* @param none
 * 
 */
function printPop(){
    window.print();
}