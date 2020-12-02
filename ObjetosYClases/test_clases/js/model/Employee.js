class Employee extends Person {
    _salary;

    constructor(pDNI, pName, pSurname, pPhone, pBirthdate, pSalary) {
        //super invokes the constructor of the father class
        //Mandatory when extending a class
        super(pDNI, pName, pSurname, pPhone, pBirthdate);

        this._salary = pSalary;
    }
    
    get Salary(){
        return this._salary;
    }

    set Salary(pSalary){
        this._salary = pSalary;
    }
}