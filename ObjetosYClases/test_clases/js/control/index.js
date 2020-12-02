$(document).ready(function(){
    $("#butSubmit").click(function(event){
        var DNI, empName, surname, phone, birthday, salary;

        DNI = $("#DNI").val();
        empName = $("#empName").val();
        surname = $("#surname").val();
        phone = $("#phone").val();
        birthday = $("#birthdate").val();
        salary = $("#salary").val();

        var newEmployee = new Employee(DNI, empName, surname,
             phone, birthday, salary);
        
        console.log(newEmployee);
    });
});