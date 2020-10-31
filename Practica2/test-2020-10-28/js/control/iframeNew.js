function introduce(){
    var decision = confirm("Do you really want to introduce the properties?");

    if (decision){
        window.open("../popUpWindows/popUpWindow.html", "_blank", "width=400px, \
            height=400px");
    }
}